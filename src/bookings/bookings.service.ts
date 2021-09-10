import { Injectable } from '@nestjs/common';
import { addHours, roundToNearestMinutes } from 'date-fns/fp';
import _ from 'lodash/fp';

import { PrismaService } from '../prisma/prisma.service';

import { Booking } from '../generated/prisma/booking/booking.model';
import { BookingCreateInput } from '../generated/prisma/booking/booking-create.input';
import { BookingCreateWithoutDealershipInput } from '../generated/prisma/booking/booking-create-without-dealership.input';

const bookingDuration = 2;

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  countParallelIntervals(bookings: Booking[]): number {
    // TODO: rename intersections/overlaps to intervals?
    return _.flow(
      // generate an array of points
      _.flatMap<Booking, { type: 'x' | 'y'; time: Date }>((booking) => [
        { type: 'x', time: booking.time },
        { type: 'y', time: addHours(bookingDuration, booking.time) },
      ]),
      // sort the points in time
      _.orderBy(['time', 'type'], ['asc', 'desc']),
      // find the max overlaps
      _.reduce<{ type: 'x' | 'y'; time: Date }, { currentOverlaps: number; maxOverlaps: number }>(
        ({ currentOverlaps, maxOverlaps }, coordinate) => {
          if (coordinate.type === 'x')
            return {
              currentOverlaps: currentOverlaps + 1,
              maxOverlaps: Math.max(maxOverlaps, currentOverlaps + 1),
            };
          if (coordinate.type === 'y') return { maxOverlaps, currentOverlaps: currentOverlaps - 1 };
          throw new Error('something weird just happened');
        },
        { currentOverlaps: 0, maxOverlaps: 0 },
      ),
      _.get('maxOverlaps'),
    )(bookings);
  }

  async create(dealershipId: string, bookingCreateInput: BookingCreateWithoutDealershipInput) {
    const booking = await this.prisma.$transaction(async (prisma) => {
      const validatedBookingInput: BookingCreateInput & { time: Date } = {
        ...bookingCreateInput,
        dealership: {
          connect: {
            id: dealershipId,
          },
        },
        time: roundToNearestMinutes(new Date(bookingCreateInput.time)),
      };
      const res = await prisma.booking.findMany({
        where: {
          // x1 <= y2 && y1 <= x2
          time: {
            lte: addHours(bookingDuration, validatedBookingInput.time),
            gte: validatedBookingInput.time,
          },
        },
      });

      const numberOfIntersections = this.countParallelIntervals(res);
      console.log(numberOfIntersections);
      console.log(validatedBookingInput);

      // TODO: validate working hours
      // TODO: fetch capacity from settings
      // TODO: improve error
      if (numberOfIntersections >= 2) throw new Error('at maximum capacity');

      return prisma.booking.create({ data: validatedBookingInput });
    });

    // TODO: emit timeBooked event

    return booking;
  }
}

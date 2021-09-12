import { Injectable } from '@nestjs/common';
import { addMinutes, subMinutes, roundToNearestMinutes, compareAsc, set } from 'date-fns/fp';
import _ from 'lodash/fp';

import { PrismaService } from '../prisma/prisma.service';

import config from '../config';
import { Booking } from '../generated/prisma/booking/booking.model';
import { BookingCreateInput } from '../generated/prisma/booking/booking-create.input';
import { BookingCreateWithoutDealershipInput } from '../generated/prisma/booking/booking-create-without-dealership.input';

type ValidatedBookingCreateInput = BookingCreateInput & { time: Date };

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  countParallelIntervals(bookings: Booking[]): number {
    // TODO: rename intersections/overlaps to intervals?
    return _.flow(
      // generate an array of points
      _.flatMap<Booking, { type: 'x' | 'y'; time: Date }>((booking) => [
        { type: 'x', time: booking.time },
        { type: 'y', time: addMinutes(config.settings.bookingDuration, booking.time) },
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

  fitsIntoWorkingHours(booking: { time: Date }) {
    return (
      compareAsc(set(config.settings.workingHours.start, booking.time), booking.time) >= 0 &&
      compareAsc(
        addMinutes(config.settings.bookingDuration, booking.time),
        set(config.settings.workingHours.end, booking.time),
      ) >= 0
    );
  }

  async create(dealershipId: string, bookingCreateInput: BookingCreateWithoutDealershipInput) {
    const booking = await this.prisma.$transaction(async (prisma) => {
      const validatedBookingInput: ValidatedBookingCreateInput = {
        ...bookingCreateInput,
        dealership: {
          connect: {
            id: dealershipId,
          },
        },
        time: roundToNearestMinutes(new Date(bookingCreateInput.time)),
      };

      if (!this.fitsIntoWorkingHours(validatedBookingInput)) throw new Error('the booking is outside of working hours');

      // validate capacity
      const res = await prisma.booking.findMany({
        where: {
          // x < y + 2 && x > y - 2
          time: {
            lt: addMinutes(config.settings.bookingDuration, validatedBookingInput.time),
            gt: subMinutes(config.settings.bookingDuration, validatedBookingInput.time),
          },
        },
      });

      const numberOfIntersections = this.countParallelIntervals(res);
      console.log(numberOfIntersections);
      console.log(validatedBookingInput);

      // TODO: validate this vehicle isn't arealdy booked at that time?
      // TODO: fetch capacity from settings
      if (numberOfIntersections >= 2) throw new Error('at maximum capacity');

      return prisma.booking.create({ data: validatedBookingInput });
    });

    // TODO: emit timeBooked event

    return booking;
  }
}

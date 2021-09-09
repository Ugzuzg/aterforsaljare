import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { BookingsService } from './bookings.service';
import { Booking } from '../generated/prisma/booking/booking.model';
import { BookingCreateWithoutDealershipInput } from '../generated/prisma/booking/booking-create-without-dealership.input';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(private readonly bookingsService: BookingsService) {}

  @Mutation(() => Booking)
  createBooking(
    @Args('bookingCreateInput')
    bookingCreateInput: BookingCreateWithoutDealershipInput,
  ) {
    return this.bookingsService.create(bookingCreateInput);
  }

  @Query(() => Booking)
  findBooking() {}
}

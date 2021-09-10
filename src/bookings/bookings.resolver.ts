import { Resolver, Query, Mutation, Args, Context, Parent, ResolveField } from '@nestjs/graphql';

import { PrismaService } from '../prisma/prisma.service';
import { BookingsService } from './bookings.service';
import { Booking } from '../generated/prisma/booking/booking.model';
import { BookingCreateWithoutDealershipInput } from '../generated/prisma/booking/booking-create-without-dealership.input';
import { BookingWhereInput } from '../generated/prisma/booking/booking-where.input';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(private readonly bookingsService: BookingsService, private readonly prisma: PrismaService) {}

  @Mutation(() => Booking)
  createBooking(
    @Context('dealershipId') dealershipId: string,
    @Args('bookingCreateInput')
    bookingCreateInput: BookingCreateWithoutDealershipInput,
  ) {
    return this.bookingsService.create(dealershipId, bookingCreateInput);
  }

  @Query(() => [Booking])
  findBookings(
    @Context('dealershipId') dealershipId: string,
    @Args('bookingWhereInput', { nullable: true }) bookingWhereInput?: BookingWhereInput,
  ) {
    return this.prisma.booking.findMany({ where: { ...bookingWhereInput, dealershipId } });
  }

  @ResolveField()
  async customer(@Parent() booking: Booking) {
    return this.prisma.booking.findUnique({ where: { id: booking.id } }).customer();
  }

  @ResolveField()
  async vehicle(@Parent() booking: Booking) {
    return this.prisma.booking.findUnique({ where: { id: booking.id } }).vehicle();
  }
}

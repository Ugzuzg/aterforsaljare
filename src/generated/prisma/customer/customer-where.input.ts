import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class CustomerWhereInput {
  @Field(() => [CustomerWhereInput], { nullable: true })
  AND?: Array<CustomerWhereInput>;

  @Field(() => [CustomerWhereInput], { nullable: true })
  OR?: Array<CustomerWhereInput>;

  @Field(() => [CustomerWhereInput], { nullable: true })
  NOT?: Array<CustomerWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: StringFilter;

  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings?: BookingListRelationFilter;
}

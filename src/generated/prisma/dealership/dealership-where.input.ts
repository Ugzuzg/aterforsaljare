import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class DealershipWhereInput {
  @Field(() => [DealershipWhereInput], { nullable: true })
  AND?: Array<DealershipWhereInput>;

  @Field(() => [DealershipWhereInput], { nullable: true })
  OR?: Array<DealershipWhereInput>;

  @Field(() => [DealershipWhereInput], { nullable: true })
  NOT?: Array<DealershipWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings?: BookingListRelationFilter;
}

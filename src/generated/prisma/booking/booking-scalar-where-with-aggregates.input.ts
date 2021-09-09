import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BookingScalarWhereWithAggregatesInput {
  @Field(() => [BookingScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BookingScalarWhereWithAggregatesInput>;

  @Field(() => [BookingScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BookingScalarWhereWithAggregatesInput>;

  @Field(() => [BookingScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BookingScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  dealershipId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  customerId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  vehicleVin?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  time?: DateTimeWithAggregatesFilter;
}

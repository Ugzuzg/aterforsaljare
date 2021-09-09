import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BookingScalarWhereInput {
  @Field(() => [BookingScalarWhereInput], { nullable: true })
  AND?: Array<BookingScalarWhereInput>;

  @Field(() => [BookingScalarWhereInput], { nullable: true })
  OR?: Array<BookingScalarWhereInput>;

  @Field(() => [BookingScalarWhereInput], { nullable: true })
  NOT?: Array<BookingScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  dealershipId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  customerId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  vehicleVin?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  time?: DateTimeFilter;
}

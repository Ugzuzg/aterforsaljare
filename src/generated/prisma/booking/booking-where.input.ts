import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DealershipRelationFilter } from '../dealership/dealership-relation-filter.input';
import { CustomerRelationFilter } from '../customer/customer-relation-filter.input';
import { VehicleRelationFilter } from '../vehicle/vehicle-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BookingWhereInput {
  @Field(() => [BookingWhereInput], { nullable: true })
  AND?: Array<BookingWhereInput>;

  @Field(() => [BookingWhereInput], { nullable: true })
  OR?: Array<BookingWhereInput>;

  @Field(() => [BookingWhereInput], { nullable: true })
  NOT?: Array<BookingWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DealershipRelationFilter, { nullable: true })
  dealership?: DealershipRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  dealershipId?: StringFilter;

  @Field(() => CustomerRelationFilter, { nullable: true })
  customer?: CustomerRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  customerId?: StringFilter;

  @Field(() => VehicleRelationFilter, { nullable: true })
  vehicle?: VehicleRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  vehicleVin?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  time?: DateTimeFilter;
}

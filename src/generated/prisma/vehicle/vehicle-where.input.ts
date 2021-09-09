import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class VehicleWhereInput {
  @Field(() => [VehicleWhereInput], { nullable: true })
  AND?: Array<VehicleWhereInput>;

  @Field(() => [VehicleWhereInput], { nullable: true })
  OR?: Array<VehicleWhereInput>;

  @Field(() => [VehicleWhereInput], { nullable: true })
  NOT?: Array<VehicleWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  vin?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  model?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  make?: StringFilter;

  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings?: BookingListRelationFilter;
}

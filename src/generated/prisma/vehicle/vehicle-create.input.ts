import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedManyWithoutVehicleInput } from '../booking/booking-create-nested-many-without-vehicle.input';

@InputType()
export class VehicleCreateInput {
  @Field(() => String, { nullable: false })
  vin!: string;

  @Field(() => String, { nullable: false })
  model!: string;

  @Field(() => String, { nullable: false })
  make!: string;

  @Field(() => BookingCreateNestedManyWithoutVehicleInput, { nullable: true })
  bookings?: BookingCreateNestedManyWithoutVehicleInput;
}

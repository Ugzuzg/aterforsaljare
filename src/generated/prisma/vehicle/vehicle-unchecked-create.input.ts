import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutVehicleInput } from '../booking/booking-unchecked-create-nested-many-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  vin!: string;

  @Field(() => String, { nullable: false })
  model!: string;

  @Field(() => String, { nullable: false })
  make!: string;

  @Field(() => BookingUncheckedCreateNestedManyWithoutVehicleInput, {
    nullable: true,
  })
  bookings?: BookingUncheckedCreateNestedManyWithoutVehicleInput;
}

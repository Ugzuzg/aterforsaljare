import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutVehicleInput } from './booking-update-without-vehicle.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutVehicleInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutVehicleInput, { nullable: false })
  data!: BookingUpdateWithoutVehicleInput;
}

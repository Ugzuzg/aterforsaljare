import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutVehicleInput } from './booking-update-without-vehicle.input';
import { BookingCreateWithoutVehicleInput } from './booking-create-without-vehicle.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutVehicleInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutVehicleInput, { nullable: false })
  update!: BookingUpdateWithoutVehicleInput;

  @Field(() => BookingCreateWithoutVehicleInput, { nullable: false })
  create!: BookingCreateWithoutVehicleInput;
}

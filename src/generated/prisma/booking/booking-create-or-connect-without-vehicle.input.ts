import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutVehicleInput } from './booking-create-without-vehicle.input';

@InputType()
export class BookingCreateOrConnectWithoutVehicleInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingCreateWithoutVehicleInput, { nullable: false })
  create!: BookingCreateWithoutVehicleInput;
}

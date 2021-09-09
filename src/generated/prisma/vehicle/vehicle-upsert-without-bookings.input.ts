import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleUpdateWithoutBookingsInput } from './vehicle-update-without-bookings.input';
import { VehicleCreateWithoutBookingsInput } from './vehicle-create-without-bookings.input';

@InputType()
export class VehicleUpsertWithoutBookingsInput {
  @Field(() => VehicleUpdateWithoutBookingsInput, { nullable: false })
  update!: VehicleUpdateWithoutBookingsInput;

  @Field(() => VehicleCreateWithoutBookingsInput, { nullable: false })
  create!: VehicleCreateWithoutBookingsInput;
}

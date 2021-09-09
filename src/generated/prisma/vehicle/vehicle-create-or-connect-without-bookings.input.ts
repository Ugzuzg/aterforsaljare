import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleCreateWithoutBookingsInput } from './vehicle-create-without-bookings.input';

@InputType()
export class VehicleCreateOrConnectWithoutBookingsInput {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;

  @Field(() => VehicleCreateWithoutBookingsInput, { nullable: false })
  create!: VehicleCreateWithoutBookingsInput;
}

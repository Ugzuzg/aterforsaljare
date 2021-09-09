import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutBookingsInput } from './vehicle-create-without-bookings.input';
import { VehicleCreateOrConnectWithoutBookingsInput } from './vehicle-create-or-connect-without-bookings.input';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutBookingsInput {
  @Field(() => VehicleCreateWithoutBookingsInput, { nullable: true })
  create?: VehicleCreateWithoutBookingsInput;

  @Field(() => VehicleCreateOrConnectWithoutBookingsInput, { nullable: true })
  connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput;

  @Field(() => VehicleWhereUniqueInput, { nullable: true })
  connect?: VehicleWhereUniqueInput;
}

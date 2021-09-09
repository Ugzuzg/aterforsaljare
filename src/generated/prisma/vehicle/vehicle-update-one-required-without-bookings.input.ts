import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutBookingsInput } from './vehicle-create-without-bookings.input';
import { VehicleCreateOrConnectWithoutBookingsInput } from './vehicle-create-or-connect-without-bookings.input';
import { VehicleUpsertWithoutBookingsInput } from './vehicle-upsert-without-bookings.input';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithoutBookingsInput } from './vehicle-update-without-bookings.input';

@InputType()
export class VehicleUpdateOneRequiredWithoutBookingsInput {
  @Field(() => VehicleCreateWithoutBookingsInput, { nullable: true })
  create?: VehicleCreateWithoutBookingsInput;

  @Field(() => VehicleCreateOrConnectWithoutBookingsInput, { nullable: true })
  connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput;

  @Field(() => VehicleUpsertWithoutBookingsInput, { nullable: true })
  upsert?: VehicleUpsertWithoutBookingsInput;

  @Field(() => VehicleWhereUniqueInput, { nullable: true })
  connect?: VehicleWhereUniqueInput;

  @Field(() => VehicleUpdateWithoutBookingsInput, { nullable: true })
  update?: VehicleUpdateWithoutBookingsInput;
}

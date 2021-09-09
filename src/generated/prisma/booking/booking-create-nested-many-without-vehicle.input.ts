import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutVehicleInput } from './booking-create-without-vehicle.input';
import { BookingCreateOrConnectWithoutVehicleInput } from './booking-create-or-connect-without-vehicle.input';
import { BookingCreateManyVehicleInputEnvelope } from './booking-create-many-vehicle-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedManyWithoutVehicleInput {
  @Field(() => [BookingCreateWithoutVehicleInput], { nullable: true })
  create?: Array<BookingCreateWithoutVehicleInput>;

  @Field(() => [BookingCreateOrConnectWithoutVehicleInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutVehicleInput>;

  @Field(() => BookingCreateManyVehicleInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyVehicleInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;
}

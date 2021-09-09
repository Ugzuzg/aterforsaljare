import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutVehicleInput } from './booking-create-without-vehicle.input';
import { BookingCreateOrConnectWithoutVehicleInput } from './booking-create-or-connect-without-vehicle.input';
import { BookingUpsertWithWhereUniqueWithoutVehicleInput } from './booking-upsert-with-where-unique-without-vehicle.input';
import { BookingCreateManyVehicleInputEnvelope } from './booking-create-many-vehicle-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutVehicleInput } from './booking-update-with-where-unique-without-vehicle.input';
import { BookingUpdateManyWithWhereWithoutVehicleInput } from './booking-update-many-with-where-without-vehicle.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutVehicleInput {
  @Field(() => [BookingCreateWithoutVehicleInput], { nullable: true })
  create?: Array<BookingCreateWithoutVehicleInput>;

  @Field(() => [BookingCreateOrConnectWithoutVehicleInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutVehicleInput>;

  @Field(() => [BookingUpsertWithWhereUniqueWithoutVehicleInput], {
    nullable: true,
  })
  upsert?: Array<BookingUpsertWithWhereUniqueWithoutVehicleInput>;

  @Field(() => BookingCreateManyVehicleInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyVehicleInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  set?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  delete?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingUpdateWithWhereUniqueWithoutVehicleInput], {
    nullable: true,
  })
  update?: Array<BookingUpdateWithWhereUniqueWithoutVehicleInput>;

  @Field(() => [BookingUpdateManyWithWhereWithoutVehicleInput], {
    nullable: true,
  })
  updateMany?: Array<BookingUpdateManyWithWhereWithoutVehicleInput>;

  @Field(() => [BookingScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookingScalarWhereInput>;
}

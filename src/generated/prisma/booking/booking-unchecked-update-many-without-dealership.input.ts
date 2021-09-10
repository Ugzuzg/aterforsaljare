import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutDealershipInput } from './booking-create-without-dealership.input';
import { BookingCreateOrConnectWithoutDealershipInput } from './booking-create-or-connect-without-dealership.input';
import { BookingUpsertWithWhereUniqueWithoutDealershipInput } from './booking-upsert-with-where-unique-without-dealership.input';
import { BookingCreateManyDealershipInputEnvelope } from './booking-create-many-dealership-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutDealershipInput } from './booking-update-with-where-unique-without-dealership.input';
import { BookingUpdateManyWithWhereWithoutDealershipInput } from './booking-update-many-with-where-without-dealership.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutDealershipInput {
  @Field(() => [BookingCreateWithoutDealershipInput], { nullable: true })
  create?: Array<BookingCreateWithoutDealershipInput>;

  @Field(() => [BookingCreateOrConnectWithoutDealershipInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutDealershipInput>;

  @Field(() => [BookingUpsertWithWhereUniqueWithoutDealershipInput], { nullable: true })
  upsert?: Array<BookingUpsertWithWhereUniqueWithoutDealershipInput>;

  @Field(() => BookingCreateManyDealershipInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyDealershipInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  set?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  delete?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingUpdateWithWhereUniqueWithoutDealershipInput], { nullable: true })
  update?: Array<BookingUpdateWithWhereUniqueWithoutDealershipInput>;

  @Field(() => [BookingUpdateManyWithWhereWithoutDealershipInput], { nullable: true })
  updateMany?: Array<BookingUpdateManyWithWhereWithoutDealershipInput>;

  @Field(() => [BookingScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookingScalarWhereInput>;
}

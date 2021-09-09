import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutCustomerInput } from './booking-create-without-customer.input';
import { BookingCreateOrConnectWithoutCustomerInput } from './booking-create-or-connect-without-customer.input';
import { BookingUpsertWithWhereUniqueWithoutCustomerInput } from './booking-upsert-with-where-unique-without-customer.input';
import { BookingCreateManyCustomerInputEnvelope } from './booking-create-many-customer-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutCustomerInput } from './booking-update-with-where-unique-without-customer.input';
import { BookingUpdateManyWithWhereWithoutCustomerInput } from './booking-update-many-with-where-without-customer.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutCustomerInput {
  @Field(() => [BookingCreateWithoutCustomerInput], { nullable: true })
  create?: Array<BookingCreateWithoutCustomerInput>;

  @Field(() => [BookingCreateOrConnectWithoutCustomerInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutCustomerInput>;

  @Field(() => [BookingUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true,
  })
  upsert?: Array<BookingUpsertWithWhereUniqueWithoutCustomerInput>;

  @Field(() => BookingCreateManyCustomerInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyCustomerInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  set?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  delete?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true,
  })
  update?: Array<BookingUpdateWithWhereUniqueWithoutCustomerInput>;

  @Field(() => [BookingUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true,
  })
  updateMany?: Array<BookingUpdateManyWithWhereWithoutCustomerInput>;

  @Field(() => [BookingScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookingScalarWhereInput>;
}

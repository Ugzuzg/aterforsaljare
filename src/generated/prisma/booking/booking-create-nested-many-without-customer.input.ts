import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutCustomerInput } from './booking-create-without-customer.input';
import { BookingCreateOrConnectWithoutCustomerInput } from './booking-create-or-connect-without-customer.input';
import { BookingCreateManyCustomerInputEnvelope } from './booking-create-many-customer-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedManyWithoutCustomerInput {
  @Field(() => [BookingCreateWithoutCustomerInput], { nullable: true })
  create?: Array<BookingCreateWithoutCustomerInput>;

  @Field(() => [BookingCreateOrConnectWithoutCustomerInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutCustomerInput>;

  @Field(() => BookingCreateManyCustomerInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyCustomerInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;
}

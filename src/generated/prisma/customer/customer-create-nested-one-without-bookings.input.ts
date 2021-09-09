import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutBookingsInput } from './customer-create-without-bookings.input';
import { CustomerCreateOrConnectWithoutBookingsInput } from './customer-create-or-connect-without-bookings.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutBookingsInput {
  @Field(() => CustomerCreateWithoutBookingsInput, { nullable: true })
  create?: CustomerCreateWithoutBookingsInput;

  @Field(() => CustomerCreateOrConnectWithoutBookingsInput, { nullable: true })
  connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput;

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  connect?: CustomerWhereUniqueInput;
}

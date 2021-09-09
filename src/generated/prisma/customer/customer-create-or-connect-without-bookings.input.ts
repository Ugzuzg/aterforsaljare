import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutBookingsInput } from './customer-create-without-bookings.input';

@InputType()
export class CustomerCreateOrConnectWithoutBookingsInput {
  @Field(() => CustomerWhereUniqueInput, { nullable: false })
  where!: CustomerWhereUniqueInput;

  @Field(() => CustomerCreateWithoutBookingsInput, { nullable: false })
  create!: CustomerCreateWithoutBookingsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutBookingsInput } from './customer-update-without-bookings.input';
import { CustomerCreateWithoutBookingsInput } from './customer-create-without-bookings.input';

@InputType()
export class CustomerUpsertWithoutBookingsInput {
  @Field(() => CustomerUpdateWithoutBookingsInput, { nullable: false })
  update!: CustomerUpdateWithoutBookingsInput;

  @Field(() => CustomerCreateWithoutBookingsInput, { nullable: false })
  create!: CustomerCreateWithoutBookingsInput;
}

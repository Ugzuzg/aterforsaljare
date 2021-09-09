import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutBookingsInput } from './customer-create-without-bookings.input';
import { CustomerCreateOrConnectWithoutBookingsInput } from './customer-create-or-connect-without-bookings.input';
import { CustomerUpsertWithoutBookingsInput } from './customer-upsert-without-bookings.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutBookingsInput } from './customer-update-without-bookings.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutBookingsInput {
  @Field(() => CustomerCreateWithoutBookingsInput, { nullable: true })
  create?: CustomerCreateWithoutBookingsInput;

  @Field(() => CustomerCreateOrConnectWithoutBookingsInput, { nullable: true })
  connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput;

  @Field(() => CustomerUpsertWithoutBookingsInput, { nullable: true })
  upsert?: CustomerUpsertWithoutBookingsInput;

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  connect?: CustomerWhereUniqueInput;

  @Field(() => CustomerUpdateWithoutBookingsInput, { nullable: true })
  update?: CustomerUpdateWithoutBookingsInput;
}

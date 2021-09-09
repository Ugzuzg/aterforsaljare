import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipCreateWithoutBookingsInput } from './dealership-create-without-bookings.input';
import { DealershipCreateOrConnectWithoutBookingsInput } from './dealership-create-or-connect-without-bookings.input';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';

@InputType()
export class DealershipCreateNestedOneWithoutBookingsInput {
  @Field(() => DealershipCreateWithoutBookingsInput, { nullable: true })
  create?: DealershipCreateWithoutBookingsInput;

  @Field(() => DealershipCreateOrConnectWithoutBookingsInput, {
    nullable: true,
  })
  connectOrCreate?: DealershipCreateOrConnectWithoutBookingsInput;

  @Field(() => DealershipWhereUniqueInput, { nullable: true })
  connect?: DealershipWhereUniqueInput;
}

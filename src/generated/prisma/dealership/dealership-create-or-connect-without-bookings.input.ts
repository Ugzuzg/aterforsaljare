import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';
import { DealershipCreateWithoutBookingsInput } from './dealership-create-without-bookings.input';

@InputType()
export class DealershipCreateOrConnectWithoutBookingsInput {
  @Field(() => DealershipWhereUniqueInput, { nullable: false })
  where!: DealershipWhereUniqueInput;

  @Field(() => DealershipCreateWithoutBookingsInput, { nullable: false })
  create!: DealershipCreateWithoutBookingsInput;
}

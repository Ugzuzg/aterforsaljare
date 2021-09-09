import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipUpdateWithoutBookingsInput } from './dealership-update-without-bookings.input';
import { DealershipCreateWithoutBookingsInput } from './dealership-create-without-bookings.input';

@InputType()
export class DealershipUpsertWithoutBookingsInput {
  @Field(() => DealershipUpdateWithoutBookingsInput, { nullable: false })
  update!: DealershipUpdateWithoutBookingsInput;

  @Field(() => DealershipCreateWithoutBookingsInput, { nullable: false })
  create!: DealershipCreateWithoutBookingsInput;
}

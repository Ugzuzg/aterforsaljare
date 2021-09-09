import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyCustomerInput } from './booking-create-many-customer.input';

@InputType()
export class BookingCreateManyCustomerInputEnvelope {
  @Field(() => [BookingCreateManyCustomerInput], { nullable: false })
  data!: Array<BookingCreateManyCustomerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

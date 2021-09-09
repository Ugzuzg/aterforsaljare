import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateNestedManyWithoutDealershipInput } from '../booking/booking-create-nested-many-without-dealership.input';

@InputType()
export class DealershipCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BookingCreateNestedManyWithoutDealershipInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutDealershipInput;
}

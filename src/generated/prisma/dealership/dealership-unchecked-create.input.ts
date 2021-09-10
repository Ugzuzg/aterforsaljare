import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutDealershipInput } from '../booking/booking-unchecked-create-nested-many-without-dealership.input';

@InputType()
export class DealershipUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BookingUncheckedCreateNestedManyWithoutDealershipInput, { nullable: true })
  bookings?: BookingUncheckedCreateNestedManyWithoutDealershipInput;
}

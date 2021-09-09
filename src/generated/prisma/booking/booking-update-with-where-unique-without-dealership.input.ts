import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutDealershipInput } from './booking-update-without-dealership.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutDealershipInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutDealershipInput, { nullable: false })
  data!: BookingUpdateWithoutDealershipInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutDealershipInput } from './booking-update-without-dealership.input';
import { BookingCreateWithoutDealershipInput } from './booking-create-without-dealership.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutDealershipInput {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;

  @Field(() => BookingUpdateWithoutDealershipInput, { nullable: false })
  update!: BookingUpdateWithoutDealershipInput;

  @Field(() => BookingCreateWithoutDealershipInput, { nullable: false })
  create!: BookingCreateWithoutDealershipInput;
}

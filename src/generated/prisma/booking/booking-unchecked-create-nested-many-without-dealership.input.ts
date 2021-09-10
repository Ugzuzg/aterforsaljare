import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutDealershipInput } from './booking-create-without-dealership.input';
import { BookingCreateOrConnectWithoutDealershipInput } from './booking-create-or-connect-without-dealership.input';
import { BookingCreateManyDealershipInputEnvelope } from './booking-create-many-dealership-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutDealershipInput {
  @Field(() => [BookingCreateWithoutDealershipInput], { nullable: true })
  create?: Array<BookingCreateWithoutDealershipInput>;

  @Field(() => [BookingCreateOrConnectWithoutDealershipInput], { nullable: true })
  connectOrCreate?: Array<BookingCreateOrConnectWithoutDealershipInput>;

  @Field(() => BookingCreateManyDealershipInputEnvelope, { nullable: true })
  createMany?: BookingCreateManyDealershipInputEnvelope;

  @Field(() => [BookingWhereUniqueInput], { nullable: true })
  connect?: Array<BookingWhereUniqueInput>;
}

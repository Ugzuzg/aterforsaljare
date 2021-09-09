import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyDealershipInput } from './booking-create-many-dealership.input';

@InputType()
export class BookingCreateManyDealershipInputEnvelope {
  @Field(() => [BookingCreateManyDealershipInput], { nullable: false })
  data!: Array<BookingCreateManyDealershipInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

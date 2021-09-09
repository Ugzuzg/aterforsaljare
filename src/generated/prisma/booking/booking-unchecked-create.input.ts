import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  dealershipId!: string;

  @Field(() => String, { nullable: false })
  customerId!: string;

  @Field(() => String, { nullable: false })
  vehicleVin!: string;

  @Field(() => Date, { nullable: false })
  time!: Date | string;
}

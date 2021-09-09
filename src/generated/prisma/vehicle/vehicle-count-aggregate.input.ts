import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  vin?: true;

  @Field(() => Boolean, { nullable: true })
  model?: true;

  @Field(() => Boolean, { nullable: true })
  make?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

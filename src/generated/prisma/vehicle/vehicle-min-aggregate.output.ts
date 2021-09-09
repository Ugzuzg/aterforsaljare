import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VehicleMinAggregate {
  @Field(() => String, { nullable: true })
  vin?: string;

  @Field(() => String, { nullable: true })
  model?: string;

  @Field(() => String, { nullable: true })
  make?: string;
}

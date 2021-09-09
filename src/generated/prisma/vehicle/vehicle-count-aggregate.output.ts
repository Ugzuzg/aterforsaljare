import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleCountAggregate {
  @Field(() => Int, { nullable: false })
  vin!: number;

  @Field(() => Int, { nullable: false })
  model!: number;

  @Field(() => Int, { nullable: false })
  make!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}

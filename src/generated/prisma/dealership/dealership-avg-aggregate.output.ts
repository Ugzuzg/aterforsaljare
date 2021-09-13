import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DealershipAvgAggregate {
  @Field(() => Float, { nullable: true })
  capacity?: number;
}

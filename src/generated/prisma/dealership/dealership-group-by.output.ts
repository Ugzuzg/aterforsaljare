import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DealershipCountAggregate } from './dealership-count-aggregate.output';
import { DealershipAvgAggregate } from './dealership-avg-aggregate.output';
import { DealershipSumAggregate } from './dealership-sum-aggregate.output';
import { DealershipMinAggregate } from './dealership-min-aggregate.output';
import { DealershipMaxAggregate } from './dealership-max-aggregate.output';

@ObjectType()
export class DealershipGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Int, { nullable: false })
  capacity!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => DealershipCountAggregate, { nullable: true })
  _count?: DealershipCountAggregate;

  @Field(() => DealershipAvgAggregate, { nullable: true })
  _avg?: DealershipAvgAggregate;

  @Field(() => DealershipSumAggregate, { nullable: true })
  _sum?: DealershipSumAggregate;

  @Field(() => DealershipMinAggregate, { nullable: true })
  _min?: DealershipMinAggregate;

  @Field(() => DealershipMaxAggregate, { nullable: true })
  _max?: DealershipMaxAggregate;
}

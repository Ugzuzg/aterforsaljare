import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DealershipCountAggregate } from './dealership-count-aggregate.output';
import { DealershipMinAggregate } from './dealership-min-aggregate.output';
import { DealershipMaxAggregate } from './dealership-max-aggregate.output';

@ObjectType()
export class DealershipGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => DealershipCountAggregate, { nullable: true })
  _count?: DealershipCountAggregate;

  @Field(() => DealershipMinAggregate, { nullable: true })
  _min?: DealershipMinAggregate;

  @Field(() => DealershipMaxAggregate, { nullable: true })
  _max?: DealershipMaxAggregate;
}

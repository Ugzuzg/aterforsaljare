import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipWhereInput } from './dealership-where.input';
import { DealershipOrderByWithAggregationInput } from './dealership-order-by-with-aggregation.input';
import { DealershipScalarFieldEnum } from './dealership-scalar-field.enum';
import { DealershipScalarWhereWithAggregatesInput } from './dealership-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DealershipCountAggregateInput } from './dealership-count-aggregate.input';
import { DealershipAvgAggregateInput } from './dealership-avg-aggregate.input';
import { DealershipSumAggregateInput } from './dealership-sum-aggregate.input';
import { DealershipMinAggregateInput } from './dealership-min-aggregate.input';
import { DealershipMaxAggregateInput } from './dealership-max-aggregate.input';

@ArgsType()
export class DealershipGroupByArgs {
  @Field(() => DealershipWhereInput, { nullable: true })
  where?: DealershipWhereInput;

  @Field(() => [DealershipOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<DealershipOrderByWithAggregationInput>;

  @Field(() => [DealershipScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof DealershipScalarFieldEnum>;

  @Field(() => DealershipScalarWhereWithAggregatesInput, { nullable: true })
  having?: DealershipScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => DealershipCountAggregateInput, { nullable: true })
  _count?: DealershipCountAggregateInput;

  @Field(() => DealershipAvgAggregateInput, { nullable: true })
  _avg?: DealershipAvgAggregateInput;

  @Field(() => DealershipSumAggregateInput, { nullable: true })
  _sum?: DealershipSumAggregateInput;

  @Field(() => DealershipMinAggregateInput, { nullable: true })
  _min?: DealershipMinAggregateInput;

  @Field(() => DealershipMaxAggregateInput, { nullable: true })
  _max?: DealershipMaxAggregateInput;
}

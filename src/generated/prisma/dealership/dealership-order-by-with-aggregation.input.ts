import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DealershipCountOrderByAggregateInput } from './dealership-count-order-by-aggregate.input';
import { DealershipAvgOrderByAggregateInput } from './dealership-avg-order-by-aggregate.input';
import { DealershipMaxOrderByAggregateInput } from './dealership-max-order-by-aggregate.input';
import { DealershipMinOrderByAggregateInput } from './dealership-min-order-by-aggregate.input';
import { DealershipSumOrderByAggregateInput } from './dealership-sum-order-by-aggregate.input';

@InputType()
export class DealershipOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => DealershipCountOrderByAggregateInput, { nullable: true })
  _count?: DealershipCountOrderByAggregateInput;

  @Field(() => DealershipAvgOrderByAggregateInput, { nullable: true })
  _avg?: DealershipAvgOrderByAggregateInput;

  @Field(() => DealershipMaxOrderByAggregateInput, { nullable: true })
  _max?: DealershipMaxOrderByAggregateInput;

  @Field(() => DealershipMinOrderByAggregateInput, { nullable: true })
  _min?: DealershipMinOrderByAggregateInput;

  @Field(() => DealershipSumOrderByAggregateInput, { nullable: true })
  _sum?: DealershipSumOrderByAggregateInput;
}

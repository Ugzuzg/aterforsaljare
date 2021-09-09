import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VehicleCountOrderByAggregateInput } from './vehicle-count-order-by-aggregate.input';
import { VehicleMaxOrderByAggregateInput } from './vehicle-max-order-by-aggregate.input';
import { VehicleMinOrderByAggregateInput } from './vehicle-min-order-by-aggregate.input';

@InputType()
export class VehicleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  vin?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  model?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  make?: keyof typeof SortOrder;

  @Field(() => VehicleCountOrderByAggregateInput, { nullable: true })
  _count?: VehicleCountOrderByAggregateInput;

  @Field(() => VehicleMaxOrderByAggregateInput, { nullable: true })
  _max?: VehicleMaxOrderByAggregateInput;

  @Field(() => VehicleMinOrderByAggregateInput, { nullable: true })
  _min?: VehicleMinOrderByAggregateInput;
}

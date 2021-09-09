import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { VehicleOrderByWithRelationInput } from './vehicle-order-by-with-relation.input';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleCountAggregateInput } from './vehicle-count-aggregate.input';
import { VehicleMinAggregateInput } from './vehicle-min-aggregate.input';
import { VehicleMaxAggregateInput } from './vehicle-max-aggregate.input';

@ArgsType()
export class VehicleAggregateArgs {
  @Field(() => VehicleWhereInput, { nullable: true })
  where?: VehicleWhereInput;

  @Field(() => [VehicleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VehicleOrderByWithRelationInput>;

  @Field(() => VehicleWhereUniqueInput, { nullable: true })
  cursor?: VehicleWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => VehicleCountAggregateInput, { nullable: true })
  _count?: VehicleCountAggregateInput;

  @Field(() => VehicleMinAggregateInput, { nullable: true })
  _min?: VehicleMinAggregateInput;

  @Field(() => VehicleMaxAggregateInput, { nullable: true })
  _max?: VehicleMaxAggregateInput;
}

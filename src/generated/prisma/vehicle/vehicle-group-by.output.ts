import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleCountAggregate } from './vehicle-count-aggregate.output';
import { VehicleMinAggregate } from './vehicle-min-aggregate.output';
import { VehicleMaxAggregate } from './vehicle-max-aggregate.output';

@ObjectType()
export class VehicleGroupBy {
  @Field(() => String, { nullable: false })
  vin!: string;

  @Field(() => String, { nullable: false })
  model!: string;

  @Field(() => String, { nullable: false })
  make!: string;

  @Field(() => VehicleCountAggregate, { nullable: true })
  _count?: VehicleCountAggregate;

  @Field(() => VehicleMinAggregate, { nullable: true })
  _min?: VehicleMinAggregate;

  @Field(() => VehicleMaxAggregate, { nullable: true })
  _max?: VehicleMaxAggregate;
}

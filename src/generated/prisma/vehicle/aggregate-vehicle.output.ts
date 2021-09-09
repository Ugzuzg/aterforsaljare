import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleCountAggregate } from './vehicle-count-aggregate.output';
import { VehicleMinAggregate } from './vehicle-min-aggregate.output';
import { VehicleMaxAggregate } from './vehicle-max-aggregate.output';

@ObjectType()
export class AggregateVehicle {
  @Field(() => VehicleCountAggregate, { nullable: true })
  _count?: VehicleCountAggregate;

  @Field(() => VehicleMinAggregate, { nullable: true })
  _min?: VehicleMinAggregate;

  @Field(() => VehicleMaxAggregate, { nullable: true })
  _max?: VehicleMaxAggregate;
}

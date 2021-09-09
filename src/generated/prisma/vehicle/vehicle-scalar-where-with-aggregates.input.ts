import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VehicleScalarWhereWithAggregatesInput {
  @Field(() => [VehicleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<VehicleScalarWhereWithAggregatesInput>;

  @Field(() => [VehicleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<VehicleScalarWhereWithAggregatesInput>;

  @Field(() => [VehicleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<VehicleScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  vin?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  model?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  make?: StringWithAggregatesFilter;
}

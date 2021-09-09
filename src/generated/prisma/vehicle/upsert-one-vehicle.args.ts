import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleCreateInput } from './vehicle-create.input';
import { VehicleUpdateInput } from './vehicle-update.input';

@ArgsType()
export class UpsertOneVehicleArgs {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;

  @Field(() => VehicleCreateInput, { nullable: false })
  create!: VehicleCreateInput;

  @Field(() => VehicleUpdateInput, { nullable: false })
  update!: VehicleUpdateInput;
}

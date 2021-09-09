import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleUpdateInput } from './vehicle-update.input';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@ArgsType()
export class UpdateOneVehicleArgs {
  @Field(() => VehicleUpdateInput, { nullable: false })
  data!: VehicleUpdateInput;

  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
}

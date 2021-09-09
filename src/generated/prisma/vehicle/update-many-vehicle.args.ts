import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleUpdateManyMutationInput } from './vehicle-update-many-mutation.input';
import { VehicleWhereInput } from './vehicle-where.input';

@ArgsType()
export class UpdateManyVehicleArgs {
  @Field(() => VehicleUpdateManyMutationInput, { nullable: false })
  data!: VehicleUpdateManyMutationInput;

  @Field(() => VehicleWhereInput, { nullable: true })
  where?: VehicleWhereInput;
}

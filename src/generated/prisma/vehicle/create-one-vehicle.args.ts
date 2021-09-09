import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleCreateInput } from './vehicle-create.input';

@ArgsType()
export class CreateOneVehicleArgs {
  @Field(() => VehicleCreateInput, { nullable: false })
  data!: VehicleCreateInput;
}

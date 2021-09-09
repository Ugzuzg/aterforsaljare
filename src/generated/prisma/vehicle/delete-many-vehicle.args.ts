import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';

@ArgsType()
export class DeleteManyVehicleArgs {
  @Field(() => VehicleWhereInput, { nullable: true })
  where?: VehicleWhereInput;
}

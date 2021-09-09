import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@ArgsType()
export class FindUniqueVehicleArgs {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
}

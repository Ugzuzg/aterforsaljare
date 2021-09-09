import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleCreateManyInput } from './vehicle-create-many.input';

@ArgsType()
export class CreateManyVehicleArgs {
  @Field(() => [VehicleCreateManyInput], { nullable: false })
  data!: Array<VehicleCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

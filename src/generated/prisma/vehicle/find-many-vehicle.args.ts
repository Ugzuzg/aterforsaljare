import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleWhereInput } from './vehicle-where.input';
import { VehicleOrderByWithRelationInput } from './vehicle-order-by-with-relation.input';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VehicleScalarFieldEnum } from './vehicle-scalar-field.enum';

@ArgsType()
export class FindManyVehicleArgs {
  @Field(() => VehicleWhereInput, { nullable: true })
  where?: VehicleWhereInput;

  @Field(() => [VehicleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VehicleOrderByWithRelationInput>;

  @Field(() => VehicleWhereUniqueInput, { nullable: true })
  cursor?: VehicleWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [VehicleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VehicleScalarFieldEnum>;
}

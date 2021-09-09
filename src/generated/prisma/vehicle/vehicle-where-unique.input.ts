import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  vin?: string;
}

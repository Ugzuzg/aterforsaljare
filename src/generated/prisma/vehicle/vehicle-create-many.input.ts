import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleCreateManyInput {
  @Field(() => String, { nullable: false })
  vin!: string;

  @Field(() => String, { nullable: false })
  model!: string;

  @Field(() => String, { nullable: false })
  make!: string;
}

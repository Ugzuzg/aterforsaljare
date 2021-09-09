import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipWhereInput } from './dealership-where.input';

@InputType()
export class DealershipRelationFilter {
  @Field(() => DealershipWhereInput, { nullable: true })
  is?: DealershipWhereInput;

  @Field(() => DealershipWhereInput, { nullable: true })
  isNot?: DealershipWhereInput;
}

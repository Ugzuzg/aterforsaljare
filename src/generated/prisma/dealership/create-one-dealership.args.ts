import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipCreateInput } from './dealership-create.input';

@ArgsType()
export class CreateOneDealershipArgs {
  @Field(() => DealershipCreateInput, { nullable: false })
  data!: DealershipCreateInput;
}

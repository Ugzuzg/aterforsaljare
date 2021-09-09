import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';

@ArgsType()
export class FindUniqueDealershipArgs {
  @Field(() => DealershipWhereUniqueInput, { nullable: false })
  where!: DealershipWhereUniqueInput;
}

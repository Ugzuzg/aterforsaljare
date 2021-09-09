import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipUpdateInput } from './dealership-update.input';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';

@ArgsType()
export class UpdateOneDealershipArgs {
  @Field(() => DealershipUpdateInput, { nullable: false })
  data!: DealershipUpdateInput;

  @Field(() => DealershipWhereUniqueInput, { nullable: false })
  where!: DealershipWhereUniqueInput;
}

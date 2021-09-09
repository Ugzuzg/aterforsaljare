import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';
import { DealershipCreateInput } from './dealership-create.input';
import { DealershipUpdateInput } from './dealership-update.input';

@ArgsType()
export class UpsertOneDealershipArgs {
  @Field(() => DealershipWhereUniqueInput, { nullable: false })
  where!: DealershipWhereUniqueInput;

  @Field(() => DealershipCreateInput, { nullable: false })
  create!: DealershipCreateInput;

  @Field(() => DealershipUpdateInput, { nullable: false })
  update!: DealershipUpdateInput;
}

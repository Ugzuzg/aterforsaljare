import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipUpdateManyMutationInput } from './dealership-update-many-mutation.input';
import { DealershipWhereInput } from './dealership-where.input';

@ArgsType()
export class UpdateManyDealershipArgs {
  @Field(() => DealershipUpdateManyMutationInput, { nullable: false })
  data!: DealershipUpdateManyMutationInput;

  @Field(() => DealershipWhereInput, { nullable: true })
  where?: DealershipWhereInput;
}

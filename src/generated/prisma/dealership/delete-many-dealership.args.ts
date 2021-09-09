import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipWhereInput } from './dealership-where.input';

@ArgsType()
export class DeleteManyDealershipArgs {
  @Field(() => DealershipWhereInput, { nullable: true })
  where?: DealershipWhereInput;
}

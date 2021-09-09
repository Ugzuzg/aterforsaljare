import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipCreateManyInput } from './dealership-create-many.input';

@ArgsType()
export class CreateManyDealershipArgs {
  @Field(() => [DealershipCreateManyInput], { nullable: false })
  data!: Array<DealershipCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

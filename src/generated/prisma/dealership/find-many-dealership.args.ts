import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealershipWhereInput } from './dealership-where.input';
import { DealershipOrderByWithRelationInput } from './dealership-order-by-with-relation.input';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DealershipScalarFieldEnum } from './dealership-scalar-field.enum';

@ArgsType()
export class FindManyDealershipArgs {
  @Field(() => DealershipWhereInput, { nullable: true })
  where?: DealershipWhereInput;

  @Field(() => [DealershipOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<DealershipOrderByWithRelationInput>;

  @Field(() => DealershipWhereUniqueInput, { nullable: true })
  cursor?: DealershipWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [DealershipScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DealershipScalarFieldEnum>;
}

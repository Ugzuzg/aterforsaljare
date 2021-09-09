import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealershipCreateWithoutBookingsInput } from './dealership-create-without-bookings.input';
import { DealershipCreateOrConnectWithoutBookingsInput } from './dealership-create-or-connect-without-bookings.input';
import { DealershipUpsertWithoutBookingsInput } from './dealership-upsert-without-bookings.input';
import { DealershipWhereUniqueInput } from './dealership-where-unique.input';
import { DealershipUpdateWithoutBookingsInput } from './dealership-update-without-bookings.input';

@InputType()
export class DealershipUpdateOneRequiredWithoutBookingsInput {
  @Field(() => DealershipCreateWithoutBookingsInput, { nullable: true })
  create?: DealershipCreateWithoutBookingsInput;

  @Field(() => DealershipCreateOrConnectWithoutBookingsInput, {
    nullable: true,
  })
  connectOrCreate?: DealershipCreateOrConnectWithoutBookingsInput;

  @Field(() => DealershipUpsertWithoutBookingsInput, { nullable: true })
  upsert?: DealershipUpsertWithoutBookingsInput;

  @Field(() => DealershipWhereUniqueInput, { nullable: true })
  connect?: DealershipWhereUniqueInput;

  @Field(() => DealershipUpdateWithoutBookingsInput, { nullable: true })
  update?: DealershipUpdateWithoutBookingsInput;
}

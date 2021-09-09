import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DealershipOrderByWithRelationInput } from '../dealership/dealership-order-by-with-relation.input';
import { CustomerOrderByWithRelationInput } from '../customer/customer-order-by-with-relation.input';
import { VehicleOrderByWithRelationInput } from '../vehicle/vehicle-order-by-with-relation.input';

@InputType()
export class BookingOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => DealershipOrderByWithRelationInput, { nullable: true })
  dealership?: DealershipOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  dealershipId?: keyof typeof SortOrder;

  @Field(() => CustomerOrderByWithRelationInput, { nullable: true })
  customer?: CustomerOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  customerId?: keyof typeof SortOrder;

  @Field(() => VehicleOrderByWithRelationInput, { nullable: true })
  vehicle?: VehicleOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  vehicleVin?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  time?: keyof typeof SortOrder;
}

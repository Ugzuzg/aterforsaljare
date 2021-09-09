import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Dealership } from '../dealership/dealership.model';
import { Customer } from '../customer/customer.model';
import { Vehicle } from '../vehicle/vehicle.model';

@ObjectType()
export class Booking {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Dealership, { nullable: false })
  dealership?: Dealership;

  @Field(() => String, { nullable: false })
  dealershipId!: string;

  @Field(() => Customer, { nullable: false })
  customer?: Customer;

  @Field(() => String, { nullable: false })
  customerId!: string;

  @Field(() => Vehicle, { nullable: false })
  vehicle?: Vehicle;

  @Field(() => String, { nullable: false })
  vehicleVin!: string;

  @Field(() => Date, { nullable: false })
  time!: Date;
}

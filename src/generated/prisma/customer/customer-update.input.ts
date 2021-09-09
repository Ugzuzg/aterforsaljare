import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingUpdateManyWithoutCustomerInput } from '../booking/booking-update-many-without-customer.input';

@InputType()
export class CustomerUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: StringFieldUpdateOperationsInput;

  @Field(() => BookingUpdateManyWithoutCustomerInput, { nullable: true })
  bookings?: BookingUpdateManyWithoutCustomerInput;
}

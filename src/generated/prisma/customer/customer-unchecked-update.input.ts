import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingUncheckedUpdateManyWithoutCustomerInput } from '../booking/booking-unchecked-update-many-without-customer.input';

@InputType()
export class CustomerUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: StringFieldUpdateOperationsInput;

  @Field(() => BookingUncheckedUpdateManyWithoutCustomerInput, {
    nullable: true,
  })
  bookings?: BookingUncheckedUpdateManyWithoutCustomerInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CustomerUpdateOneRequiredWithoutBookingsInput } from '../customer/customer-update-one-required-without-bookings.input';
import { VehicleUpdateOneRequiredWithoutBookingsInput } from '../vehicle/vehicle-update-one-required-without-bookings.input';

@InputType()
export class BookingUpdateWithoutDealershipInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  time?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CustomerUpdateOneRequiredWithoutBookingsInput, {
    nullable: true,
  })
  customer?: CustomerUpdateOneRequiredWithoutBookingsInput;

  @Field(() => VehicleUpdateOneRequiredWithoutBookingsInput, { nullable: true })
  vehicle?: VehicleUpdateOneRequiredWithoutBookingsInput;
}

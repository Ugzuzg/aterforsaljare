import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DealershipUpdateOneRequiredWithoutBookingsInput } from '../dealership/dealership-update-one-required-without-bookings.input';
import { CustomerUpdateOneRequiredWithoutBookingsInput } from '../customer/customer-update-one-required-without-bookings.input';

@InputType()
export class BookingUpdateWithoutVehicleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  time?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DealershipUpdateOneRequiredWithoutBookingsInput, { nullable: true })
  dealership?: DealershipUpdateOneRequiredWithoutBookingsInput;

  @Field(() => CustomerUpdateOneRequiredWithoutBookingsInput, { nullable: true })
  customer?: CustomerUpdateOneRequiredWithoutBookingsInput;
}

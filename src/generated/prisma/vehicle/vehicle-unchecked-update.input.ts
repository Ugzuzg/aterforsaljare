import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingUncheckedUpdateManyWithoutVehicleInput } from '../booking/booking-unchecked-update-many-without-vehicle.input';

@InputType()
export class VehicleUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  vin?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  model?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  make?: StringFieldUpdateOperationsInput;

  @Field(() => BookingUncheckedUpdateManyWithoutVehicleInput, { nullable: true })
  bookings?: BookingUncheckedUpdateManyWithoutVehicleInput;
}

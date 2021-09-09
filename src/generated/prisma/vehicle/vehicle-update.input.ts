import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookingUpdateManyWithoutVehicleInput } from '../booking/booking-update-many-without-vehicle.input';

@InputType()
export class VehicleUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  vin?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  model?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  make?: StringFieldUpdateOperationsInput;

  @Field(() => BookingUpdateManyWithoutVehicleInput, { nullable: true })
  bookings?: BookingUpdateManyWithoutVehicleInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class VehicleUncheckedUpdateWithoutBookingsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  vin?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  model?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  make?: StringFieldUpdateOperationsInput;
}

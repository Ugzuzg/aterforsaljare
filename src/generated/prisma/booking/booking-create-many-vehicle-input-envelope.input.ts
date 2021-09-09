import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyVehicleInput } from './booking-create-many-vehicle.input';

@InputType()
export class BookingCreateManyVehicleInputEnvelope {
  @Field(() => [BookingCreateManyVehicleInput], { nullable: false })
  data!: Array<BookingCreateManyVehicleInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

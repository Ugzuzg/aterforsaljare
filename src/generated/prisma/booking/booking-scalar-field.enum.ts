import { registerEnumType } from '@nestjs/graphql';

export enum BookingScalarFieldEnum {
  id = 'id',
  dealershipId = 'dealershipId',
  customerId = 'customerId',
  vehicleVin = 'vehicleVin',
  time = 'time',
}

registerEnumType(BookingScalarFieldEnum, { name: 'BookingScalarFieldEnum', description: undefined });

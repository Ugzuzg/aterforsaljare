import { registerEnumType } from '@nestjs/graphql';

export enum VehicleScalarFieldEnum {
  vin = 'vin',
  model = 'model',
  make = 'make',
}

registerEnumType(VehicleScalarFieldEnum, { name: 'VehicleScalarFieldEnum', description: undefined });

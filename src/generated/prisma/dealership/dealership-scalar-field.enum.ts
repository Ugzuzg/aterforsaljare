import { registerEnumType } from '@nestjs/graphql';

export enum DealershipScalarFieldEnum {
  id = 'id',
  title = 'title',
  capacity = 'capacity',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(DealershipScalarFieldEnum, { name: 'DealershipScalarFieldEnum', description: undefined });

import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
  id = 'id',
  email = 'email',
  phoneNumber = 'phoneNumber',
}

registerEnumType(CustomerScalarFieldEnum, {
  name: 'CustomerScalarFieldEnum',
  description: undefined,
});

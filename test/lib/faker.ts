import faker from 'faker';
import cuid from 'cuid';
import _ from 'lodash';

import { Booking } from '../../src/generated/prisma/booking/booking.model';

class DealershipFaker {
  static booking(overrides?: Partial<Booking>) {
    return {
      id: cuid(),
      time: faker.date.recent(),
      dealershipId: cuid(),
      customerId: cuid(),
      vehicleVin: faker.vehicle.vin(),
      ...overrides,
    };
  }
}

type ExtendedFaker = typeof faker & { dealership: typeof DealershipFaker };
const extendedFaker: ExtendedFaker = _.merge(faker, {
  dealership: DealershipFaker,
});

export default extendedFaker;

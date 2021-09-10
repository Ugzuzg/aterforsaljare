import faker from 'faker';
import cuid from 'cuid';
import _ from 'lodash';

import { Dealership } from '../../src/generated/prisma/dealership/dealership.model';
import { Customer } from '../../src/generated/prisma/customer/customer.model';
import { Booking } from '../../src/generated/prisma/booking/booking.model';
import { Vehicle } from '../../src/generated/prisma/vehicle/vehicle.model';

class DealershipFaker {
  static dealership(overrides?: Partial<Dealership>): Dealership {
    return {
      id: cuid(),
      title: faker.company.companyName(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...overrides,
    };
  }

  static customer(overrides?: Partial<Customer>): Customer {
    return {
      id: cuid(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      ...overrides,
    };
  }

  static booking(overrides?: Partial<Booking>): Booking {
    return {
      id: cuid(),
      time: faker.date.recent(),
      dealershipId: cuid(),
      customerId: cuid(),
      vehicleVin: faker.vehicle.vin(),
      ...overrides,
    };
  }

  static vehicle(overrides?: Partial<Vehicle>): Vehicle {
    return {
      vin: faker.vehicle.vin(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      ...overrides,
    };
  }
}

type ExtendedFaker = typeof faker & { dealership: typeof DealershipFaker };
const extendedFaker: ExtendedFaker = _.merge(faker, {
  dealership: DealershipFaker,
});

export default extendedFaker;

import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import _ from 'lodash';

import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import faker from './lib/faker';

import { Dealership } from '../src/generated/prisma/dealership/dealership.model';
import { Vehicle } from '../src/generated/prisma/vehicle/vehicle.model';
import { Customer } from '../src/generated/prisma/customer/customer.model';

describe('BookingResolver (e2e)', () => {
  let app: NestFastifyApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    prisma = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  describe('#findBookings', () => {
    // setup test data
    let dealerships: Dealership[];
    let vehicles: Vehicle[];
    beforeAll(async () => {
      // clean up
      await prisma.booking.deleteMany();
      await prisma.customer.deleteMany();
      await prisma.vehicle.deleteMany();
      await prisma.dealership.deleteMany();

      // generate some random data
      dealerships = _.times(2, () => faker.dealership.dealership());
      vehicles = _.times(3, () => faker.dealership.vehicle());
      const customer = faker.dealership.customer();

      const sharedBookingFields = {
        dealershipId: dealerships[0].id,
        customerId: customer.id,
        vehicleVin: vehicles[0].vin,
      };

      // and insert it into the database
      await prisma.dealership.createMany({
        data: dealerships,
      });
      await prisma.vehicle.createMany({
        data: vehicles,
      });
      await prisma.customer.createMany({
        data: [customer],
      });
      await prisma.booking.createMany({
        data: [
          faker.dealership.booking({ ...sharedBookingFields, time: new Date('2021-09-10T10:00:00.000Z') }),
          faker.dealership.booking({
            ...sharedBookingFields,
            time: new Date('2021-09-10T12:00:00.000Z'),
            vehicleVin: vehicles[1].vin,
          }),
          faker.dealership.booking({
            ...sharedBookingFields,
            time: new Date('2021-09-10T14:00:00.000Z'),
            vehicleVin: vehicles[2].vin,
          }),
          faker.dealership.booking({ ...sharedBookingFields, time: new Date('2021-09-11T10:00:00.000Z') }),
          faker.dealership.booking({ ...sharedBookingFields, time: new Date('2021-09-12T10:00:00.000Z') }),
          faker.dealership.booking({
            ...sharedBookingFields,
            time: new Date('2021-09-13T10:00:00.000Z'),
            vehicleVin: vehicles[1].vin,
          }),
          faker.dealership.booking({
            ...sharedBookingFields,
            time: new Date('2021-09-13T10:00:00.000Z'),
            dealershipId: dealerships[1].id,
          }),
        ],
      });
    });

    it.each([
      { case: 'returns data for a single dealership by default', inputFactory: () => ({}), length: 6 },
      {
        case: 'returns filtered data for a single day',
        inputFactory: () => ({
          time: { gte: new Date('2021-09-10T00:00:00.000Z'), lt: new Date('2021-09-11T00:00:00.000Z') },
        }),
        length: 3,
      },
      {
        case: 'returns filtered data for a single vehicle',
        inputFactory: () => ({ vehicleVin: { equals: vehicles[1].vin } }),
        length: 2,
      },
    ])('query $case', async ({ inputFactory, length }) => {
      const response = await app.inject({
        method: 'POST',
        url: '/graphql',
        headers: {
          'dealership-id': dealerships[0].id,
        },
        payload: {
          query: `query Query($findBookingsBookingWhereInput: BookingWhereInput) {
              findBookings(bookingWhereInput: $findBookingsBookingWhereInput) {
                id
                time
                customer {
                  email
                }
                vehicle {
                  vin
                }
              }
            }`,
          variables: {
            findBookingsBookingWhereInput: inputFactory(),
          },
        },
      });
      const result = response.json();
      expect(result).toHaveProperty('data.findBookings');
      expect(result.data.findBookings).toBeInstanceOf(Array);
      expect(result.data.findBookings).toHaveLength(length);
      expect(result.data.findBookings[0].customer.email).toBeTruthy();
      expect(result.data.findBookings[0].vehicle.vin).toBeTruthy();
    });
  });

  describe('#createBooking', () => {
    // setup test data
    let dealerships: Dealership[];
    let vehicles: Vehicle[];
    let customers: Customer[];

    beforeAll(async () => {
      // clean up
      await prisma.booking.deleteMany();
      await prisma.customer.deleteMany();
      await prisma.vehicle.deleteMany();
      await prisma.dealership.deleteMany();

      // generate some random data
      dealerships = _.times(1, () => faker.dealership.dealership());
      vehicles = _.times(3, () => faker.dealership.vehicle());
      customers = _.times(1, () => faker.dealership.customer());

      // and insert it into the database
      await prisma.dealership.createMany({
        data: dealerships,
      });
      await prisma.vehicle.createMany({
        data: vehicles,
      });
      await prisma.customer.createMany({
        data: customers,
      });
    });

    beforeEach(async () => {
      await prisma.booking.deleteMany();

      const sharedBookingFields = {
        dealershipId: dealerships[0].id,
        customerId: customers[0].id,
      };

      await prisma.booking.createMany({
        data: [
          // two bookings that intersect at 11:00 to test maximum capacity
          faker.dealership.booking({
            ...sharedBookingFields,
            vehicleVin: vehicles[0].vin,
            time: new Date('2021-09-10T10:00:00.000Z'),
          }),
          faker.dealership.booking({
            ...sharedBookingFields,
            vehicleVin: vehicles[1].vin,
            time: new Date('2021-09-10T11:00:00.000Z'),
          }),
        ],
      });
    });

    it.each([
      {
        case: 'fails to create a booking outside of working hours',
        inputFactory: () => ({
          time: '2021-09-10T23:00:55.000Z',
          customer: {
            connect: {
              id: customers[0].id,
            },
          },
          vehicle: {
            connect: {
              vin: vehicles[0].vin,
            },
          },
        }),
        success: false,
        expectToPass: (result: any) => {
          expect(result.errors).toHaveLength(1);
          expect(result.errors[0].message).toEqual('the booking is outside of working hours');
        },
      },
      {
        case: 'creates a single booking and rounds the start time',
        inputFactory: () => ({
          time: '2021-09-10T09:00:10.000Z',
          customer: {
            connect: {
              id: customers[0].id,
            },
          },
          vehicle: {
            connect: {
              vin: vehicles[0].vin,
            },
          },
        }),
        success: true,
        expectToPass: (result: any) => {
          expect(result.data.createBooking).toHaveProperty('time', '2021-09-10T09:00:00.000Z');
          expect(result.data.createBooking).toHaveProperty('customer.email', customers[0].email);
          expect(result.data.createBooking).toHaveProperty('vehicle.vin', vehicles[0].vin);
        },
      },
      {
        case: 'creates a single booking near the maximum capacity end',
        inputFactory: () => ({
          time: '2021-09-10T12:00:12.000Z',
          customer: {
            connect: {
              id: customers[0].id,
            },
          },
          vehicle: {
            connect: {
              vin: vehicles[1].vin,
            },
          },
        }),
        success: true,
        expectToPass: (result: any) => {
          expect(result.data.createBooking).toHaveProperty('time', '2021-09-10T12:00:00.000Z');
          expect(result.data.createBooking).toHaveProperty('customer.email', customers[0].email);
          expect(result.data.createBooking).toHaveProperty('vehicle.vin', vehicles[1].vin);
        },
      },
      {
        case: 'fails to create a booking if the facility is at maximum capacity',
        inputFactory: () => ({
          time: '2021-09-10T11:00:00.000Z',
          customer: {
            connect: {
              id: customers[0].id,
            },
          },
          vehicle: {
            connect: {
              vin: vehicles[2].vin,
            },
          },
        }),
        success: false,
        expectToPass: (result: any) => {
          expect(result.errors).toHaveLength(1);
          expect(result.errors[0].message).toEqual('at maximum capacity');
        },
      },
      {
        case: 'fails to create a booking if the facility is at maximum capacity at the edge',
        inputFactory: () => ({
          time: '2021-09-10T11:59:00.000Z',
          customer: {
            connect: {
              id: customers[0].id,
            },
          },
          vehicle: {
            connect: {
              vin: vehicles[2].vin,
            },
          },
        }),
        success: false,
        expectToPass: (result: any) => {
          expect(result.errors).toHaveLength(1);
          expect(result.errors[0].message).toEqual('at maximum capacity');
        },
      },
    ])('$case', async ({ inputFactory, success, expectToPass }) => {
      const response = await app.inject({
        method: 'POST',
        url: '/graphql',
        headers: {
          'dealership-id': dealerships[0].id,
        },
        payload: {
          query: `mutation CreateBookingMutation($bookingCreateInput: BookingCreateWithoutDealershipInput!) {
            createBooking(bookingCreateInput: $bookingCreateInput) {
              id
              time
              customer {
                email
              }
              vehicle {
                vin
              }
            }
          }`,
          variables: {
            bookingCreateInput: inputFactory(),
          },
        },
      });
      const result = response.json();
      if (!success) {
        expect(result).toHaveProperty('data');
        expect(result.data).toBeNull();
        expect(result).toHaveProperty('errors');
      } else {
        expect(result).toHaveProperty('data.createBooking');
      }
      expectToPass(result);
    });
  });
});

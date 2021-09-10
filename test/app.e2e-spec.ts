import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import _ from 'lodash';

import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import faker from './lib/faker';

import { Dealership } from '../src/generated/prisma/dealership/dealership.model';
import { Vehicle } from '../src/generated/prisma/vehicle/vehicle.model';

describe('AppController (e2e)', () => {
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
  ])('query findBookings $case', async ({ inputFactory, length }) => {
    const response = await app.inject({
      method: 'POST',
      url: '/graphql',
      headers: {
        ContentType: 'application/json',
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

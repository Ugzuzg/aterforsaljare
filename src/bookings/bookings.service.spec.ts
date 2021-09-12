import { Test, TestingModule } from '@nestjs/testing';

import { Booking } from '../generated/prisma/booking/booking.model';
import { BookingsService } from './bookings.service';
import { PrismaService } from '../prisma/prisma.service';

import faker from '../../test/lib/faker';

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingsService, PrismaService],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#countParallelIntervals', () => {
    it.each([
      [
        [
          faker.dealership.booking({ time: new Date('2021-09-09T20:00:00') }),
          faker.dealership.booking({ time: new Date('2021-09-09T22:00:00') }),
        ],
        1,
      ],
      [
        [
          faker.dealership.booking({ time: new Date('2021-09-09T20:00:00') }),
          faker.dealership.booking({ time: new Date('2021-09-09T21:00:00') }),
        ],
        2,
      ],
      [
        [
          faker.dealership.booking({ time: new Date('2021-09-09T20:00:00') }),
          faker.dealership.booking({ time: new Date('2021-09-09T19:30:00') }),
          faker.dealership.booking({ time: new Date('2021-09-09T21:10:00') }),
          faker.dealership.booking({ time: new Date('2021-09-09T22:00:00') }),
        ],
        3,
      ],
    ])('finds the max number of intersecting intervals', (bookings: Booking[], expected: number) => {
      expect(service.countParallelIntervals(bookings)).toBe(expected);
    });
  });

  describe('#fitsIntoWorkingHours', () => {
    it.each([
      [faker.dealership.booking({ time: new Date('2021-09-09T05:00:00') }), false],
      [faker.dealership.booking({ time: new Date('2021-09-09T08:00:00') }), false],
      [faker.dealership.booking({ time: new Date('2021-09-09T09:00:00') }), true],
      [faker.dealership.booking({ time: new Date('2021-09-09T11:25:00') }), true],
      [faker.dealership.booking({ time: new Date('2021-09-09T15:00:00') }), true],
      [faker.dealership.booking({ time: new Date('2021-09-09T15:00:01') }), false],
      [faker.dealership.booking({ time: new Date('2021-09-09T17:00:00') }), false],
    ])('checks if the booking fits into working hours interval', (booking: Booking, expected: boolean) => {
      expect(service.fitsIntoWorkingHours(booking)).toBe(expected);
    });
  });
});

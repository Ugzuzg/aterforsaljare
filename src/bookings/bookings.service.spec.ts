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
    ])('some', (bookings: Booking[], expected: number) => {
      expect(service.countParallelIntervals(bookings)).toBe(expected);
    });
  });
});

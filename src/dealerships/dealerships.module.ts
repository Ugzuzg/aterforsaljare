import { Module } from '@nestjs/common';
import { DealershipsResolver } from './dealerships.resolver';

@Module({
  providers: [DealershipsResolver],
})
export class DealershipsModule {}

import path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { BookingsModule } from './bookings/bookings.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthPlugin } from './auth.plugin';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/generated/schema.gql'),
      playground: true,
    }),
    PrismaModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthPlugin],
})
export class AppModule {}

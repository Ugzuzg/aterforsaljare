import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';

import { PrismaService } from '../prisma/prisma.service';
import { DealershipUpdateInput } from '../generated/prisma/dealership/dealership-update.input';
import { Dealership } from '../generated/prisma/dealership/dealership.model';

@Resolver(() => Dealership)
export class DealershipsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Dealership)
  async updateDealership(
    @Context('dealershipId') dealershipId: string,
    @Args('dealershipUpdateInput')
    dealershipUpdateInput: DealershipUpdateInput,
  ) {
    return await this.prisma.dealership.update({
      where: {
        id: dealershipId,
      },
      data: dealershipUpdateInput,
    });
  }
}

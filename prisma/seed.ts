import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed() {
  try {
    console.log('seeding');
    await prisma.dealership.createMany({
      data: [{ id: 'cktekbqu40000epfqes59bxxe', title: 'MeDealership' }],
      skipDuplicates: true,
    });
  } finally {
    await prisma.$disconnect();
  }
}

seed();

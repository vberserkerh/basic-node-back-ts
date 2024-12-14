import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.level.create({
    data: {
        category: 'admin',
        value: "1",
    },
  });

  console.log('Seeder executed: Level added');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
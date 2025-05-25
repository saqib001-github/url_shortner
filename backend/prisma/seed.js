// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: '$2a$10$CsRUEIwKkvUfXkx35VAJP.oRqgYUy5VSH.bTbgHOyADJDlBsrPrNK', // Make sure to hash in real usage
      avatar: 'https://www.gravatar.com/avatar/abc123?d=mp',
    },
  });

  // Create short URLs for the user
  await prisma.shortUrl.createMany({
    data: [
      {
        fullUrl: 'https://www.google.com',
        shortUrl: 'ggl',
        userId: user.id,
      },
      {
        fullUrl: 'https://www.github.com',
        shortUrl: 'ghb',
        userId: user.id,
      },
    ],
  });

  console.log('✅ Seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

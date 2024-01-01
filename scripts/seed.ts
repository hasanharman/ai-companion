const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous People" },
        { name: "Movies & TV" },
        { name: "Games" },
        { name: "Sports" },
        { name: "Musicians" },
        { name: "Cooks" },
        { name: "Animals" },
        { name: "Scientist" },
        { name: "Technology" },
        { name: "Writer" },
        { name: "Artist" },
        { name: "Miscellaneous" },
      ],
    });
  } catch (error) {
    console.error("error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();

import { prismadb } from "../prisma/client.js";
// import { Prisma } from "@prisma/client";

// export const getUserByEmail = async (email) => {
//     console.log(email)
//     const user = await prismadb.$queryRaw(Prisma.sql`SELECT * FROM "User" WHERE "email" = ${email}`);
//     console.log("User", user)
//     return user.length > 0 ? user[0] : null;
// }

// export const getUserById = async (id) => {
//     const user = await prismadb.$queryRaw`Select * from User where id = ${id}`
//     return user;
// }

// export const createUser = async (user) => {
//     console.log(user)
//     const newUser = await prismadb.$queryRaw`Insert into "User" (name, email, password) values (${user.name}, ${user.email}, ${user.password})`
//     return newUser;
// }

// export const getAllUserUrlsDao = async (userId) => {
//     const urls = await prismadb.$queryRaw`Select * from shortUrl where userId = ${userId}`
//     return urls;
// }

// export const getUserByEmailAndPassword = async (email, password) => {
//     const user = await prismadb.$queryRaw`Select * from User where email = ${email} and password = ${password}`
//     return user;
// }


export const getUserByEmail = async (email) => {
  const user = await prismadb.user.findUnique({
    where: { email },
  });
  return user;
};

export const getUserById = async (id) => {
  const user = await prismadb.user.findUnique({
    where: { id },
  });
  return user;
};

export const createUser = async (user) => {
  const newUser = await prismadb.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });
  return newUser;
};

export const getAllUserUrlsDao = async (userId) => {
  const urls = await prismadb.shortUrl.findMany({
    where: { userId },
  });
  return urls;
};

export const getUserByEmailAndPassword = async (email, password) => {
  const user = await prismadb.user.findFirst({
    where: {
      email,
      password,
    },
  });
  return user;
};

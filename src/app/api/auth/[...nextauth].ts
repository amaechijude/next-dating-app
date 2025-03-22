import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/app/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});



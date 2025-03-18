import NextAuth from "next-auth";
// import { ZodError } from "zod";
// import Credentials from "next-auth/providers/credentials";
// import { loginSchema } from "@/lib/schemas/LoginSchema";
// import { hashPassword, verifyPassword } from "@/lib/Argon/argon";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});

'use server'

import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";
import { argon2d } from "argon2";
import { signupSchema } from "@/lib/schemas/SignUpSchema";


const prisma = new PrismaClient();

export async function SignUp(req: Request) {
    try {

    } catch(error) {
        return N
    }
}
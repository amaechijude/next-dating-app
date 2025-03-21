'use server';

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { signupSchema } from "@/lib/schemas/SignUpSchema";
import argon2 from "argon2";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();

        //validate with zod
        const result = await signupSchema.safeParseAsync(body);
        if (!result.success) {
            return NextResponse.json(
                { errors: result.error.format() },
                { status: 400  }
            );
        } // After validation

        const { username, email, password, confirmPassword } = await result.data;
        if (password !== confirmPassword) {
            return NextResponse.json(
                { errors: "Password Mismatch"},
                { status: 400 }
            )
        }
        const hashedPassword = await argon2.hash(password);
        // create user with prisma client
        const user = await prisma.user.create({
            data: {
                username: username, 
                email: email,
                passwordHash: hashedPassword
            }
        });
        return NextResponse.json(
            { user },
            { status: 201 }
        )

    } catch(err) {
        console.error(err)
        return NextResponse.json(
            { error: "user creation failed" },
            { status: 500 }
        )
    }
}
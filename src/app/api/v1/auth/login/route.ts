import { loginSchema } from "@/lib/schemas/LoginSchema";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import argon2 from "argon2";


const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
    if (req.method !== "POST") {
        return NextResponse.json({message: "Method not allowed"}, {status: 405});
    }

        const body = await req.json();
        const result = await loginSchema.safeParseAsync(body);

        if (!result.success) {            
            return NextResponse.json({message: result.error.format()}, {status: 400})
        }

        const {email, password} = result.data;

    try {
        const user = await prisma.user.findUnique({ where: {email}});
        if (!user) {
            return NextResponse.json({message: "Invalid Credentials"}, {status: 401})
        }

        const isValidPassword = await argon2.verify(`${user.passwordHash}`, password);
        if (!isValidPassword) {
            return NextResponse.json({message: "Invalid Credentials"}, {status: 401});
        }

        return NextResponse.json({message: "Login Successful"}, {status: 200});
        

    }catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}


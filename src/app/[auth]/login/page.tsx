"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema, loginSchema } from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {

  const {register, handleSubmit, formState: { errors },} = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error("Failed to login");
    }

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email is Required</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gray-100"
                variant={"outline"}
              >
                Login
              </Button>
            </form>
            <br className="breakLine" />
            <Link href="/signup">
              <Button className="w-full">Register</Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}



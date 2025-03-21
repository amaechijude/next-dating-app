"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema} from "@/lib/schemas/SignUpSchema";

// type SignupInput = {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
  
    // process logi
    const res = await fetch("/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
      // headers: //csrftoken
    });
    const resData = await res.json();
    if (!res.ok) {
      console.log(resData);
    } else {
      console.log("Signup succefull");
      console.log(resData);
    }
  };

  return (
    <div className="flex min-h-screen justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              SignUp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Enter username"
                  {...register("username", { required: true })}
                />
                {errors.username && <span>{ errors.username.message } </span>}
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>{ errors.email.message }</span>}
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>{ errors.password.message }</span>}
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <span>{ errors.confirmPassword.message }</span>}
              </div>
              <Button type="submit" className="w-full bg-gray-50" variant={"outline"}>
                SignUp
              </Button>
            </form>
            <br className="breakLine"/>
            <Link href="/auth/login">
              <Button className="w-full">login</Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {
    const loginPath = "auth/loging";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const passworValidation = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("password match");
    }
    else {
        console.log("Invalid password");
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      email,
      password,
      confirmPassword,
      userName,
    });
  }

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter eail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    passworValidation(e);
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                SignUp
              </Button>
            </form>
            <Link href={loginPath}>
              <Button className="w-full">login</Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

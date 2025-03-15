'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const loginUrl = "/auth/login";
    const signupUrl = "/auth/signup";
    // const logoutUrl = "/auth/logout";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-blue-600"
          >
            Connection
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <Button onClick={() => setIsLoggedIn(false)} variant="outline">
              Logout
            </Button>
          ) : (
            <>
              <Link href={loginUrl}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link href={signupUrl}>
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

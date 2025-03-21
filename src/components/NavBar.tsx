"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Navbar() {
  const loginUrl = "/auth/login";
  const signupUrl = "/auth/signup";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function logOut() {
    const res = await fetch("/api/v1/auth/logout", {
      method: "POST",
    });
    if (res.ok) {
      setIsLoggedIn(false);
    }
  }
  
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.2, backgroundColor: "gray" }}
            className="text-xl font-bold text-blue-600"
          >
            <Button variant={"outline"} size={"lg"} color="gray">
              CONNECTION
            </Button>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <motion.div whileHover={{ scale: 1.2, backgroundColor: "gray" }}>
              <Button onClick={logOut} variant="outline">
                Logout
              </Button>
            </motion.div>
          ) : (
            <>
              <Link href={loginUrl}>
                <motion.div
                  whileHover={{ scale: 1.2, backgroundColor: "beige" }}
                  className="text-xl font-serif"
                >
                  <Button variant="outline" onClick={() => setIsLoggedIn(true)} color="gray">
                    Login
                  </Button>
                </motion.div>
              </Link>
              <Link href={signupUrl}>
                <motion.div
                  whileHover={{ scale: 1.2, backgroundColor: "beige" }}
                  className="text-xl font-serif"
                >
                  <Button variant={"outline"} color="gray">Register</Button>
                </motion.div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


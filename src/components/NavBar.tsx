"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react"


export default function Navbar() {
  const loginUrl = "/auth/login";
  const signupUrl = "/auth/signup";
  const { data: session } = useSession();

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
          { session ? (
            <motion.div whileHover={{ scale: 1.2, backgroundColor: "gray" }}>
              <Button onClick={() => signOut()} variant="outline">
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
                  <Button variant="outline" onClick={() => signIn()} color="gray">
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


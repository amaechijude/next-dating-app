"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function Navbar() {

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
            <motion.div whileHover={{ scale: 1.2, backgroundColor: "gray" }}>
              <Button variant="outline">
                Logout
              </Button>
            </motion.div>
          
            <>
              <Link href="/login">
                <motion.div
                  whileHover={{ scale: 1.2, backgroundColor: "beige" }}
                  className="text-xl font-serif"
                >
                  <Button variant="outline" color="gray">
                    Login
                  </Button>
                </motion.div>
              </Link>
              <Link href="/signup">
                <motion.div
                  whileHover={{ scale: 1.2, backgroundColor: "beige" }}
                  className="text-xl font-serif"
                >
                  <Button variant={"outline"} color="gray">Register</Button>
                </motion.div>
              </Link>
            </>
        </div>
      </div>
    </nav>
  );
}


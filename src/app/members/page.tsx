import Link from "next/link";
import { Button } from "@heroui/button";

export default function MembersPage() {
    return (
        <>
        <div>
            Welcome to members page
            
      <Link href="/">Home</Link>
      <Button
      color="danger"
      variant="bordered"
      startContent={"hi"}
      >Click me</Button>
        </div>
        </>
    )
}
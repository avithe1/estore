import React from "react";
import { auth } from "@/auth";
import { UserRound, UserRoundCheck } from "lucide-react";
import Link from "next/link";

const NavUser = async () => {
  const session = await auth();

  return (
    <Link href="/signin">
      {!session?.user ? <UserRound /> : <UserRoundCheck />}
    </Link>
  );
};

export default NavUser;

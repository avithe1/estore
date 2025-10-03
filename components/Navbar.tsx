import NavCart from "./NavCart";
import Link from "next/link";
import NavSearch from "./NavSearch";
import { Suspense } from "react";
import NavUser from "./NavUser";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-600 p-5 flex justify-between items-center h-navbar">
      <div className="sm:text-2xl font-bold">
        <Link href="/">
          <Image
            src="/estorelogo.png"
            alt="estore logo"
            height={50}
            width={50}
          />
        </Link>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <Suspense>
          <NavSearch />
        </Suspense>
        <NavCart />
        <NavUser />
      </div>
    </div>
  );
}

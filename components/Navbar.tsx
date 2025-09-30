import NavCart from "./NavCart";
import Link from "next/link";
import NavSearch from "./NavSearch";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-600 p-5 flex justify-between items-center h-navbar">
      <div className="sm:text-2xl font-bold">
        <Link href="/">E-Cart</Link>
      </div>
      <div className="flex gap-3 items-center">
        <Suspense>
          <NavSearch />
        </Suspense>
        <NavCart />
      </div>
    </div>
  );
}

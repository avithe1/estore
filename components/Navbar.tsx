import NavCart from "./NavCart";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-600 p-5 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">E-Cart</Link>
      </div>
      <NavCart />
    </div>
  );
}

"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/lib/products";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const InCartItemNotification = ({ product }: { product: Product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const filteredCartArray = cartItems.filter((item) => item.id === product.id);
  const isProductInCart = filteredCartArray.length > 0;

  if (!isProductInCart) {
    return null;
  }

  return (
    <Link href="/cart">
      <div className="absolute -top-1.5 -right-1 px-2 py-2 rounded-xl flex items-center text-sm gap-2 bg-foreground text-background border-2 border-background">
        <div>
          <ShoppingCart size={14} />
        </div>
        <div>{filteredCartArray[0].quantity}</div>
      </div>
    </Link>
  );
};

export default InCartItemNotification;

"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const InCartItemNotification = ({ product }: { product: Product }) => {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.products);
  const filteredCartArray = cartItems.filter((item) => item.id === product.id);
  const isProductInCart = filteredCartArray.length > 0;

  if (!isProductInCart) {
    return null;
  }

  return (
    <button
      onClick={() => router.push("/cart")}
      aria-label="cart shortcut"
      className="absolute -top-1.5 -right-1 rounded-xl text-sm border-2 bg-background hover:bg-hovercolor focus:bg-hovercolor overflow-hidden cursor-pointer"
    >
      <div className="flex items-center px-2 py-2 gap-2">
        <div>
          <ShoppingCart size={14} />
        </div>
        <div>{filteredCartArray[0].quantity}</div>
      </div>
    </button>
  );
};

export default InCartItemNotification;

"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/lib/products";

const InCartItemNotification = ({ product }: { product: Product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const filteredCartArray = cartItems.filter((item) => item.id === product.id);
  const isProductInCart = filteredCartArray.length > 0;

  if (!isProductInCart) {
    return null;
  }

  return (
    <div className="absolute -top-1 -right-1 bg-white text-black p-3 rounded-full">
      {filteredCartArray[0].quantity}
    </div>
  );
};

export default InCartItemNotification;

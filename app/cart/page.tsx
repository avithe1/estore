"use client";
import BackButton from "@/components/BackButton";
import CartItems from "@/components/CartItems";
import { useAppSelector } from "@/lib/redux/hooks";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.products);
  let totalPrice = 0;
  if (cartItems.length === 0) {
    return (
      <div className="flex w-full flex-col">
        <BackButton />
        <div className="flex-1">
          <div className="flex h-full w-full justify-center items-center">
            Your cart is empty
          </div>
        </div>
      </div>
    );
  } else {
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
  }

  return (
    <div className="w-full">
      <BackButton />
      <CartItems products={cartItems} />
      <h3 className="text-right mr-10 text-2xl font-bold mt-3">
        Total Price : {totalPrice.toFixed(2)}
      </h3>
    </div>
  );
}

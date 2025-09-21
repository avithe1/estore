"use client";
import React, { PropsWithChildren } from "react";
import { removeFromCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

type Props = PropsWithChildren<{
  id: number;
}>;

const RemoveFromCart = ({ id, children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <button className="cursor-pointer" onClick={() => dispatch(removeFromCart({id}))}>{children}</button>
  );
};

export default RemoveFromCart;

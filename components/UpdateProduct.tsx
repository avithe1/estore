"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { CartItem, Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCart from "./RemoveFromCartButton";
import {
  addToCart,
  removeFromCart,
  updateProductQuantity,
} from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

const UpdateProduct = ({ product }: { product: Product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const filteredCartArray = cartItems.filter((item) => item.id === product.id);
  const isProductInCart = filteredCartArray.length > 0;
  let cartItem: CartItem | null = null;
  const dispatch = useAppDispatch();

  if (isProductInCart) {
    cartItem = filteredCartArray[0];
    //setProductQuantity(cartItem.quantity);
  }
  const [productQuantity, setProductQuantity] = useState(
    cartItem?.quantity || 0
  );

  // useEffect(() => {
  //   dispatch(
  //     updateProductQuantity({
  //       id: product.id,
  //       quantity: productQuantity,
  //     })
  //   );
  // }, [productQuantity]);

  return (
    <div>
      {!isProductInCart ? (
        <AddToCartButton product={product}>Add to cart</AddToCartButton>
      ) : (
        <div className="flex gap-2 items-center">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </div>
          <div>
            <input
              type="number"
              value={productQuantity}
              onChange={(e) => {
                setProductQuantity(Number(e.target.value));
                dispatch(
                  updateProductQuantity({
                    id: product.id,
                    quantity: Number(e.target.value),
                  })
                );
              }}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(removeFromCart(product))}
          >
            -
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;

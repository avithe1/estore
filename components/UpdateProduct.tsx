"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import {
  addToCart,
  removeFromCart,
  updateProductQuantity,
} from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Trash2 } from "lucide-react";

const MAX_PRODUCT_QUANTITY = 25;

const UpdateProduct = ({ product }: { product: Product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const filteredCartArray = cartItems.filter((item) => item.id === product.id);
  const [productQuantity, setProductQuantity] = useState(0);
  const isProductInCart = filteredCartArray.length > 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cartItems.length) {
      const fA = cartItems.filter((item) => item.id === product.id);
      if (fA.length) {
        setProductQuantity(fA[0].quantity);
      } else {
        setProductQuantity(0);
      }
    } else {
      setProductQuantity(0);
    }
  }, [cartItems, product.id]);

  return (
    <div>
      {!isProductInCart ? (
        <AddToCartButton product={product}>Add to cart</AddToCartButton>
      ) : (
        <div className="flex gap-2 items-center">
          {productQuantity === 1 ? (
            <div className="flex items-center">
              <button
                className="cursor-pointer"
                onClick={() => dispatch(removeFromCart(product))}
              >
                <Trash2 className="text-red-700" />
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <button
                className="cursor-pointer border border-gray-600 px-1 sm:px-2 rounded"
                onClick={() => dispatch(removeFromCart(product))}
              >
                -
              </button>
            </div>
          )}

          <div className="flex items-center">
            <input
              max={MAX_PRODUCT_QUANTITY}
              min={1}
              //style={{ width: "5ch" }}
              className="w-[3ch] sm:w-[5ch]"
              type="number"
              value={productQuantity}
              onChange={(e) => {
                if (
                  !isNaN(Number(e.target.value)) &&
                  Number(e.target.value) > 0 &&
                  Number(e.target.value) < MAX_PRODUCT_QUANTITY
                ) {
                  setProductQuantity(Number(e.target.value));

                  dispatch(
                    updateProductQuantity({
                      id: product.id,
                      quantity: Number(e.target.value),
                    })
                  );
                }
              }}
            />
          </div>
          <div className="flex items-center">
            <button
              className="cursor-pointer border border-gray-600 px-1 sm:px-2 rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;

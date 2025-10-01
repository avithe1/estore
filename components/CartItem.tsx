import type { Product } from "@/lib/products";
import React from "react";
import UpdateProduct from "./UpdateProduct";
import Image from "next/image";

const CartItem = ({ product }: { product: Product }) => {
  return (
    <div className="p-1 sm:p-2 border-b border-gray-900 flex justify-between items-center last:border-0">
      <div className="flex gap-2 items-center">
        <div className="relative md:h-[100px] md:w-[100px]  h-[50px] w-[50px] aspect-square">
          <Image src={product.image} sizes="100%" fill alt={product.title} priority className="h-full w-full object-contain"/>
        </div>
        <div>
          <h2 className="text-sm md:text-xl md:font-bold truncate flex-shrink-0 text-wrap ">
            {product.title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-l border-gray-700 px-1 sm:px-3">
        <div className="text-sm"><span className="text-gray-600">Price/item :</span> {product.price}</div>
        <div className="self-end"><UpdateProduct product={product} /></div>
      </div>
    </div>
  );
};

export default CartItem;

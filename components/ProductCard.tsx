import type { Product } from "@/lib/products";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InCartItemNotification from "./InCartItemNotification";
import UpdateProduct from "./UpdateProduct";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group p-2 border rounded-xl border-gray-400 flex flex-col relative min-h-[250px]  hover:border-white hover:ring-2">
      <Link
        scroll={false}
        href={`/product/${product.id}`}
        className="cursor-pointer"
      >
        <div className="flex w-full justify-center items-center">
          <div className="relative aspect-square w-[70%] h-[200px] overflow-hidden ">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="scale-80 h-full w-full object-contain group-hover:scale-100 transition-all duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold truncate flex-shrink-0">
            {product.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm mt-2 flex-1 overflow-hidden line-clamp-3 width-2/3 dark:text-gray-400 text-gray-700">
            {product.description}
          </div>
          <div className="border border-gray-600 px-2 py-1 rounded font-semibold">
            ${product.price}
          </div>
        </div>
      </Link>
      <InCartItemNotification product={product} />
      <div className="flex items-center justify-center py-4 ">
        <UpdateProduct product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

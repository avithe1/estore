import type { Product } from "@/lib/products";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InCartItemNotification from "./InCartItemNotification";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="p-2 border rounded border-gray-400 flex flex-col relative">
        <div className="relative w-[100px] h-[150px] object-cover">
          <Image
            src={product.image}
            fill
            sizes="100%"
            alt={product.title}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold truncate flex-shrink-0">
            {product.title}
          </h2>
        </div>
        <div className="text-sm mt-2 flex-1 overflow-hidden line-clamp-3">
          {product.description}
        </div>
        <InCartItemNotification product={product} />
      </div>
    </Link>
  );
};

export default ProductCard;

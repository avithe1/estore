import type { Product } from "@/lib/products";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InCartItemNotification from "./InCartItemNotification";
import UpdateProduct from "./UpdateProduct";
import { ChevronRight } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="p-2 border rounded border-gray-400 flex flex-col relative min-h-[250px]  hover:border-white hover:bg-gray-950">
      <div className="relative aspect-square w-[70%] h-[200px] overflow-hidden ">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="h-full w-full object-contain "
          sizes="100%"
          priority
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold truncate flex-shrink-0">
          {product.title}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm mt-2 flex-1 overflow-hidden line-clamp-3 width-2/3 text-gray-400">
          {product.description}
        </div>
        <div className="border border-gray-600 px-2 py-1 rounded font-semibold">
          ${product.price}
        </div>
      </div>
      <InCartItemNotification product={product} />
      <div className="flex items-center justify-between py-4 ">
        <UpdateProduct product={product} />
        <div>
          <Link scroll={false} href={`/product/${product.id}`}><div className="flex items-center">More <span className="text-gray-500"><ChevronRight /></span></div></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

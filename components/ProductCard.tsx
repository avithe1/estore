import type { Product } from "@/lib/products";
import React from "react";
import UpdateProduct from "./UpdateProduct";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="p-5 border rounded border-gray-400 flex justify-between">
        <div>{product.title}</div>
        <div>
          <UpdateProduct product={product} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

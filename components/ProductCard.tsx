import type { Product } from "@/lib/products";
import React from "react";
import UpdateProduct from "./UpdateProduct";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="p-5 border rounded border-gray-400 flex justify-between">
      <div>{product.title}</div>
      <div>
        <UpdateProduct product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

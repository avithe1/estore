import type { Product } from "@/lib/products";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <div key={product.id} className="p-3">
          {product.title}{" "}
          <AddToCartButton product={product}>Add</AddToCartButton>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

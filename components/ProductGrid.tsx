import type { Product } from "@/lib/products";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 w-full gap-3">
      {products.length
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "No products available"}
    </div>
  );
};

export default ProductGrid;

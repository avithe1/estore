import type { Product } from "@/lib/products";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 p-5">
      {products.length
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "No products available"}
    </div>
  );
};

export default ProductGrid;

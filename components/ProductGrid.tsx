import type { Product } from "@/lib/products";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

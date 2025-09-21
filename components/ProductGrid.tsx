import type { Product } from "@/lib/products";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col">
      {products.length
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : "No products available"}
    </div>
  );
};

export default ProductGrid;

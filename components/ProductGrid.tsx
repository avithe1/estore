"use client";
import type { Product } from "@/lib/products";
import React from "react";
import ProductCard from "./ProductCard";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { clearSearchTerm } from "@/lib/redux/features/search/searchSlice";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const { searchTerm } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  let filteredProducts: Product[] = [];

  if (searchTerm.length) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredProducts = products;
  }

  return (
    <div className="w-full flex flex-col gap-4 p-5">
      <div className="flex w-full items-center h-[30px] gap-4">
        {searchTerm.length ? (
          <>
            <h3 className="font-bold">
              Showing results for :{" "}
              <span className="text-blue-500">{searchTerm}</span>
            </h3>
            <button
              className="px-3 py-0.5 rounded-2xl bg-gray-600 hover:bg-gray-500 cursor-pointer"
              onClick={() => dispatch(clearSearchTerm())}
            >
              Clear search
            </button>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className={filteredProducts.length?"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3":""}>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex w-full mt-20 justify-center items-center">
            No products available
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;

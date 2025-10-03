"use client";
import type { Product } from "@/lib/products";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams, useRouter } from "next/navigation";
import { createQueryString } from "@/lib/utils";
import ProductsCardSkeleton from "./ProductCardsSkeleton";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("search") || "";
  const sortBy = searchParams.get("sort") || "";
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let fp = [];
    if (searchTerm.length) {
      fp = [
        ...products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      ];
    } else {
      fp = [...products];
    }

    if (sortBy.length) {
      switch (sortBy) {
        case "title":
          fp = [...fp.sort((a, b) => a.title.localeCompare(b.title))];
          break;
        case "price":
          fp = [...fp.sort((a, b) => a.price - b.price)];
          break;
        default:
          break;
      }
    }

    setFilteredProducts(fp);
  }, [searchTerm, sortBy]);

  return (
    <div className="w-full flex flex-col gap-4 p-5">
      <div className="flex w-full items-center justify-between h-[30px] gap-4">
        <div className="flex w-[50%] items-center gap-4">
          {searchTerm.length ? (
            <>
              <h3 className="font-bold">
                Showing results for :{" "}
                <span className="text-blue-500">{searchTerm}</span>
              </h3>
              <button
                className="px-3 py-0.5 rounded-2xl bg-gray-600 hover:bg-gray-500 cursor-pointer"
                onClick={() => router.replace(createQueryString("", sortBy))}
              >
                Clear search
              </button>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {filteredProducts.length ? (
            <>
              <div>
                <label htmlFor="product-filter" className="text-sm">
                  Sort by
                </label>
              </div>
              <div>
                <select
                  name="pets"
                  id="product-filter"
                  className="px-3 py-1 border border-gray-700 rounded"
                  onChange={(e) => {
                    router.replace(
                      createQueryString(searchTerm, e.target.value)
                    );
                  }}
                  value={sortBy}
                >
                  <option value="">None</option>
                  <option value="title">Title</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div
        className={
          filteredProducts.length
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3"
            : "w-full flex flex-1 justify-center items-center"
        }
      >
        {filteredProducts.length ? (
          <>
            {filteredProducts.map((product, index) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  lazy={index < 4 ? true : false}
                />
              );
            })}
          </>
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;

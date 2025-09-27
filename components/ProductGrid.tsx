"use client";
import type { Product } from "@/lib/products";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { clearSearchTerm } from "@/lib/redux/features/search/searchSlice";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const [sortBy, setSortBy] = useState("");
  const { searchTerm } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  //let filteredProducts: Product[] = [];
  useEffect(() => {
    if (searchTerm.length) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setSortBy("");
    } else {
      setFilteredProducts(products);
      setSortBy("");
    }
  }, [searchTerm]);

  useEffect(() => {
    switch (sortBy) {
      case "title":
        setFilteredProducts([
          ...filteredProducts.sort((a, b) => a.title.localeCompare(b.title)),
        ]);
        break;
      case "price":
        setFilteredProducts([
          ...filteredProducts.sort((a, b) => a.price - b.price),
        ]);
        break;
      default:
        setFilteredProducts([...filteredProducts]);
        return;
    }
  }, [sortBy]);

  return (
    <div className="w-full flex flex-col gap-4 p-5">
      <div className="flex w-full items-center justify-between h-[30px] gap-4">
        <div className="flex items-center gap-4">
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
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {filteredProducts.length ? (
            <>
              <div>
                <label htmlFor="pet-select">Sort by</label>
              </div>
              <div>
                <select
                  name="pets"
                  id="pet-select"
                  className="px-3 py-1 border border-gray-700 rounded"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="" selected={sortBy === ""}>
                    Select
                  </option>
                  <option value="title" selected={sortBy === "title"}>
                    Title
                  </option>
                  <option value="price" selected={sortBy === "price"}>
                    Price
                  </option>
                </select>
              </div>
              <div>{sortBy}</div>
            </>
          ) : null}
        </div>
      </div>
      <div
        className={
          filteredProducts.length
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3"
            : ""
        }
      >
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

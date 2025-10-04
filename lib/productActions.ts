"use server";

import { Product } from "./products";

export const addProduct = async (state:Product|null, formData:FormData) => {
  const product = {
    title: formData.get("title"),
    price: formData.get("price"),
  };

  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Could not send the product");
  }

  console.log("response ok");
  const data: Product = await response.json();
  console.log(data);
  return data;
};

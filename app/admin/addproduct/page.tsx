"use client";
import { addProduct } from "@/lib/productActions";
import { Product } from "@/lib/products";
import React, { useActionState } from "react";

const AddProductPage = () => {
  const [state, formAction, isPending] = useActionState(addProduct, null);
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10 gap-5">
      {isPending ? (
        "Please wait..."
      ) : (
        <>
          <h1 className="text-xl font-bold">Add a product</h1>
          <div>
            <form action={formAction}>
              Title : <input name="title" type="text" />
              <br />
              Price : <input name="price" type="number" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AddProductPage;

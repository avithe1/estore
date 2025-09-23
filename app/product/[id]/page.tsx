import UpdateProduct from "@/components/UpdateProduct";
import { getProduct, Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {
  params: Promise<{ id: number }>;
};

const ProductDetail = async (params: { id: number }) => {
  let product: Product | null = null;
  let error: string = "";
  try {
    error = "";
    product = await getProduct(params.id);
  } catch (e) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = "Unknown error";
    }
  }

  if (error.length) {
    return <p>An error occurred when fetching product.</p>;
  }

  return product ? (
    <div className="w-full min-h-screen flex flex-col p-10 gap-3">
      <h1 className="mt-2 text-2xl font-bold">{product.title}</h1>
      <div className="relative h-[200px] w-[200px] aspect-square overflow-hidden">
        <Image src={product.image} fill sizes="100%" alt={product.title} priority className="h-full w-full object-contain"/>
      </div>
      {<div className="text-sm">{product.description}</div>}
      <UpdateProduct product={product} />
    </div>
  ) : null;
};

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <Link href="/">Back</Link>
      <Suspense
        fallback={
          <div className="w-full min-h-screen flex items-center justify-center">
            Loading product...
          </div>
        }
      >
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

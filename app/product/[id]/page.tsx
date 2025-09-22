import { getProduct, ProductWithoutCategory } from "@/lib/products";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {
  params: Promise<{ id: number }>;
};

const ProductDetail = async (params: { id: number }) => {
  let product: ProductWithoutCategory | null = null;
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

  return (
    <div className="w-full min-h-screen flex justify-center">
      <h1 className="mt-5 text-2xl font-bold">{product?.title}</h1>
    </div>
  );
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

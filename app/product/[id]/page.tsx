import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";
import { getProduct, getProducts, Product } from "@/lib/products";

type Props = {
  params: Promise<{ id: number }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;

  try {
    const product: Product = await getProduct(id);
    return {
      title: product.title,
      description: product.description,
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    // You can choose to re-throw the error to fail the build
    throw error;
    // Or return an empty array to skip generating these params,
    // but this might lead to missing pages.
    // return [];
  }
}

export async function generateStaticParams() {
  try {
    const products: Product[] = await getProducts();
    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    // You can choose to re-throw the error to fail the build
    throw error;
    // Or return an empty array to skip generating these params,
    // but this might lead to missing pages.
    // return [];
  }
}

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div className="w-full">
      <BackButton />
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

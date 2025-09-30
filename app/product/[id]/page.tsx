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

  // fetch data
  const product: Product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products: Product[] = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <BackButton />
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

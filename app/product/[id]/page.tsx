import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";
import BackButton from "@/components/BackButton";

type Props = {
  params: Promise<{ id: number }>;
};

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <BackButton/>
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

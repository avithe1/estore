import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";

type Props = {
  params: Promise<{ id: number }>;
};

const ProductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <Link href="/">
        <div className="flex items-center mt-4">
          <div>
            <ChevronLeft />
          </div>{" "}
          <div>Back</div>
        </div>
      </Link>
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

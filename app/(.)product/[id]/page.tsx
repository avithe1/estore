import { X } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";

type Props = {
  params: Promise<{ id: number }>;
};

const QuickViewDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-3xl h-[80%] overflow-scroll border border-gray-600 rounded-2xl p-5">
        <Link href="/">
          <div className="flex items-center mt-4 justify-end px-5">
            <div>
              <X />
            </div>
          </div>
        </Link>
        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetail id={id} />
        </Suspense>
      </div> 
    </div>
  );
};

export default QuickViewDetailPage;

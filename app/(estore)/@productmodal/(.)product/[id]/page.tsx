import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";
import { Modal } from "./modal";
import CloseModalButton from "@/components/CloseModalButton";

type Props = {
  params: Promise<{ id: number }>;
};

const QuickViewDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <Modal>
      <div className="flex w-full justify-center items-center">
        <div className="w-full h-full overflow-scroll border border-gray-600 rounded-2xl p-2 md:p-5 bg-black">
          <CloseModalButton />
          <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetail id={id} />
          </Suspense>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewDetailPage;

import React, { Suspense } from "react";
import ProductDetail from "@/components/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailSkeleton";
import { Modal } from "@/components/ProductModal";
import CloseModalButton from "@/components/CloseModalButton";

type Props = {
  params: Promise<{ id: number }>;
};

const QuickViewDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <Modal>
      <CloseModalButton />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetail id={id} />
        </Suspense>
      </div>
    </Modal>
  );
};

export default QuickViewDetailPage;

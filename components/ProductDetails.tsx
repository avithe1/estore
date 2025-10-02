import UpdateProduct from "@/components/UpdateProduct";
import { getProduct, Product } from "@/lib/products";
import Image from "next/image";

const ProductDetail = async ({
  id,
  isDialog = false,
}: {
  id: number;
  isDialog?: boolean;
}) => {
  let product: Product | null = null;
  product = await getProduct(id);

  return product ? (
    <div className="w-full h-full flex flex-col p-4 sm:p-10 gap-3 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="mt-2 mr-2 text-2xl font-bold">{product.title}</h1>
        {isDialog ? <UpdateProduct product={product} /> : null}
      </div>
      <div className="relative size-[70%] lg:size-[50%] aspect-square bg-foreground/10 rounded-xl">
        <Image
          src={product.image}
          fill
          sizes="100%"
          alt={product.title}
          priority
          className="object-contain p-5"
        />
      </div>
      {<div className="text-sm">{product.description}</div>}
      {!isDialog ? <UpdateProduct product={product} /> : null}
    </div>
  ) : null;
};

export default ProductDetail;

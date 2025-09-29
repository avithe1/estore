import UpdateProduct from "@/components/UpdateProduct";
import { getProduct, Product } from "@/lib/products";
import Image from "next/image";

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
    <div className="w-full h-full flex flex-col p-10 gap-3">
      <h1 className="mt-2 text-2xl font-bold">{product.title}</h1>
      <div className="relative h-[200px] w-[200px] aspect-square overflow-hidden">
        <Image
          src={product.image}
          fill
          sizes="100%"
          alt={product.title}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      {<div className="text-sm">{product.description}</div>}
      <UpdateProduct product={product} />
    </div>
  ) : null;
};

export default ProductDetail;

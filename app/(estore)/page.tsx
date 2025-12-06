import ProductsCardSkeleton from "@/components/ProductCardsSkeleton";
import ProductGrid from "@/components/ProductGrid";
import { getProducts, Product } from "@/lib/products";
import { Github } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function Products() {
  let error: Error | unknown;
  let products: Product[] = [];

  try {
    products = await getProducts();
  } catch (e) {
    error = e;
  }

  if (error) {
    if (error instanceof Error) {
      return <div>Error : {error.message} 1</div>;
    } else {
      return <div>Error : Unknown error</div>;
    }
  }

  return <ProductGrid products={products} />;
}

export default async function Home() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex flex-col gap-4 p-5">
          <div className="flex w-full items-center justify-between h-[30px] gap-4"></div>
          <ProductsCardSkeleton />
        </div>
      }
    >
      <div className="w-full flex flex-col min-h-screen">
        <Products />
        <div className="text-gray-600 text-sm w-full flex justify-center my-5">
          <Link href="https://github.com/avithe1/estore">Github</Link>
        </div>
      </div>
    </Suspense>
  );
}

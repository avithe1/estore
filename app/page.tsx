import ProductGrid from "@/components/ProductGrid";
import { getProducts, Product } from "@/lib/products";
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
      return <div>Error : {error.message}</div>;
    } else {
      return <div>Error : Unknown error</div>;
    }
  }

  return <ProductGrid products={products} />;
}

export default async function Home() {
  return (
    <Suspense fallback="Loading products...">
      <Products />
    </Suspense>
  );
}

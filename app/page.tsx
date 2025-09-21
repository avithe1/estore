//"use client";
//import { addToCart, removeFromCart } from "@/lib/redux/features/cart/cartSlice";
//import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";

import ProductGrid from "@/components/ProductGrid";
import { getProducts, Product } from "@/lib/products";

export default async function Home() {
  const products: Product[] = await getProducts();
  //console.log(products);
  return <ProductGrid products={products} />;
  // const cartItems = useAppSelector((state) => state.cart.products);
  // const dispatch = useAppDispatch();
  // console.log("cart Items : ", cartItems);
  // return (
  //   <div className="">
  //     {cartItems.map((item, index) => (
  //       <div key={index}>{item}</div>
  //     ))}
  //     <button onClick={() => dispatch(addToCart())}>Add</button>
  //     <button onClick={() => dispatch(removeFromCart())}>Remove</button>
  //   </div>
  // );
}

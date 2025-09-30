import { isNumber, isString } from "./utils";

const BASE_URL = "https://fakestoreapi.com/";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type CartItem = Product & {
  quantity: number;
};

type ProductAPIResponse = Product;


// function validateProduct(data: unknown): boolean {
//   if (data !== "object" && data === null) return false;

//   const obj = data as Record<string, unknown>;

//   return (
//     isNumber(obj.id) &&
//     isString(obj.title) &&
//     isNumber(obj.price) &&
//     isString(obj.description) &&
//     isString(obj.image) &&
//     isString(obj.category)
//   );
// }

function validateProductResponse(data: unknown): data is Product {
  if (data !== "object" && data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    isNumber(obj.id) &&
    isString(obj.title) &&
    isNumber(obj.price) &&
    isString(obj.description) &&
    isString(obj.image) &&
    isString(obj.category)
  );
}

function validateProductsResponse(data: unknown): data is ProductAPIResponse[] {
  return Array.isArray(data) && data.every(validateProductResponse);
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(BASE_URL + "products");
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    let jsonData: unknown;
    try {
      jsonData = await response.json();
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "JSON error. Invalid data format"
      );
    }

    if (!validateProductsResponse(jsonData)) {
      throw new Error("Invalid products data");
    }

    return jsonData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(BASE_URL + "products/" + id.toString(), {
      //cache: "force-cache",
      next:{
        revalidate:3600,
        tags:[`product-${id}`]
      }
    });

    if (!response.ok) {
      throw new Error("HTTP error. Failed to fetch product, try again later");
    }

    let jsonData: unknown;
    try {
      jsonData = await response.json();
    } catch (e) {
      throw new Error(
        e instanceof Error ? e.message : "JSON error. Invalid data format"
      );
    }

    if (!validateProductResponse(jsonData)) {
      throw new Error("Invalid product data");
    }

    return jsonData;
  } catch (e) {
    throw e;
  }
};

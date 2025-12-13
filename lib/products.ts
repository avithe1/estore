"use server";
import { isNumber, isString } from "./utils";
import { safeURLS } from "./utils";

//const BASE_URL = "https://fakestoreapi.com/";
const BASE_URL = "https://api.escuelajs.co/api/v1/";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type ProductNewAPI = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    name: string;
  };
};

export type CartItem = Product & {
  quantity: number;
};

type ProductAPIResponse = Product;

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
    const response = await fetch(BASE_URL + "products", {
      next: { revalidate: 60000 },
    });
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    let jsonData: ProductNewAPI[];
    let productjson: unknown;
    try {
      jsonData = await response.json();
      productjson = jsonData.map((p) => {
        return {
          id: p.id,
          title: p.title,
          price: p.price,
          description: p.description,
          image: safeURLS.some((img) => p.images[0].startsWith(img))
            ? p.images[0]
            : "/shirt.jpeg",
          category: p.category.name,
        };
      });
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "JSON error. Invalid data format"
      );
    }

    if (!validateProductsResponse(productjson)) {
      throw new Error("Invalid products data");
    }

    return productjson;
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
    console.log(BASE_URL + "products/" + id.toString());
    const response = await fetch(BASE_URL + "products/" + id.toString(), {
      next: { revalidate: 60000 },
    });

    if (!response.ok) {
      throw new Error("HTTP error. Failed to fetch product");
    }

    let jsonData: ProductNewAPI;
    let productjson: unknown;
    try {
      jsonData = await response.json();
      productjson = {
        id: jsonData.id,
        title: jsonData.title,
        price: jsonData.price,
        description: jsonData.description,
        image: safeURLS.some((img) => jsonData.images[0].startsWith(img))
          ? jsonData.images[0]
          : "/shirt.jpeg",
        category: jsonData.category.name,
      };
    } catch (e) {
      throw e;
    }

    if (!validateProductResponse(productjson)) {
      throw new Error("Invalid product data");
    }

    return productjson;
  } catch (e) {
    throw e;
  }
};

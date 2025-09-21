const BASE_URL = "https://api.escuelajs.co/api/v1/";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type ProductCategoryAPIResponse = Category;

type ProductAPIResponse = Product;

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function isValidDateString(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString() === dateString;
}

function validateProductCategory(
  data: unknown
): data is ProductCategoryAPIResponse {
  if (typeof data !== "object" && data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    isNumber(obj.id) &&
    isString(obj.name) &&
    isString(obj.slug) &&
    isString(obj.image) &&
    isString(obj.creationAt) &&
    isString(obj.updatedAt) &&
    isValidDateString(obj.creationAt) &&
    isValidDateString(obj.updatedAt)
  );
}

function validateProduct(data: unknown): boolean {
  if (data !== "object" && data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    isNumber(obj.id) &&
    isString(obj.title) &&
    isString(obj.slug) &&
    isNumber(obj.price) &&
    isString(obj.description) &&
    isStringArray(obj.images) &&
    isString(obj.creationAt) &&
    isString(obj.updatedAt) &&
    isValidDateString(obj.creationAt) &&
    isValidDateString(obj.updatedAt) &&
    validateProductCategory(obj.category)
  );
}

function validateProductResponse(data: unknown): data is ProductAPIResponse[] {
  return Array.isArray(data) && data.every(validateProduct);
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
      throw new Error("Corrupted JSON");
    }

    if (!validateProductResponse(jsonData)) {
      throw new Error("Invalid data");
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

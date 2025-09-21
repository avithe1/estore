const BASE_URL = "https://api.escuelajs.co/api/v1/";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
};

type ProductCategoryAPIResponse = Omit<Category, "creationAt" | "updatedAt"> & {
  creationAt: string;
  updatedAt: string;
};

type ProductAPIResponse = Omit<
  Product,
  "category" | "creationAt" | "updatedAt"
> & {
  creationAt: string;
  updatedAt: string;
} & {
  category: Omit<Category, "creationAt" | "updatedAt"> & {
    creationAt: string;
    updatedAt: string;
  };
};

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function isValidDate(dateString: string): boolean {
  return !isNaN(Date.parse(dateString));
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
    isValidDate(obj.creationAt) &&
    isValidDate(obj.updatedAt)
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
    isValidDate(obj.creationAt) &&
    isValidDate(obj.updatedAt) &&
    validateProductCategory(obj.category)
  );
}

function validateProductResponse(data: unknown): data is ProductAPIResponse[] {
  return Array.isArray(data) && data.every(validateProduct);
}

function transformProduct(apiProduct: ProductAPIResponse): Product {
  return {
    ...apiProduct,
    creationAt: new Date(apiProduct.creationAt),
    updatedAt: new Date(apiProduct.updatedAt),
    category: {
      ...apiProduct.category,
      creationAt: new Date(apiProduct.category.creationAt),
      updatedAt: new Date(apiProduct.category.updatedAt),
    },
  };
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

    return jsonData.map(transformProduct);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Unknown error");
    }
  }
};

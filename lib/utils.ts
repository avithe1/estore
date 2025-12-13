export const createQueryString = (
  search: string = "",
  sort: string = ""
): string => {
  if (!isString(search) && !isString(sort)) return "";
  let s1 = "?";
  s1 += `${search.length ? "search=" + search : ""}${
    search.length && sort.length ? "&" : ""
  }`;
  s1 += `${sort.length ? "sort=" + sort : ""}`;
  return s1;
};

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

export function isValidDateString(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString() === dateString;
}

export const safeURLS = [
  "https://i.imgur.com",
  "https://m.media-amazon.com",
  "https://placeimg.com",
];

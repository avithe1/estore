export const createQueryString = (
  search: string = "",
  sort: string = ""
): string => {
  if (!isString(search) && !isString(sort)) return "";

  let s = "?";
  if (search.length) {
    s += `search=${search}&`;
  }
  if (sort) {
    s += `sort=${sort}`;
  }
  return s;
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

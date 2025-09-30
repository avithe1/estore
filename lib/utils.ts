export const createQueryString = (
  search: string = "",
  sort: string = ""
): string => {
  let s = "?";
  if (search.length) {
    s += `search=${search}&`;
  }
  if (sort) {
    s += `sort=${sort}`;
  }
  return s;
};

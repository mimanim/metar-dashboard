export const buildQueryString = (terms: [string, string | number][]) => {
  if (!terms.length) {
    return "";
  }
  const [firstKey, firstValue] = terms.shift() as [string, string | number];

  return terms.reduce(
    (queryString, [key, value]) => `${queryString}&${key}=${value}`,
    `?${firstKey}=${firstValue}`
  );
};

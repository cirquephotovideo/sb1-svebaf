export const SP_API_ENDPOINTS = {
  EU: 'https://sellingpartnerapi-eu.amazon.com',
  NA: 'https://sellingpartnerapi-na.amazon.com',
  FE: 'https://sellingpartnerapi-fe.amazon.com',
  OCE: 'https://sellingpartnerapi-fe.amazon.com',
} as const;

export const getSpApiEndpoint = (region: keyof typeof SP_API_ENDPOINTS): string => {
  return SP_API_ENDPOINTS[region] || SP_API_ENDPOINTS.EU;
};
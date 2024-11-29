import { testConnection } from './connection';
import { getCredentials, saveCredentials } from './credentials';
import { fetchProductsFromApi } from './api';
import { getSpApiEndpoint } from './endpoints';
import { mockProductData } from './mock-data';

export {
  testConnection as testAmazonConnection,
  getCredentials as getAmazonCredentials,
  saveCredentials as saveAmazonCredentials,
  fetchProductsFromApi as fetchAmazonProducts,
  getSpApiEndpoint,
  mockProductData,
};
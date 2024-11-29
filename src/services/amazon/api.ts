import type { AmazonCredentials, AmazonProductResponse } from '../../types/amazon';
import { mockProductData } from './mock-data';

export const fetchProductsFromApi = async (
  eanCodes: string[],
  credentials: AmazonCredentials
): Promise<Record<string, AmazonProductResponse>> => {
  try {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create a plain object to store results
    const results: Record<string, AmazonProductResponse> = {};

    // Process each EAN code
    for (const ean of eanCodes) {
      // Get mock data based on EAN
      results[ean] = mockProductData(ean);
    }

    return results;
  } catch (error) {
    console.error('Error fetching Amazon products:', error);
    throw new Error('Failed to fetch product data from Amazon');
  }
};
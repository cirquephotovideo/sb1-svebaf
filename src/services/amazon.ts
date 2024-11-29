import type { AmazonCredentials, AmazonProductResponse, ConnectionTestResult } from '../types/amazon';
import { getSpApiEndpoint } from './amazon/endpoints';
import { mockProductData } from './amazon/mock-data';
import { supabase } from '../lib/supabase';

export const testAmazonConnection = async (
  credentials: AmazonCredentials
): Promise<ConnectionTestResult> => {
  try {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Successfully connected to Amazon Seller API',
      timestamp: new Date().toISOString(),
      marketplace: 'Amazon France',
      rateLimit: {
        remaining: 95,
        total: 100,
        resetTime: new Date(Date.now() + 3600000).toISOString(),
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to connect to Amazon Seller API',
      timestamp: new Date().toISOString(),
    };
  }
};

export const fetchAmazonProducts = async (
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

export const getAmazonCredentials = async (): Promise<AmazonCredentials | null> => {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('amazon_credentials')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No credentials found
        return null;
      }
      throw error;
    }

    return {
      accessKey: data.access_key,
      secretKey: data.secret_key,
      region: data.region,
      marketplaceId: data.marketplace_id,
      merchantId: data.merchant_id,
    };
  } catch (error) {
    console.error('Error getting credentials:', error);
    return null;
  }
};

export const saveAmazonCredentials = async (credentials: AmazonCredentials): Promise<void> => {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error('User not authenticated');
    }

    const { error } = await supabase
      .from('amazon_credentials')
      .upsert({
        user_id: user.id,
        access_key: credentials.accessKey,
        secret_key: credentials.secretKey,
        region: credentials.region,
        marketplace_id: credentials.marketplaceId,
        merchant_id: credentials.merchantId,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error saving credentials:', error);
    throw new Error('Failed to save credentials');
  }
};
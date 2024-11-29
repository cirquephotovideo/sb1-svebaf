import { supabase } from '../../lib/supabase';
import type { AmazonCredentials } from '../../types/amazon';

export const saveCredentials = async (credentials: AmazonCredentials): Promise<void> => {
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

export const getCredentials = async (): Promise<AmazonCredentials | null> => {
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
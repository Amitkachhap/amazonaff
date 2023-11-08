// src/api.ts
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOO_API_URL || '',
  consumerKey: process.env.NEXT_PUBLIC_WOO_API_KEY || '',
  consumerSecret: process.env.NEXT_PUBLIC_WOO_API_SECRET || '',
  version: 'wc/v3',
});

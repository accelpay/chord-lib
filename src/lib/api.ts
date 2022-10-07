import qs from 'qs';
import { LineItem } from '../types';

const API_URL = 'https://stage.accelpay.io/v1';

export const client = {
  getAvailability: async (zip: string, lineItems: LineItem[]) => {
    return await fetch(
      `${API_URL}/variants/available-to/${zip}?${qs.stringify({
        ids: lineItems.map((li: any) => li.variantId),
      })}`,
    );
  },

  getShippingOptions: async (params: any) => {
    return await fetch(`${API_URL}/shipping-options?${qs.stringify(params)}`);
  },
};

import qs from 'qs';
import { LineItem } from '../types';

const STAGE_API_URL = 'https://stage.accelpay.io/v1';
const PRODUCTION_API_URL = 'https://api.accelpay.io/v1';

export const useAPI = ({ env }: { env: 'production' | 'stage' }) => {
  const API_URL = env === 'production' ? PRODUCTION_API_URL : STAGE_API_URL;

  return {
    client: {
      getAvailability: async (zip: string, lineItems: LineItem[]) => {
        return await fetch(
          `${API_URL}/variants/available-to/${zip}?${qs.stringify({
            ids: lineItems.map((li: any) => li.variantId),
          })}`,
        );
      },

      getShippingOptions: async (params: any) => {
        return await fetch(
          `${API_URL}/shipping-options?${qs.stringify(params)}`,
        );
      },
    },
  };
};

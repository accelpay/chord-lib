import React, { useEffect, useState } from 'react';
import { client } from '../lib/api';
import { LineItem } from '../types';

const useAccelpay = ({
  zip: initialZip,
  lineItems: initialLineItems,
}: {
  zip: string;
  lineItems: LineItem[];
}) => {
  const [unavailableVariantIds, setUnavailableVariantIds] = useState<number[]>(
    [],
  );
  const [zip, setZip] = useState<string>(initialZip);
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);

  useEffect(() => {
    (async () => {
      console.log('lineItems', lineItems);
      if (zip && lineItems?.length) {
        const res = await client.getAvailability(zip, lineItems);
        if (res.ok) {
          const availability = await res.json();
          setUnavailableVariantIds(
            Object.keys(availability)
              .filter(variantId => availability[variantId] !== 'available')
              .map(id => parseInt(id, 10)),
          );
        }
      }
    })();
  }, [zip, lineItems]);

  return { unavailableVariantIds, setZip, setLineItems };
};

export default useAccelpay;

import React, { useEffect, useState } from 'react';
import { useAPI } from '../lib/api';
import { LineItem } from '../types';

const useAccelpay = ({
  zip: initialZip,
  lineItems: initialLineItems,
  options = {},
}: {
  zip: string;
  lineItems: LineItem[];
  options: { stage?: boolean };
}) => {
  const [unavailableVariantIds, setUnavailableVariantIds] = useState<number[]>(
    [],
  );
  const [zip, setZip] = useState<string>(initialZip);
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);
  const [submitted, setSubmitted] = useState(false);
  const { client } = useAPI({ env: options.stage ? 'stage' : 'production' });

  useEffect(() => {
    (async () => {
      if (zip && lineItems?.length) {
        const res = await client.getAvailability(zip, lineItems);
        if (res.ok) {
          const availability = await res.json();
          setUnavailableVariantIds(
            Object.keys(availability)
              .filter(variantId => availability[variantId] !== 'available')
              .map(id => parseInt(id, 10)),
          );
          setSubmitted(true);
        }
      }
    })();
  }, [zip, lineItems]);

  return { unavailableVariantIds, submitted, submitZip: setZip, setLineItems };
};

export default useAccelpay;

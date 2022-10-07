# Chord Lib

![Checkout Page](https://res.cloudinary.com/accelpay/image/upload/v1665171545/public/Screen_Shot_2022-10-07_at_3.37.01_PM_vwq98c.png)

#### Features

- Zip code widget
- Surface product availability in the Accelpay Network based on:
  - Product Inventory
  - Destination Zip Code
  - Retailer availability

#### Install

```
npm install @accelpay/chord-lib
```

#### Quickstart

```
import { useAccelpay, ZipCodeInput } from '@accelpay/chord-lib';

const {
    unavailableVariantIds,
    submitted,
    submitZip,
} = useAccelpay({ lineItems: [{ variantId: 123, quantity: 2 }] });

<div className="checkout">
    <div className="column-left">
        {/** LineItem */}
        {unavailableVariantIds.includes(lineItem.variant_properties.accelpay_variant_id) && (
            <p className="error">Item unavailable for your area</p>
        )}
    </div>
    <div className="column-right">
        {/** Subtotals Section */}
        <ZipCodeInput submitZip={submitZip} />
        <button disabled={submitted && unavailableVariantIds.length} onClick={() => handleSubmit()}>
            Checkout
        </buttom>
    </div>
</div>
```

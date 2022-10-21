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
} = useAccelpay({ lineItems: [{ variantId: 123, quantity: 2 }], options: { stage: true } });

<div className="checkout">
    <div className="column-left">
        {/** LineItem */}
        {unavailableVariantIds.includes(lineItem.metadata.accelpay_variant_id) && (
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

#### useAccelpay

##### Options

The following can be passed to `useAccelpay(options)`

- `lineItems: Array<LineItem>`
  - Required
  - Line Items to get availability for
- `zip: String`
  - Required
  - Zip code string used to determine availability
- `options: { stage: Boolean }`
  - Optional
  - Stage set to true will use the stage API env.
  - Defaults to the production API

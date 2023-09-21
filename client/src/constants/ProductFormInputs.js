export const productTitleInput = {
  label: 'product-name',
  attributes: {
    type: 'text',
    id: 'product-name',
    'aria-label': 'Product Name',
    required: true
  }
};

export const productPriceInput = {
  label: 'product-price',
  attributes: {
    type: 'number',
    id: 'product-price',
    'aria-label': 'Product Price',
    min: "0",
    step: "0.01",
    required: true
  }
};

export const productQuantityInput = {
  label: 'product-quantity',
  attributes: {
    type: 'number',
    id: 'product-quantitiy',
    'aria-label': 'Product Quantity',
    min: "0",
    required: true
  }
};
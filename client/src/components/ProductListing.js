import ProductList from './ProductList';

const ProductListing = ({productData, onDeleteProduct, onUpdateProducts}) => {
  return (
    <div className='product-listing'>
      <h2>Products</h2>
      <ProductList productData={productData} onDeleteProduct={onDeleteProduct} onUpdateProducts={onUpdateProducts} />
    </div>
  );
};

export default ProductListing;
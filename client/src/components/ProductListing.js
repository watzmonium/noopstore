import ProductList from "./ProductList";

const ProductListing = ({
  productData,
  onDeleteProduct,
  onUpdateProducts,
  onAddProductToCart,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ProductList
        productData={productData}
        onDeleteProduct={onDeleteProduct}
        onUpdateProducts={onUpdateProducts}
        onAddProductToCart={onAddProductToCart}
      />
    </div>
  );
};

export default ProductListing;

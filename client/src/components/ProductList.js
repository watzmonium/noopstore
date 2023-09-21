import Product from "./Product";

const ProductList = ({ productData, onDeleteProduct, onUpdateProducts }) => {

  return (
    <ul className="product-list">
      {productData.length > 0 &&
        productData.map((product) => {
          return (
            <Product
              key={product._id}
              productData={product}
              onDeleteProduct={onDeleteProduct}
              onUpdateProducts={onUpdateProducts}
            />
          );
        })}
    </ul>
  );
};

export default ProductList;

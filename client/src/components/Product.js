import { useState } from "react";
import ProductActions from "./ProductActions";
import EditProduct from "./EditProduct";

const Product = ({ productData, onDeleteProduct, onUpdateProducts }) => {
  const { _id, title, price, quantity } = productData;
  const [showEdit, setShowEdit] = useState(false);

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    try {
      await onDeleteProduct(_id, title)
    } catch(error) {
      console.log(error.message);
    }
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <ProductActions onClickEdit={handleClickEdit} />
        <button className="delete-button" onClick={handleDeleteProduct}>
          <span>X</span>
        </button>
      </div>
      {showEdit && (
        <EditProduct
          productData={productData}
          onClickCancel={handleClickEdit}
          onFormSubmit={onUpdateProducts}
        />
      )}
    </li>
  );
};

export default Product;

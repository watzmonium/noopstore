import { useState } from "react";
import {
  productTitleInput,
  productPriceInput,
  productQuantityInput,
} from "../constants/ProductFormInputs";

import InputGroup from "./InputGroup";

const ProductForm = ({ onFormSubmit, onClickCancel, productData = {} }) => {

  const [productTitle, setProductTitle] = useState(() =>
    productData.title ? productData.title : ""
  );
  const [productPrice, setProductPrice] = useState(() =>
    productData.price ? productData.price : ""
  );
  const [productQuantity, setProductQuantity] = useState(() =>
    productData.quantity ? productData.quantity : ""
  );

  const resetForm = () => {
    setProductTitle("");
    setProductPrice("");
    setProductQuantity("");
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      await onFormSubmit(productTitle, productPrice, productQuantity, productData.id);
      resetForm();
      onClickCancel();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <InputGroup
        inputAttributes={productTitleInput}
        value={productTitle}
        setValue={setProductTitle}
      />
      <InputGroup
        inputAttributes={productPriceInput}
        value={productPrice}
        setValue={setProductPrice}
      />
      <InputGroup
        inputAttributes={productQuantityInput}
        value={productQuantity}
        setValue={setProductQuantity}
      />
      <div className="actions form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onClickCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

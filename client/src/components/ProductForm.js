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
  productTitleInput.attributes.value = productTitle;
  productPriceInput.attributes.value = productPrice;
  productQuantityInput.attributes.value = productQuantity;

  const handleInputChange = (event, setValue) => {
    event.preventDefault();
    setValue(event.target.value);
  };

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
        onInputChange={(e) => handleInputChange(e, setProductTitle)}
      />
      <InputGroup
        inputAttributes={productPriceInput}
        onInputChange={(e) => handleInputChange(e, setProductPrice)}
      />
      <InputGroup
        inputAttributes={productQuantityInput}
        onInputChange={(e) => handleInputChange(e, setProductQuantity)}
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

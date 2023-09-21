import { useState } from "react";
import ProductForm from "./ProductForm";

const AddProduct = ({ onFormSubmit }) => {
  const [formClass, setFormClass] = useState("add-form");

  const handleClickAddProduct = () => {
    const newClass = formClass === "add-form" ? "add-form visible" : "add-form";
    setFormClass(newClass);
  };

  return (
    <div className={formClass}>
      <p>
        <button className="add-product-button" onClick={handleClickAddProduct}>
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <ProductForm
        onFormSubmit={onFormSubmit}
        onClickCancel={handleClickAddProduct}
      />
    </div>
  );
};

export default AddProduct;

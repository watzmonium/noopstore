import ProductForm from "./ProductForm";

const EditProduct = ({productData, onClickCancel, onFormSubmit}) => {
  const {_id, title, price, quantity} = productData;

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <ProductForm
        onFormSubmit={onFormSubmit}
        onClickCancel={onClickCancel}
        productData={{title, price, quantity, id: _id}}
      />
    </div>
  )
}

export default EditProduct;
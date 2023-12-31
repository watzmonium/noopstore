const ProductActions = ({ onClickEdit, onAddProductToCart, productId, disabled }) => {
  return (
    <div className="actions product-actions">
      <button
        className="add-to-cart"
        onClick={() => onAddProductToCart(productId)}
        disabled={disabled}
      >
        Add to cart
      </button>
      <button className="edit" onClick={onClickEdit}>
        Edit
      </button>
    </div>
  );
};

export default ProductActions;

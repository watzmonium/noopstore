const ProductActions = ({onClickEdit}) => {
  return (
    <div className='actions product-actions'>
      <button className='add-to-cart'>Add to cart</button>
      <button className='edit' onClick={onClickEdit}>Edit</button>
    </div>
  );
};

export default ProductActions;
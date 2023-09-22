
const CartProduct = ({productData}) => {
  return (
    <tr>
      <td>{productData.title}</td>
      <td>{productData.quantity}</td>
      <td>{productData.price * productData.quantity}</td>
    </tr>
  );
};

export default CartProduct;
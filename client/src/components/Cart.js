import CartProduct from "./CartProduct";

const Cart = ({cart, cartTotal, onCheckout}) => {
  const cartEmpty = cart.length === 0;

  if (cartEmpty) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>Checkout</button>
      </div>
    )
  }

  return (
    <div className="cart">
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => {
              return <CartProduct key={product._id} productData={product} />
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">Total: ${cartTotal}</td>
            </tr>
          </tfoot>
        </table>
        <div className="checkout-button">
          <button className="checkout" onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  )
};

export default Cart;
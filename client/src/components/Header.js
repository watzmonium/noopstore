import Cart from "./Cart";

const Header = ({cart, cartTotal, onCheckout}) => {
  return (
    <header>
    <h1>NoopStore</h1>
    <Cart cart={cart} cartTotal={cartTotal} onCheckout={onCheckout} />
  </header>
  );
};

export default Header;
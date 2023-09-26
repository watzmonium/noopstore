import Cart from "./Cart";

const Header = ({ cart, onCheckout }) => {
  return (
    <header>
      <h1>NoopStore</h1>
      <Cart cart={cart} onCheckout={onCheckout} />
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import {
  fetchAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./services/products";
import { fetchCart, addToCart, checkout } from "./services/cart";

import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import ProductListing from "./components/ProductListing";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchAllProductsFromService();
  }, []);

  useEffect(() => {
    fetchCartFromService();
  }, []);

  const fetchAllProductsFromService = async () => {
    try {
      const response = await fetchAllProducts();
      setProductData(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchCartFromService = async () => {
    try {
      const response = await fetchCart();
      setCart(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAddNewProduct = async (title, price, quantity) => {
    // if (title === "" || price === "" || quantity === "") {
    //   alert("missing fields");
    //   return;
    // }
    const product = { title, price, quantity };
    try {
      const response = await addProduct(product);
      setProductData(productData.concat(response));
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDeleteProduct = async (id, title) => {
    if (!confirm(`Do you want to delete ${title}?`)) {
      return;
    }
    try {
      await deleteProduct(id, title);
      await fetchAllProductsFromService();
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleUpdateProducts = async (title, price, quantity, id) => {
    try {
      const product = { title, price, quantity };
      await updateProduct(product, id);
      await fetchAllProductsFromService();
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAddProductToCart = async (id) => {
    try {
      const response = await addToCart(id);
      const { _, item } = response;
      updateCart(item);
      fetchAllProductsFromService();
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (e) {
      console.log(e.message);
    }
  };

  const updateCart = (newItem) => {
    if (cart.length === 0) {
      setCart(cart.concat(newItem));
      return;
    }
    setCart(cart.filter((item) => item._id !== newItem._id).concat(newItem));
  };

  return (
    <main>
      <Header cart={cart} onCheckout={handleCheckout} />
      <ProductListing
        productData={productData}
        onDeleteProduct={handleDeleteProduct}
        onUpdateProducts={handleUpdateProducts}
        onAddProductToCart={handleAddProductToCart}
      />
      <AddProduct onFormSubmit={handleAddNewProduct} />
    </main>
  );
};

export default App;

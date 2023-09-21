import { useState, useEffect } from 'react';
import { fetchAllProducts, addProduct, updateProduct, deleteProduct } from './services/products';

import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ProductListing from './components/ProductListing';
import AddProduct from './components/AddProduct';

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchAllProductsFromService();
  }, []);

  const fetchAllProductsFromService = async () => {
    try { 
      const response = await fetchAllProducts();
      setProductData(response);
    } catch(e) {
      console.log(e.message);
    }
  }

  const handleAddNewProduct = async (title, price, quantity) => {
    if (title === '' || price === '' || quantity === '') {
      alert('missing fields');
      return
    }
    const product = {title, price, quantity};
    try {
      const response = await addProduct(product);
      setProductData(productData.concat(response));
    } catch (e) {
      console.log(e.message)
    }
  };

  const handleDeleteProduct = async (id, title) => {
    if (!confirm(`Do you want to delete ${title}?`)) {
      return;
    }
    try {
      await deleteProduct(id, title)
      await fetchAllProductsFromService();
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleUpdateProducts = async (title, price, quantity, id) => {
    try {
      const product = {title, price, quantity};
      await updateProduct(product, id);
      await fetchAllProductsFromService();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main>
      <Header />
      <ProductListing productData={productData} onDeleteProduct={handleDeleteProduct} onUpdateProducts={handleUpdateProducts}/>
      <AddProduct onFormSubmit={handleAddNewProduct} />
    </main>
  );
};

export default App;

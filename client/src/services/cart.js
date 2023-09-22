import axios from 'axios';

export const fetchCart = async () => {
  try {
    const response = await axios.get('/api/cart');
    return response.data;
  } catch (e) {
    console.log(e.message)
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post('/api/add-to-cart', {productId});
    return response.data;
  } catch(e) {
    console.log(e.message);
  }
};

export const checkout = async() => {
  try {
    const response = axios.post('/api/checkout');
    return response.data;
  } catch(e) {
    console.log(e.message)
  }
}
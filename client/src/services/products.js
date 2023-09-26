import axios from "axios";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post("/api/products", productData);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const updateProduct = async (productData, id) => {
  try {
    await axios.put(`api/products/${id}`, { ...productData, _id: id });
    const response = await axios.get(`/api/products/${id}`, productData);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/api/products/${id}`);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

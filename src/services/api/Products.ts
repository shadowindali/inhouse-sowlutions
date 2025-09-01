import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

// fetching products from the api and returning them
export const fetchProducts = async () => {
  try {
    const data = await axios.get(URL);
    return data.data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};

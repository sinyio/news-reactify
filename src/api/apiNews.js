import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}avaliable/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

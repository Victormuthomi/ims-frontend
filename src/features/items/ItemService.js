import axios from "axios";

const API_URL = "https://ims-r6pm.onrender.com/api/items";

// Create new item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Token is needed here
    },
  };
  const response = await axios.post(API_URL, itemData, config);
  return response.data;
};

// Get items (no authentication required)
const getItems = async () => {
  const response = await axios.get(API_URL); // No token required
  return response.data;
};

// Edit item
const editItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${API_URL}/${itemData._id}`,
    itemData,
    config
  );
  return response.data;
};

// Delete item
const deleteItem = async (itemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${itemId}`, config);
  return response.data;
};

const itemService = {
  createItem,
  getItems,
  editItem,
  deleteItem,
};

export default itemService;

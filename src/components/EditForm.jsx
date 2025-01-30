import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editItem, getItems } from "../features/items/itemSlice"; // Ensure both actions are correctly imported
import { FaSave, FaArrowLeft } from "react-icons/fa"; // Import icons for Save and Back buttons

const EditItemForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve item ID from URL
  const dispatch = useDispatch();

  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  // Fetch the items if they are not loaded yet
  useEffect(() => {
    if (items.length === 0) {
      dispatch(getItems());
    }
  }, [dispatch, items.length]);

  // Find the item to edit based on the ID from URL
  const itemToEdit = items.find((item) => item._id === id);

  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    unitPrice: 0,
    quantity: 0,
    SKU: "",
  });

  useEffect(() => {
    if (itemToEdit) {
      // Populate form with item data when item is found
      setItemData({
        name: itemToEdit.name,
        description: itemToEdit.description,
        unitPrice: itemToEdit.unitPrice,
        quantity: itemToEdit.quantity,
        SKU: itemToEdit.SKU,
      });
    } else if (isError) {
      // If error occurs, navigate to a safe page (e.g., dashboard or error page)
      navigate("/dashboard");
    }
  }, [itemToEdit, isError, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editItem({ _id: id, ...itemData })).then(() => {
      navigate("/"); // Redirect after editing
    });
  };

  // Display loading or error state if items are not yet loaded
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={itemData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="unitPrice" className="block text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            value={itemData.unitPrice}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={itemData.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="SKU" className="block text-gray-700">
            SKU
          </label>
          <input
            type="text"
            id="SKU"
            name="SKU"
            value={itemData.SKU}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center space-x-2"
          >
            <FaSave /> <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItemForm;

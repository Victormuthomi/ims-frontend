import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../features/items/itemSlice";
import { useNavigate } from "react-router-dom";

function ItemForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [SKU, setSKU] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); // To navigate after submitting the form

  // Get item creation status from Redux
  const { isSuccess, isError, message } = useSelector((state) => state.items);

  const onSubmit = (e) => {
    e.preventDefault();

    // Dispatch the action to create the item
    dispatch(createItem({ name, quantity, unitPrice, SKU, description }));

    // Clear form fields after submission
    setName("");
    setQuantity(0);
    setUnitPrice(0);
    setSKU("");
    setDescription("");
  };

  return (
    <section className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add Item</h2>
      <form onSubmit={onSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
            required
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        {/* Unit Price Field */}
        <div className="mb-4">
          <label
            htmlFor="unitPrice"
            className="block text-gray-700 font-medium mb-2"
          >
            Unit Price
          </label>
          <input
            type="number"
            id="unitPrice"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter unit price"
          />
        </div>

        {/* SKU Field */}
        <div className="mb-4">
          <label htmlFor="SKU" className="block text-gray-700 font-medium mb-2">
            SKU
          </label>
          <input
            type="text"
            id="SKU"
            value={SKU}
            onChange={(e) => setSKU(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter SKU"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ItemForm;

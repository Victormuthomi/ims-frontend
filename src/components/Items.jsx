import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../features/items/itemSlice"; // Keep deleteItem
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { getItems } from "../features/items/itemSlice";

import { FaEdit, FaTrashAlt, FaArrowDown, FaArrowUp } from "react-icons/fa"; // Example icons

function Item() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const { items } = useSelector((state) => state.items);
  console.log(getItems);

  useEffect(() => {
    dispatch(getItems()); // Fetch items when the component loads
  }, [dispatch]);

  const [showMore, setShowMore] = useState(false);

  const handleEdit = (itemId) => {
    navigate(`/edit-item/${itemId}`); // Redirect to the edit form with the item's id
  };

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle between showing more or less items
  };

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 max-w-7xl w-full mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Items</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No items to display</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Display only the first 4 items or more if "Show More" is clicked */}
          {items.slice(0, showMore ? items.length : 2).map((item) => (
            <div
              key={item._id}
              className="border bg-white rounded-lg shadow-lg p-4"
            >
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-600">
                Description: {item.description}
              </div>
              <div className="text-gray-600">SKU: {item.SKU}</div>
              <div className="text-gray-600">Price: ${item.unitPrice}</div>
              <div className="text-gray-600">Quantity: {item.quantity}</div>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => handleEdit(item._id)} // Use the navigate function for edit
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button
                  onClick={() => dispatch(deleteItem(item._id))}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center"
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}

          {/* Show More / Show Less button */}
          {items.length > 4 && (
            <button
              onClick={handleShowMore}
              className="text-blue -500 font-semibold py-2 px-4 rounded flex items-center"
            >
              {showMore ? (
                <>
                  <FaArrowUp className="mr-2" /> Show Less
                </>
              ) : (
                <>
                  <FaArrowDown className="mr-2" /> Show More
                </>
              )}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Item;

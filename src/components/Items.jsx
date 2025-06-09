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
    <section className="h-screen bg-gray-700 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-8">Items</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No items to display</p>
      ) : (
        <div className="grid grid-cols-4 justify-start items-start bg-transparent h-[770px] w-[1700px] ml-20 pl-8 gap-8">
          {/* Display only the first 4 items or more if "Show More" is clicked */}
          {items.slice(0, showMore ? items.length : 8).map((item) => (
            <div
              key={item._id}
              className="w-[350px] h-[300px] bg-slate-400 border rounded-lg"
            >
              <div className="pl-4 pt-4">
                <div className="font-semibold text-center text-white text-lg">
                  {item.name}
                </div>
                <div className="flex items-center space-x-2">
                  <h1>Category:</h1>
                  <p className="text-white">{item.category}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <h1>SKU:</h1>
                  <p className="text-white">{item.SKU}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <h1>Quantity:</h1>
                  <p className="text-white">{item.quantity}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <h1>Unit Price:</h1>
                  <p className="text-white">{item.unitPrice}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <h1>Description:</h1>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>

              <div className=" flex items-center justify-center space-x-3 mt-4">
                <button
                  onClick={() => handleEdit(item._id)} // Use the navigate function for edit
                  className="relative w-24 h-10 text-center text-base text-indigo-700 font-bold bg-green-400 hover:bg-green-200 transition-all duration-300 rounded-full"
                >
                  <FaEdit className="absolute ml-2" /> Edit
                </button>
                <button
                  onClick={() => dispatch(deleteItem(item._id))}
                  className="relative w-28 h-10 text-base text-center text-indigo-700 font-bold bg-green-400 hover:bg-green-200 transition-all duration-300 rounded-full"
                >
                  <FaTrashAlt className="absolute ml-2" /> Delete
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

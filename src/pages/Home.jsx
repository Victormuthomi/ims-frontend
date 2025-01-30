import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "./ItemForm";
import { ImSpinner9 } from "react-icons/im";
import { getItems, reset } from "../features/items/itemSlice";
import { logout as logoutAction } from "../features/auth/authSlice";
import Items from "../components/Items.jsx";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import Dashboard from "../components/Dashboard.jsx";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.items);

  // Logout handler
  const handleLogout = () => {
    dispatch(logoutAction()); // Dispatch logout action
    navigate("/login"); // Redirect to login page after logout
  };

  useEffect(() => {
    if (isError) {
      console.log("Error:", message);
    }

    if (!user) {
      navigate("/"); // Redirect to homepage if not logged in
    } else {
      dispatch(getItems()); // Fetch items if user is logged in
    }

    return () => {
      dispatch(reset()); // Reset items state on component unmount
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center animate-spin ">
        <ImSpinner9 className="  text-blue-500 text-8xl mt-16" />
      </div>
    );
  }

  return (
    <>
      {user ? (
        <>
          <Dashboard />
        </>
      ) : (
        <Hero />
      )}
    </>
  );
}
export default Home;

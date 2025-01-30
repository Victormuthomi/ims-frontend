import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { register, reset } from "../features/auth/authSlice.js";
import Spinner from "../components/Spinner.jsx";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaSpinner } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");

      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Added missing parentheses

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData)); // Corrected dispatch to use register
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center animate-spin ">
        <ImSpinner9 className="  text-blue-500 text-8xl mt-16" />
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-100 min-h-screen bg-gradient-to-t from-[#FF007a] to-[#4b0082] flex justify-center items-center">
        <div className="bg-transparent h-[700px] w-[1200px] p-8 rounded-lg  max-w-md">
          <div className="flex justify-center items-center">
            <FaUser className="mr-2 text-8xl text-slate-50 mb-4" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-50 mb-6">
            Register and join us!
          </h1>

          <form onSubmit={onSubmit}>
            <div className="relative mb-4">
              <div className="absolute mt-4 text-white ml-2 text-3xl">
                <FaUserEdit />
              </div>

              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Full Name"
                onChange={onChange}
                className="w-full bg-transparent px-14 py-2 mt-2 border-b-4 rounded-md text-white placeholder:text-white text-2xl focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="relative mb-4">
              <div className="absolute mt-4 text-white ml-2 text-3xl">
                <MdOutlineMailOutline />
              </div>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
                className="w-full bg-transparent px-14 py-2 mt-2 border-b-4 rounded-md text-white placeholder:text-white text-2xl focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="relative mb-4">
              <div className="absolute mt-4 text-white ml-2 text-3xl">
                <TbPasswordUser />
              </div>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className="w-full bg-transparent px-14 py-2 mt-2 border-b-4 rounded-md text-white placeholder:text-white text-2xl focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="relative mb-6">
              <div className="absolute mt-4 text-white ml-2 text-3xl">
                <TbPasswordUser />
              </div>

              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm  password"
                onChange={onChange}
                className="w-full bg-transparent px-14 py-2 mt-2 border-b-4 rounded-md text-white placeholder:text-white text-2xl focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-2xl w-32 text- font-bold bg-green-400 hover:bg-transparent hover:text-white transition-all duration-300 rounded-full"
              >
                Register
              </button>
            </div>
            <div className="flex justify-center items-center mt-6 mb-6 gap-4">
              <p className="text-white italic">Already have an account</p>
              <Link
                to="/login"
                className={`text-white italic underline hover:text-yellow-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <div className="flex justify-center items-center text-2xl text-slate-50 mb-4 animate-spin">
                    <FaSpinner />
                  </div>
                ) : (
                  "Login"
                )}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;

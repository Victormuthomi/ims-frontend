import { useState, useEffect } from "react";
import { FaLinkedinIn, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice"; // Import the login action
import { useNavigate } from "react-router-dom"; // For redirecting
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaSpinner } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate for redirect
  const [showPassword, setShowPassword] = useState(false);

  // Redux states
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth,
  );

  // Handle form input changes
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    dispatch(login(userCredentials)); // Dispatch login async thunk
  };

  // Redirect to dashboard or home page after successful login
  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect on successful login
    }
  }, [user, navigate]);

  return (
    <>
      <section className="bg-gray-100 min-h-screen  bg-gradient-to-t from-[#FF007a] to-[#4b0082] flex justify-center items-center">
        <div className="p-8 h-[600px] w-[1000px] bg-transparent  rounded-lg   max-w-md">
          <div className="flex justify-center items-center">
            <FaUser className="mr-2 text-8xl text-slate-50 mb-4" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-50 mb-6">
            Welcome Back!
          </h1>

          <form onSubmit={onSubmit}>
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-white  right-2 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {isLoading && (
              <div className="flex justify-center items-center text-2xl text-slate-50 mb-4 animate-spin">
                <FaSpinner />
              </div>
            )}

            {isError && (
              <div className="text-center text-white mb-4">{message}</div>
            )}

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-2xl w-32 text- font-bold bg-green-400 hover:bg-transparent hover:text-white transition-all duration-300 rounded-full"
                disabled={isLoading} // Disable button when loading
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center mt-6 mb-6 gap-4">
              <p className="text-white italic">Forgot your password?</p>
              <Link
                to="/reset-password"
                className={`text-white italic underline hover:text-yellow-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <div className="flex justify-center items-center text-2xl text-slate-50 mb-4 animate-spin">
                    <FaSpinner />
                  </div>
                ) : (
                  "Reset Password"
                )}
              </Link>
            </div>
            <div className="flex justify-center items-center mt-6 mb-6 gap-4">
              <p className="text-white italic">Don't have an account?</p>
              <Link
                to="/register"
                className={`text-white italic underline hover:text-yellow-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <div className="flex justify-center items-center text-2xl text-slate-50 mb-4 animate-spin">
                    <FaSpinner />
                  </div>
                ) : (
                  "Register"
                )}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

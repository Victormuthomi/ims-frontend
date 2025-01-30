import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Header from "./components/Header.jsx";
import ItemForm from "./pages/ItemForm.jsx";
import EditForm from "./components/EditForm.jsx";
import Items from "./components/Items.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items" element={<Items />} />

          <Route path="/register" element={<Register />} />
          <Route path="/add-item" element={<ItemForm />} />
          <Route path="/edit-item/:id" element={<EditForm />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

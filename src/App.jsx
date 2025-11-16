import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookAppointment from "./pages/BookAppointment";
import MyBookings from "./pages/MyBookings";
import MyOrders from "./pages/MyOrders";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";
import AdminLayout from "./pages/admin/AdminLayout";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AdminLogin from "./pages/admin/AdminLogin";
import AllProducts from "./pages/admin/AllProducts";
import AddProduct from "./pages/admin/AddProduct";
import AddService from "./pages/admin/AddService";
import Orders from "./pages/admin/Orders";
import Bookings from "./pages/admin/Bookings";
import AllServices from "./pages/admin/AllServices";
const App = () => {
  const { admin } = useContext(AppContext);
  const adminPath = useLocation().pathname.includes("admin");
  return (
    <div>
      <Toaster />
      {!adminPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* admin routes  */}
        <Route path="/admin" element={admin ? <AdminLayout /> : <AdminLogin />}>
          <Route index element={admin ? <AllProducts /> : <AdminLogin />} />

          <Route
            path="add-product"
            element={admin ? <AddProduct /> : <AdminLogin />}
          />
          <Route
            path="add-service"
            element={admin ? <AddService /> : <AdminLogin />}
          />
          <Route
            path="services"
            element={admin ? <AllServices /> : <AdminLogin />}
          />
          <Route path="orders" element={admin ? <Orders /> : <AdminLogin />} />
          <Route
            path="bookings"
            element={admin ? <Bookings /> : <AdminLogin />}
          />
        </Route>
      </Routes>
      {!adminPath && <Footer />}
    </div>
  );
};
export default App;

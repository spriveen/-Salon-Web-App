import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const { navigate, loading, setLoading, setAdmin } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData);
      toast.success("Login Successfully");
      setAdmin(true);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-primary  bg-clip-text text-transparent mb-2">
          Admin Login
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login into your account to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg  transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {loading ? "please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;

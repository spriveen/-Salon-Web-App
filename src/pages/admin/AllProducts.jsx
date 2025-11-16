import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "motion/react";
import { StarIcon } from "lucide-react";
const AllProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Absorptive Brush",
      rating: 4.8,
      price: "45",
      shortDesc: "High-quality brush designed for smooth application.",
      image: "/src/assets/product_1.png",
    },
    {
      id: 2,
      name: "Classic Razor",
      rating: 4.7,
      price: "60",
      shortDesc: "Precision stainless-steel razor for a clean shave.",
      image: "/src/assets/product_5.png",
    },
    {
      id: 3,
      name: "Hair Pomade",
      rating: 4.9,
      price: "55",
      shortDesc: "Premium pomade for all-day hold and shine.",
      image: "/src/assets/product_3.png",
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    toast.success("Product deleted successfully");
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">All Products</h1>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
            Add Product
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Desc
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <span className="font-semibold text-gray-800">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">
                          <StarIcon />
                        </span>
                        <span className="font-semibold text-gray-800">
                          {product.rating}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                      {product.shortDesc}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AllProducts;

import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "motion/react";
import { StarIcon } from "lucide-react";
import {
  FaCut,
  FaRegSmileBeam,
  FaSpa,
  FaTint,
  FaUserTie,
} from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
const AllServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: <FaCut />,
      name: "Hair Style",
      desc: "Trendy and tailored haircuts designed to match your look and personality.",
      price: "125",
    },
    {
      id: 2,
      icon: <GiRazor />,
      name: "Shaving Style",
      desc: "Smooth and precise shaves with expert detailing for a clean, fresh finish.",
      price: "75",
    },
    {
      id: 3,
      icon: <FaRegSmileBeam />,
      name: "Beard Trimming",
      desc: "Shape and define your beard with accuracy for a sharp, confident appearance.",
      price: "95",
    },
    {
      id: 4,
      icon: <FaUserTie />,
      name: "Men Facial",
      desc: "Rejuvenating facial treatment that cleanses, hydrates, and refreshes your skin.",
      price: "150",
    },
    {
      id: 5,
      icon: <FaTint />,
      name: "Hair Coloring",
      desc: "Vibrant and long-lasting color treatments using high-quality salon products.",
      price: "225",
    },
    {
      id: 6,
      icon: <FaSpa />,
      name: "Spa & Relax",
      desc: "Relaxing head and neck massage to release stress and restore energy.",
      price: "110",
    },
  ]);
  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
    toast.success("service deleted successfully");
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">All Services</h1>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 font-semibold">
            Add Service
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
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Price
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
                {services.map((service) => (
                  <motion.tr
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        /> */}
                        {service.icon}
                        <span className="font-semibold text-gray-800">
                          {service.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      ${service.price}
                    </td>

                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                      {service.desc}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(service.id)}
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
export default AllServices;

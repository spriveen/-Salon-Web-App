import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import {
  FaCut,
  FaRegSmileBeam,
  FaSpa,
  FaTint,
  FaUserTie,
} from "react-icons/fa";

import { assets } from "../assets/assets.js";
import { motion } from "motion/react";
import { GiRazor } from "react-icons/gi";
import ServiceCard from "../components/ServiceCard.jsx";
const Services = () => {
  const { navigate } = useContext(AppContext);
  const servicesData = [
    {
      icon: <FaCut />,
      name: "Hair Style",
      desc: "Trendy and tailored haircuts designed to match your look and personality.",
      price: "125",
    },
    {
      icon: <GiRazor />,
      name: "Shaving Style",
      desc: "Smooth and precise shaves with expert detailing for a clean, fresh finish.",
      price: "75",
    },
    {
      icon: <FaRegSmileBeam />,
      name: "Beard Trimming",
      desc: "Shape and define your beard with accuracy for a sharp, confident appearance.",
      price: "95",
    },
    {
      icon: <FaUserTie />,
      name: "Men Facial",
      desc: "Rejuvenating facial treatment that cleanses, hydrates, and refreshes your skin.",
      price: "150",
    },
    {
      icon: <FaTint />,
      name: "Hair Coloring",
      desc: "Vibrant and long-lasting color treatments using high-quality salon products.",
      price: "225",
    },
    {
      icon: <FaSpa />,
      name: "Spa & Relax",
      desc: "Relaxing head and neck massage to release stress and restore energy.",
      price: "110",
    },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <h1 className="mt-8 text-primary font-bold text-center text-5xl">
        Our Services
      </h1>
      <div className="py-12 flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="w-full md:w-[30%]">
          <img
            src={assets.service_img}
            alt="service banner"
            className="w-full rounded-full"
          />
        </div>

        <div className="w-full md:w-[40%] flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            {" "}
            Welcome to Our Salion
          </h1>
          <p className="text-lg text-center">
            There are many variations of passages of Lorem Ipsum available but
            humour which don't slightly believable.
          </p>
          <p className="text-lg text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that some form by injected
            humour or randomised is words which don't look even slightly
            believable. If you are Lorem Ipsum you need to be sure there isn't
            anything embarrassing.
          </p>
          <motion.button
            onClick={() => navigate("/book-appointment")}
            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
            className="mt-10 bg-primary text-white px-10 py-3 cursor-pointer hover:bg-black transition"
          >
            Book Service
          </motion.button>
        </div>
      </div>

      {/* services cards  */}
      <div className="py-12">
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          some services
        </h1>
        <p className="text-lg text-center my-3">
          {" "}
          There are many variations of passages of Lorem Ipsum available but the
          majority injected humour randomised words
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center  gap-5">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;

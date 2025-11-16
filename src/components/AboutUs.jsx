import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { assets } from "../assets/assets";
const AboutUs = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div className="max-w-7xl w-full mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center md:text-start uppercase text-3xl md:text-4xl font-bold">
            About Us
          </h1>
          <div className="hidden md:block mt-2 w-16 h-1  bg-primary"></div>
          <div className="mt-8 flex flex-col gap-6  ">
            <p className="px-2">
              {" "}
              There are many beauty salons around, but only a few stay true to
              quality, care, and style.
            </p>
            <p className="px-2">
              Some salons use fancy words or exaggerated claims, but we believe
              real beauty speaks for itself. There’s nothing artificial about
              the confidence you feel after visiting us.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-2 cursor-pointer px-10 py-3 mt-8 border border-primary bg-white text-black hover:bg-primary hover:text-white hover:border-none"
          >
            Contact Us <MoveRight />
          </motion.button>
        </div>

        <div>
          <img
            src={assets.about1}
            alt="about1"
            className="w-full h-1/3 rounded-md px-2"
          />
        </div>
        <div>
          <img
            src={assets.about2}
            alt="about2"
            className="w-full h-1/3 rounded-md px-2"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

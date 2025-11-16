import { assets } from "../assets/assets.js";
import { GiComb, GiRazor } from "react-icons/gi";
import { RiScissors2Line } from "react-icons/ri";
const WhatWeDo = () => {
  const whatWeDoData = [
    {
      icon: <RiScissors2Line />,
      name: "Haircut Style",
      desc: "Get the perfect haircut that suits your personality and trends.\nOur expert barbers craft styles that make you stand out.",
    },
    {
      icon: <GiRazor />,
      name: "Shaving Style",
      desc: "Experience a clean, refreshing shave with precision and care.\nWe bring the classic touch with modern techniques.",
    },
    {
      icon: <GiComb />,
      name: "Hair Style",
      desc: "Transform your look with creative and trendy hair styling.\nFrom casual to formal — we style it just right for you.",
    },
  ];
  return (
    <div className="py-12 flex flex-col md:flex-row  items-center justify-center gap-6 ">
      <div className="w-full md:w-[35%]">
        <img src={assets.service_banner} alt="service banner" />
      </div>
      <div className="w-full md:w-[55%]">
        <h1 className="text-center md:text-start uppercase text-3xl md:text-4xl font-bold">
          What We Do
        </h1>
        <div className="hidden md:block mt-2 w-16 h-1  bg-primary"></div>
        <p className="mt-2">
          There are many variations of passages of Lorem Ipsum available but the
          majority have randomised words which look even slightly believable.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-4">
          {whatWeDoData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center bg-primary text-white rounded-xl p-5 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-0 sm:mr-4">
                {item.icon}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">
                  {item.name}
                </h2>
                <p className="text-sm sm:text-base opacity-90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;

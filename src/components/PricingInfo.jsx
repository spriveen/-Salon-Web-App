import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { haircutsData } from "../assets/assets";
const PricingInfo = () => {
  const { navigate } = useContext(AppContext);

  return (
    <div className="py-12 flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Pricing Section */}
      <div
        className="relative w-full md:w-[40%]  bg-cover bg-center flex items-center justify-center text-center px-6 "
        style={{ backgroundImage: `url(${assets.pricing_banner})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Content Layer */}
        <div className="relative z-10 text-white w-full py-4">
          <h2 className="text-4xl font-bold mb-4">Our Fair Prices</h2>
          <div>
            {haircutsData.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex items-start justify-between gap-2  w-full p-2"
                >
                  <div className="flex flex-col  gap-2">
                    <h3 className="text-xl font-semibold text-start">
                      {item.name}
                    </h3>
                    <p className="text-sm text-start">{item.desc}</p>
                  </div>
                  <div>
                    <p className="text-lg">${item.price}</p>
                  </div>
                </div>
                <hr className="w-full  text-primary " />
              </>
            ))}
          </div>
        </div>
      </div>
      {/* Booking info Section */}
      <div
        className="relative w-full md:w-[40%]  bg-cover bg-center flex items-center justify-center text-center px-6 "
        style={{ backgroundImage: `url(${assets.schedule_banner})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Content Layer */}\
        <div className="relative z-10 text-white max-w-md py-1">
          <h1 className="text-4xl font-bold mb-4">
            Book Your Grooming Appointment
          </h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-md p-4">
            <h3>Available Appointments on November 7, 2025</h3>
            {[
              { time: "10:00 am – 11:00 am", available: false },
              { time: "11:30 am – 12:30 pm", available: true },
              { time: "01:00 pm – 02:00 pm", available: false },
              { time: "02:30 pm – 03:30 pm", available: true },
            ].map((slot, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-white/20 py-3"
              >
                <div>
                  <p className="font-semibold flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i> {slot.time}
                  </p>
                  <p className="text-sm text-gray-300">9 spaces available</p>
                </div>
                {slot.available ? (
                  <button
                    onClick={() => navigate("/book-appointment")}
                    className="px-4 py-2 border border-white hover:bg-primary hover:border-primary transition-all duration-300 rounded-md"
                  >
                    Book Appointment
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-not-allowed">
                    Unavailable
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingInfo;

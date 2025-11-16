import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const BookAppointment = () => {
  const { navigate } = useContext(AppContext);
  const services = [
    { name: "Hair Style", price: "125" },
    { name: "Shaving Style", price: "75" },
    { name: "Beard Trimming", price: "95" },
    { name: "Men Facial", price: "150" },
    { name: "Hair Coloring", price: "225" },
    { name: "Spa & Relax", price: "110" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    toast.success("Appointment booked successfully!");
    navigate("/my-bookings");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const selectedService = services.find(
    (service) => service.name === formData.service
  );
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary text-center mb-2">
            Book an Appointment
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Schedule your service with us
          </p>
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {" "}
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                />
              </div>
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Select Service
                </label>
                <select
                  name="service"
                  onChange={handleChange}
                  value={formData.service}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={service.name} value={service.name}>
                      {service.name} - ${service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests or notes..."
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none resize-none"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookAppointment;

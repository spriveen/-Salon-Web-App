import { useState } from "react";
import toast from "react-hot-toast";

const Bookings = () => {
  // Dummy bookings data
  const [bookings, setBookings] = useState([
    {
      id: "BK-001",
      service: "Hair Style",
      price: "125",
      date: "2024-11-12",
      time: "10:00 AM",
      status: "Confirmed",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8900",
      },
    },
    {
      id: "BK-002",
      service: "Men Facial",
      price: "150",
      date: "2024-11-15",
      time: "02:30 PM",
      status: "Pending",
      customer: {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1 345 678 9012",
      },
    },
    {
      id: "BK-003",
      service: "Beard Trimming",
      price: "95",
      date: "2024-11-08",
      time: "11:00 AM",
      status: "Completed",
      customer: {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1 456 789 0123",
      },
    },
  ]);

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
    toast.success("Status updated successfully!");
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Manage Bookings
        </h1>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-4 border-b">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {booking.service}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Booking ID: {booking.id}
                  </p>
                </div>
                <span className="px-4 py-2 rounded-full text-sm font-semibold ">
                  {booking.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Customer Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Customer Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-semibold">Name:</span>
                      {booking.customer.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span>{" "}
                      {booking.customer.email}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span>{" "}
                      {booking.customer.phone}
                    </p>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Appointment Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Date:</span>
                      {new Date(booking.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Time:</span>{" "}
                      {booking.time}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Service:</span>{" "}
                      {booking.service}
                    </p>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t">
                <div className="flex gap-2">
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking.id, e.target.value)
                    }
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none font-semibold"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Service Price</p>
                  <p className="text-xl font-bold text-primary">
                    ${booking.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bookings;

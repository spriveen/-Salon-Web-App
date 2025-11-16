const MyBookings = () => {
  // Dummy bookings data
  const bookings = [
    {
      id: "BK-001",
      service: "Hair Style",
      price: "125",
      date: "2024-11-12",
      time: "10:00 AM",
      status: "Confirmed",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
    {
      id: "BK-002",
      service: "Men Facial",
      price: "150",
      date: "2024-11-15",
      time: "02:30 PM",
      status: "Pending",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
    {
      id: "BK-003",
      service: "Beard Trimming",
      price: "95",
      date: "2024-11-08",
      time: "11:00 AM",
      status: "Completed",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1>My Bookings</h1>
        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">No Bookings yet</p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
              Book a Service
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {booking.service}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {" "}
                      Booking ID: {booking.id}
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold ">
                    {booking.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold"></span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold text-gray-800">
                        {new Date(booking.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold"></span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold text-gray-800">
                        {booking.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold"></span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-semibold text-gray-800">
                        {booking.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold"></span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-800">
                        {booking.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-xl font-bold text-primary">
                      ${booking.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyBookings;

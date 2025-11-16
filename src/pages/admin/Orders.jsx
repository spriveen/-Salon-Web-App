import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Orders = () => {
  const { navigate } = useContext(AppContext);
  // Dummy orders data with address
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      date: "2024-11-05",
      status: "Delivered",
      paymentMethod: "Online Payment",
      total: 190,
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8900",
        address: "123 Main St, New York, NY 10001",
      },
      items: [
        {
          id: 1,
          name: "Classic Hair Pomade",
          price: 55,
          quantity: 2,
          image: "/src/assets/product_1.png",
        },
        {
          id: 2,
          name: "Gold Salt-Free Shampoo",
          price: 70,
          quantity: 1,
          image: "/src/assets/product_2.png",
        },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-11-06",
      status: "Processing",
      paymentMethod: "Cash on Delivery",
      total: 130,
      customer: {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1 345 678 9012",
        address: "456 Oak Ave, Los Angeles, CA 90001",
      },
      items: [
        {
          id: 3,
          name: "Morgans Vanilla Firm",
          price: 65,
          quantity: 2,
          image: "/src/assets/product_3.png",
        },
      ],
    },
    {
      id: "ORD-003",
      date: "2024-11-07",
      status: "Shipped",
      paymentMethod: "Online Payment",
      total: 124,
      customer: {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1 456 789 0123",
        address: "789 Pine Rd, Chicago, IL 60601",
      },
      items: [
        {
          id: 4,
          name: "Hair & Body Cream",
          price: 75,
          quantity: 1,
          image: "/src/assets/product_4.png",
        },
        {
          id: 5,
          name: "Hair & Body Cream",
          price: 49,
          quantity: 1,
          image: "/src/assets/product_5.png",
        },
      ],
    },
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast.success("Status updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Manage Orders
        </h1>
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-6">
            {/* Order Header */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-4 border-b">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-gray-600">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold`}
                >
                  {" "}
                  {order.status}
                </span>
                <p className="text-sm text-gray-600 mt-2">
                  {order.paymentMethod}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Customer Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  {" "}
                  Customer Details
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">Name:</span>{" "}
                    {order.customer.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    {order.customer.email}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span>{" "}
                    {order.customer.phone}
                  </p>
                </div>
              </div>
              {/* Shipping Address */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-700">
                  {order.customer.address}
                </p>
              </div>
            </div>
            {/* Order Items */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Order Footer */}
            <div className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t">
              <div className="flex gap-2">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none font-semibold"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-xl font-bold text-primary">
                  ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;

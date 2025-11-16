import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyOrders = () => {
  const { navigate } = useContext(AppContext);
  // Dummy orders data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-11-05",
      status: "Delivered",
      paymentMethod: "Online Payment",
      total: 190,
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
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="mt-8 text-3xl font-bold text-primary text-center mb-8">
          My Orders
        </h1>
        {orders.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">No orders yet</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              {" "}
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders?.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow p-6">
                {/* Order Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-4 border-b">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      Order ID: {order.id}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold ">
                      {order.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                      {order.paymentMethod}
                    </p>
                  </div>
                </div>
                {/* Order Items */}
                <div className="space-y-4 mb-4">
                  {order?.items?.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />

                      <div className="flex-1">
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyOrders;

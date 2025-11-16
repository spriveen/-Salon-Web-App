import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const {
    cart,
    navigate,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(AppContext);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="mt-8 text-3xl font-bold text-primary text-center mb-8">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-gray-100 px-6 py-4 font-semibold text-gray-700 border-b">
                <div className="col-span-1"></div>
                <div className="col-span-5">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
              {/* Cart Items */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 px-6 py-6 border-b items-center hover:bg-gray-50"
                >
                  <div className="col-span-1">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl font-bold cursor-pointer"
                    >
                      *
                    </button>
                  </div>

                  <div className="col-span-5 flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>

                  <div className="col-span-2 text-gray-700">${item.price}</div>
                  <div className="col-span-2">
                    <div className="flex items-center border-2 border-gray-200 rounded w-fit">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -{" "}
                      </button>
                      <span className="px-4 py-1 border-x-2 border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* cart total  */}
            <div className="mt-8 flex justify-end">
              <div className="bg-white rounded-lg shadow p-6 w-96">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  cart Totals
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-800">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Total</span>
                    <span className="font-semibold text-gray-800">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity mt-4 cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;

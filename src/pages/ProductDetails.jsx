import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { CheckIcon, StarIcon } from "lucide-react";

const ProductDetails = () => {
  const {
    products,
    navigate,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
  } = useContext(AppContext);
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Image Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-center aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-32 h-32 object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* right Side - product information */}
            <div className="space-y-6">
              <div>
                <p className="text-primary text-sm font-semibold mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500">
                      <StarIcon />
                    </span>
                    <span className="ml-1 text-gray-700 font-semibold">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600 text-sm">128 reviews</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.shortDesc}
              </p>

              <div className="border-t border-b border-gray-200 py-4">
                <p className="text-gray-700 leading-relaxed">
                  {product.longDesc}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>
                        <CheckIcon className="text-primary mt-1" />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-3xl font-bold text-primary">
                  ${product.price}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                  }}
                  className="flex-1 border-2 border-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

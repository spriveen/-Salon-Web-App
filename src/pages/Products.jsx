import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
const Products = () => {
  const { products, navigate, addToCart } = useContext(AppContext);

  return (
    <div
      className="py-20 max-w-7xl mx-auto 
  "
    >
      <h1 className="my-8 text-center text-3xl md:text-4xl font-bold text-primary">
        Our Shop
      </h1>
      <div className="my-16">
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center gap-3 justify-center w-[300px] h-[300px]  rounded-md shadow-md bg-[#F7F7F7] "
            >
              <motion.img
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  scrollTo({ top: 0, behavior: "smooth" });
                }}
                src={product.images[0]}
                alt={product.name}
                className="w-32  h-40 object-cover hover:cursor-pointer"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-xl font-bold">Rating:{product.rating}</p>
              <div className="flex items-center gap-8">
                <p className="text-2xl font-bold">${product.price}</p>
                <ShoppingCart
                  onClick={() => addToCart(product)}
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;

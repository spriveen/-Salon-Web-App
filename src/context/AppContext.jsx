import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

import { productsData } from "../assets/assets";
import toast from "react-hot-toast";

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const cartCopy = structuredClone(prevCart);
      const existingItem = cartCopy.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartCopy.push({ ...product, quantity: 1 });
      }
      toast.success("Added to cart");
      return cartCopy;
    });
  };
  // Remove from Cart

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Removed from cart");
  };

  // increase quantity
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.success("Quantity increased");
  };
  // Decrease quantity

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    toast.success("Quantity decreased");
  };

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartTotal(total);
    setCartCount(count);
  }, [cart]);
  const fetchProducts = async () => {
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const value = {
    loading,
    setLoading,
    user,
    setUser,
    navigate,
    products,
    setProducts,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cart,
    cartCount,
    cartTotal,
    admin,
    setAdmin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

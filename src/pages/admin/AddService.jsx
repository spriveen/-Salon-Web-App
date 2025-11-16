import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "motion/react";
const AddService = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Service added successfully!");
    setFormData({ name: "", desc: "", price: "" });
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-primary text-center mb-8">
            Add New Service
          </h1>
          <div className="space-y-6">
            {/* Service Name */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Service Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                placeholder="Service description..."
                rows="4"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none resize-none"
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="125"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image Preview
                </label>
                <div className="relative group">
                  <img
                    src={imagePreview}
                    alt="Service Preview"
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-3 right-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Add Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AddService;

import { useState } from "react";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    food_name: "",
    food_rating: "",
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-lg font-bold mb-4">Add Food</h2>
          <input type="text" name="food_name" placeholder="Food Name" onChange={handleChange} className="w-full border p-2 mb-2" />
          <input type="number" name="food_rating" placeholder="Rating" onChange={handleChange} className="w-full border p-2 mb-2" />
          <input type="text" name="food_image" placeholder="Image URL" onChange={handleChange} className="w-full border p-2 mb-2" />
          <button onClick={onSave} className="bg-blue-500 text-white px-4 py-2 mr-2">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2">Cancel</button>
        </div>
      </div>
    )
  );
};

export default Modal;

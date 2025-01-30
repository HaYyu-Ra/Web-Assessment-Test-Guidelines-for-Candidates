import { useState } from "react";
import Header from "../components/Header";
import FoodCard from "../components/FoodCard";
import Modal from "../components/Modal";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addFood = () => {
    const newFood = {
      name: "Burger",
      image: "https://via.placeholder.com/150",
      price: "10",
      rating: "4.5",
      status: "Open Now",
    };
    setFoods([...foods, newFood]);
    setModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <button onClick={() => setModalOpen(true)} className="bg-green-500 text-white px-4 py-2 mb-4">Add Food</button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSave={addFood} />
        <div className="grid grid-cols-3 gap-4">
          {foods.length > 0 ? (
            foods.map((food, index) => <FoodCard key={index} food={food} />)
          ) : (
            <p className="empty-state-message">No items available</p>
          )}
        </div>
      </main>
    </div>
  );
}

const FoodCard = ({ food }) => (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="restaurant-name font-semibold">{food.name}</h3>
      <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
      <p className="restaurant-price">Price: ${food.price}</p>
      <p className="restaurant-rating">Rating: {food.rating} ⭐</p>
      <p className={`restaurant-status ${food.status === "Open Now" ? "text-green-500" : "text-red-500"}`}>
        {food.status}
      </p>
    </div>
  );
  
  export default FoodCard;
  
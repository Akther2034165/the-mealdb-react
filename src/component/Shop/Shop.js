import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Foods/Food";
import "./Shop.css";
const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayFood, setDisplayFood] = useState([]);
  useEffect(() => {
    fetch("./mealdb.JSON")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        setDisplayFood(data.meals);
      });
  }, []);
  const handleAddToCart = (food) => {
    const newCart = [...cart, food];
    setCart(newCart);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedFood = foods.filter((food) =>
      food.strMeal.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayFood(matchedFood);
  };
  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search whatever you want to eat"
          name=""
          id=""
        />
      </div>
      <div className="shop-container">
        <div className="food-container row">
          {displayFood.map((food) => (
            <Food
              key={food.idMeal}
              food={food}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./Food.css";
const Food = (props) => {
  const { idMeal, strMeal, strMealThumb, strCategory } = props.food;
  const element = <FontAwesomeIcon icon={faShoppingBasket} />;

  return (
    <div className="col-md-6">
      <div className="product">
        <div class="card shadow  mb-5 bg-body rounded">
          <img
            src={strMealThumb}
            class="card-img-top img-fluid p-2"
            alt="..."
          ></img>
          <div class="card-body">
            <h5 class="card-title">{idMeal}</h5>
            <h5 class="card-title">{strMeal}</h5>
            <p class="card-text">{strCategory}</p>
            <button
              onClick={() => props.handleAddToCart(props.food)}
              className="btn-card"
            >
              {element} Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;

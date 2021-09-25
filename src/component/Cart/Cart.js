import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <hr />

      <div>
        <h4>Item Order :{props.cart.length}</h4>
      </div>
      <div>
        <ul className="ul">
          {props.cart.map((single) => (
            <li>{single.strMeal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

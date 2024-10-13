import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity,decreaseQuantity } from "../redux/cartSlice";
import Shop from "./Shop";
import { mockData } from "../assets/mockData";
import { Categories } from "../assets/mockData";



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress]= useState("anderson ferry Cincinnati,191")

  return (
    <div className="small-box">
      <h4>Selected Items</h4>
      {cart.products.map((product) => (
        <div key={product.id} className="small-box-item">
          <img src={product.Image} alt={product.name} />
          <div className="small-box-item-details">
            <h5>{product.name}</h5>
            <p>${product.price}</p>

            <button onClick={()=> dispatch(removeFromCart(product.id))}><FaTrash/> </button>
          </div>
          <div className="small-box-item-actions">
            <button onClick={()=> dispatch(decreaseQuantity(product.id))}>-</button>
            <p>{product.quantity}</p>
            <button onClick={()=> dispatch(increaseQuantity(product.id))}>+</button>
          </div>
          
        </div>
        
      ))}
      <div>
        <h3>Cart Total</h3></div>
        <div>
            <span> Total items:</span>
            <span>{cart.totalQuantity}</span>
        </div>
        <div>
            <p>Shipping</p>
            <p>Shipping to:</p>
            <span>Address</span>
            <button> Change addree</button>
            
        </div>
        <div>
            <span>Total price</span>
            <span>${cart.totalPrice}</span>
        </div>
        <button>Checkout</button>
    </div>
    
  );
};

export default Cart;

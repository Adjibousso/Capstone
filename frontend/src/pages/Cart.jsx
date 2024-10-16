import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import '../App.css'
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("Anderson Ferry Cincinnati, 191");
  const [editAddress, setEditAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const handleAddressChange = () => {
    setEditAddress(!editAddress);
    if (editAddress && newAddress) {
      setAddress(newAddress);
    }
  };

  if (cart.products.length === 0) {
    return <h4>Your cart is empty!</h4>;
  }

  return (
    <div className="cartbag">
      <div>
      <h4>Selected Items</h4>
      {cart.products.map((product) => (
        <div key={product.id} className="cartbagItem">
          <img src={product.image} alt={product.name}
          onError={(e) => { 
            e.target.src = "https://via.placeholder.com/150"; // Fallback image
          }} 
          />
          <div className="cartbagItem-details">
            <h5>{product.name}</h5>
            <p>${product.price}</p>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              <FaTrash />
            </button>
          </div>
          <div className="cartbagItem-actions">
            <button 
              onClick={() => dispatch(decreaseQuantity(product.id))} 
              disabled={product.quantity === 1}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
          </div>
        </div>
      ))}

      <div>
        <h3>Cart Total</h3>
        <div>
          <span>Total items: </span>
          <span>{cart.totalQuantity}</span>
        </div>
        <div>
          <p>Shipping</p>
          <p>Shipping to: {address}</p>
          {editAddress ? (
            <input 
              type="text" 
              value={newAddress} 
              onChange={(e) => setNewAddress(e.target.value)} 
              placeholder="Enter new address"
            />
          ) : (
            <span>{address}</span>
          )}
          <button onClick={handleAddressChange}>
            {editAddress ? "Save Address" : "Change Address"}
          </button>
        </div>
        <div className="totalprice">
          <span>Total price: </span>
          <span>${cart.totalPrice}</span>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;

import React from "react";
import {useDispatch} from "react-redux"
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        alert("Product added to cart");
    };
    return (
        <div className="product-card">
            <img src={product.Image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="add-to-cart">
                <span  className="btnPlus">+</span>
                <span onClick={(e) => handleAdd(e)} className="btnadd">Add to cart</span>
            </div>
        </div>
    );
};

export default ProductCard;

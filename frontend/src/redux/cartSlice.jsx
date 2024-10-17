import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.products.find(item => item.id === newItem.id);
            
            if (existingItem) {
                // update existing item
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                // add new item
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.Image, 
                });
            }
            // update total state value
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        // clear cart
        clearCart(state) {
            state.products = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find(item => item.id === id);
            if (existingItem) {
                state.totalPrice -= existingItem.totalPrice;
                state.totalQuantity -= existingItem.quantity;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
        // increment numberof items in cart
        increaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.products.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity++;
                state.totalPrice += existingItem.price;
            }
        },
        //decrement quantity in cart
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.products.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity--;
                state.totalPrice -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
                //  remove item if quantity is 1 and decremented
                state.totalPrice -= existingItem.totalPrice;
                state.totalQuantity--;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from "../../../model/Product";

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

const CartItemSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ product: Product; qty: number }>) => {
            const { product, qty } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            // Ensure only one unit is added and available stock is decremented
            if (product.totalQty > 0) {
                if (existingItem) {
                    existingItem.totalQty += qty; // Increment cart quantity
                    product.totalQty -= qty; // Decrement available stock
                } else {
                    state.items.push({ ...product, totalQty: qty }); // Add to cart with qty
                    product.totalQty -= qty; // Decrement available stock
                }
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItemQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
            const { id, qty } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.totalQty = qty;
            }
        },
    },
});

export const { addItem, removeItem, updateItemQty } = CartItemSlice.actions;
export default CartItemSlice.reducer;

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
        addItem: (state, action: PayloadAction<{ product: Product, qty: number }>) => {
            const { product, qty } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.totalQty += qty;
            } else {
                // @ts-ignore
                state.items.push({ ...product, qty });
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

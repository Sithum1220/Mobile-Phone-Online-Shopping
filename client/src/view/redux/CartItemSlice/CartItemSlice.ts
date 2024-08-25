import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootObjectProduct } from "../../../model/CartItem";


interface CartState {
    items: RootObjectProduct[];
}

const initialState: CartState = {
    items: [],
};

const CartItemSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<RootObjectProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItemQty: (state, action: PayloadAction<{ title: string; qty: number }>) => {
            const { title, qty } = action.payload;
            const existingItem = state.items.find(item => item.title === title);
            if (existingItem) {
                existingItem.qty = qty;
            }
        },
    },
});

export const { addItem, removeItem, updateItemQty } = CartItemSlice.actions;
export default CartItemSlice.reducer;

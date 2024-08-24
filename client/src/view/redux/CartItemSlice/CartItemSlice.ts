import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootObjectProduct } from "../../../model/Product";


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
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload); // Remove a CartItem by its id
        },
    },
});

export const { addItem, removeItem } = CartItemSlice.actions;
export default CartItemSlice.reducer;

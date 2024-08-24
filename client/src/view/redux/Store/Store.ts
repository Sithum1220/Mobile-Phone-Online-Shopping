import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../CounterSlice/CounterSlice';
import cartReducer from '../CartItemSlice/CartItemSlice'; // Import the CartItemSlice reducer

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer, // Add CartItemSlice reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

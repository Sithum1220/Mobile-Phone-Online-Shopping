import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartItemSlice/CartItemSlice'; // Import the CartItemSlice reducer
import totalPriceReducer from '../TotalPriceSlice/TotalPriceSlice'; // Import the CartItemSlice reducer

const store = configureStore({
    reducer: {
        cart: cartReducer,
        price: totalPriceReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../CounterSlice/CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
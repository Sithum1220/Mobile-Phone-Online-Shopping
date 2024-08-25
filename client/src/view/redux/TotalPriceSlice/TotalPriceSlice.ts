import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const totalPriceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0,
    },
    reducers: {
        total: (state,action: PayloadAction<{ total: number;}>) => {
            const { total } = action.payload;
            state.value = total;
        }
    },
});

export const { total } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;
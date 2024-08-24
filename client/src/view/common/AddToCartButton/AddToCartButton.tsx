import React from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/CounterSlice/CounterSlice';

export const AddToCartButton = () => {

    const dispatch = useDispatch();

    return (
        <div className="inline-block border-2 border-gray-200 rounded-full py-1 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
            <button className="text-xs lg:text-sm font-light cursor-pointer" onClick={() => {
                dispatch(increment());
            }}>ADD TO CART</button>
        </div>
    );
};
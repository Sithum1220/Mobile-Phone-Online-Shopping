import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { increment } from '../../redux/CounterSlice/CounterSlice';
import { RootObjectProduct } from "../../../model/Product";
import {addItem} from "../../redux/CartItemSlice/CartItemSlice";

interface AddToCartButtonProps {
    product: RootObjectProduct;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const dispatch = useDispatch();
    const [isButtonActive, setIsButtonActive] = useState<boolean>(true);


    const handleAddToCart = () => {
        dispatch(addItem(product))
        dispatch(increment());
        setIsButtonActive(false);
    };

    const handleViewCart = () => {

    };

    return (
        <div
            className="inline-block border-2 border-gray-200 rounded-full py-1 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
            <button
                className="text-xs lg:text-sm font-light cursor-pointer"
                onClick={isButtonActive ? handleAddToCart : handleViewCart}
            >
                {isButtonActive ? "ADD TO CART" : "VIEW CART"}
            </button>
        </div>
    );
};
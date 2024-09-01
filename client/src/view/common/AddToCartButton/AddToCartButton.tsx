import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/CartItemSlice/CartItemSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/Store/Store";
import { total } from "../../redux/TotalPriceSlice/TotalPriceSlice";
import { Product } from "../../../model/Product";
import ComboBox from "../ComboBox/ComboBox";

interface AddToCartButtonProps {
    product: Product;
    disable: boolean;
    isButtonActive: boolean;
    setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOptionActive:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddToCartButton = ({ product, disable, isButtonActive, setIsButtonActive, setIsOptionActive }: AddToCartButtonProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        // Check if the item is already in the cart
        const itemInCart = items.find((item) => item.id === product.id);
        setIsButtonActive(!itemInCart);

        // Update the total price
        const totalPrice = items.reduce(
            (acc, item) => acc + item.totalQty * item.price,
            0
        );
        dispatch(total({ total: totalPrice }));
    }, [dispatch, items, product]);

    const handleAddToCart = () => {
        if (product.totalQty > 0) {
            // Dispatch action to add 1 unit of the product to the cart
            dispatch(addItem({ product, qty: 1 }));
            setIsOptionActive(false);
            setIsButtonActive(false)
        } else {
            alert("This item is out of stock!");
        }
    };

    return (
        <div>
            <div
                className={`inline-block border-2 bg-white border-gray-300 rounded-full py-1 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500 ${
                    disable ? "pointer-events-none" : ""
                }`}
            >
                <button
                    className="text-xs lg:text-sm font-light cursor-pointer"
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

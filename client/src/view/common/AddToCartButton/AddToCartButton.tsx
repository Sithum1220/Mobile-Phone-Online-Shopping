import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from "../../redux/CartItemSlice/CartItemSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/Store/Store";
import { total } from "../../redux/TotalPriceSlice/TotalPriceSlice";
import { Product } from "../../../model/Product";

interface AddToCartButtonProps {
    product: Product;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isButtonActive, setIsButtonActive] = useState<boolean>(true);
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        const itemInCart = items.find(item => item.id === product.id);
        setIsButtonActive(!itemInCart);

        // Optional: Update total price if required
        const totalPrice = items.reduce((acc, item) => acc + item.qty * item.price, 0);
        dispatch(total({ total: totalPrice }));
    }, [dispatch, items, product]);

    const handleAddToCart = () => {
        dispatch(addItem({ product, qty: 1 }));
    };

    const handleViewCart = () => {
        navigate('/cart');
    };

    return (
        <div className="inline-block border-2 border-gray-200 rounded-full py-1 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
            <button
                className="text-xs lg:text-sm font-light cursor-pointer"
                onClick={isButtonActive ? handleAddToCart : handleViewCart}
            >
                {isButtonActive ? "ADD TO CART" : "VIEW CART"}
            </button>
        </div>
    );
};

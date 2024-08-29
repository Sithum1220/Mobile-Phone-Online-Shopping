// import React, {useEffect, useState} from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import {increment} from '../../redux/CounterSlice/CounterSlice';
// import {RootObjectProduct} from "../../../model/Product";
// import {addItem} from "../../redux/CartItemSlice/CartItemSlice";
// import {useNavigate} from "react-router-dom";
// import {RootState} from "../../redux/Store/Store";
// import ProductItem from "../../../data/OldProduct.json";
// import {total} from "../../redux/TotalPriceSlice/TotalPriceSlice";
//
import {RootObjectProduct} from "../../../model/CartItem";

interface AddToCartButtonProps {
    product: RootObjectProduct;
}

export const AddToCartButton = ({product}: AddToCartButtonProps) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [isButtonActive, setIsButtonActive] = useState<boolean>(true);
    // const items = useSelector((state: RootState) => state.cart.items);
    //
    // useEffect(() => {
    //     const filtered = items.find(item => item.title === product.title);
    //     setIsButtonActive(!filtered); // If found, deactivate button
    //     console.log(items)
    //
    //     const totalPrice = items.reduce((acc, item) => acc + item.qty * item.price, 0);
    //     dispatch(total({total: totalPrice}));
    //
    // }, [items, product]);
    //
    // const handleAddToCart = () => {
    //     if (dispatch(addItem(product))) {
    //         dispatch(increment());
    //     }
    // };
    //
    // const handleViewCart = () => {
    //     navigate('/cart');
    // };

    return (
        <div
            className="inline-block border-2 border-gray-200 rounded-full py-1 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
            {/*<button*/}
            {/*    className="text-xs lg:text-sm font-light cursor-pointer"*/}
            {/*    onClick={isButtonActive ? handleAddToCart : handleViewCart}*/}
            {/*>*/}
            {/*    {isButtonActive ? "ADD TO CART" : "VIEW CART"}*/}
            {/*</button>*/}
        </div>
    );
};

import { RootState } from "../../redux/Store/Store";
import { useDispatch, useSelector } from "react-redux";
import {removeItem, updateItemQty} from "../../redux/CartItemSlice/CartItemSlice"; // Adjust the import path
import React, { useEffect, useState } from "react";
import {total} from "../../redux/TotalPriceSlice/TotalPriceSlice";

export function Cart() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    // @ts-ignore
    const totalPrice = useSelector((state) => state.price.value);
    useEffect(() => {
        const calculateTotal = () => {
            return items.reduce((acc, item) => acc + item.qty * item.price, 0);
        };
        const totalPrice = calculateTotal();
        dispatch(total({ total: totalPrice }));
    }, [items, dispatch]);

    const handleQtyOnChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newQty = parseInt(e.target.value);
        if (newQty > 0) {
            dispatch(updateItemQty({ id: id, qty: newQty }));
        }
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="max-w-[1240px] mx-auto px-10 py-7">
            <h1 className="text-4xl font-light mb-6">Cart</h1>
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="min-w-full divide-gray-200 bg-white shadow-md rounded-lg rounded-t-2xl">
                    <thead className="bg-primary rounded-t-2xl">
                    <tr>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                                     width="24px" fill="#5f6368" onClick={() => handleRemoveItem(item.id)}>
                                    <path
                                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <img src={require(`../../../images/product/${item.image}`)}
                                     className="w-10 h-10 object-cover rounded" alt={item.model} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.model}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                            <td className="py-4 whitespace-nowrap text-sm text-gray-500">
                                <input
                                    className="border-[1px] px-2 w-20 py-3 rounded-xl border-gray-300"
                                    onChange={(e) => handleQtyOnChange(e, item.id)}
                                    value={item.qty}
                                    type="number"
                                    min="1"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${(item.qty * item.price).toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-[5%]">
                <h1 className="text-2xl font-light">Cart Total</h1>
                <div
                    className="mt-[2%] border-2 items-center w-1/2 flex flex-row p-4 rounded-xl justify-between border-gray-300">
                    <h1 className="text-xl font-light">Total</h1>
                    <h2 className="font-light text-gray-500">{`$ ${(totalPrice).toFixed(2)}`}</h2>
                </div>

                <div
                    className="inline-block border-2 border-gray-200 rounded-full py-1  px-4 mt-[5%] hover:bg-primary hover:text-white transition-all duration-500">
                    <button
                        className="text-xs lg:text-sm font-light cursor-pointer"
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
}

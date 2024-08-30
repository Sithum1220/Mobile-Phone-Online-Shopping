import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import productList from "../../../data/product.json";
import {Product} from "../../../model/Product";
import {RatingStarts} from "../../common/RatingStarts/RatingStarts";
import {addItem, updateItemQty} from "../../redux/CartItemSlice/CartItemSlice";
import {useDispatch, useSelector} from "react-redux";
import {AddToCartButton} from "../../common/AddToCartButton/AddToCartButton";
import {total} from "../../redux/TotalPriceSlice/TotalPriceSlice";
import {RootState} from "../../redux/Store/Store";

export function BuyProduct() {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [qty, setQty] = useState<number>(1);
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        console.log(id)
        const numericId = Number(id);
        const foundProduct = productList.find((p) => p.id === numericId);
        // @ts-ignore
        setProduct(foundProduct || null);

    }, [id]);

    useEffect(() => {
        const calculateTotal = () => {
            return items.reduce((acc, item) => acc + item.qty * item.price, 0);
        };
        const totalPrice = calculateTotal();
        dispatch(total({ total: totalPrice }));
    }, [items, dispatch]);

    if (!product) {
        return <div className="mx-auto max-w-[1240px] px-10 py-7">Loading product...</div>;
    }

    const handleQtyOnChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newQty = parseInt(e.target.value);
        setQty(newQty > 0 ? newQty : 1);
    };
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        if (qty > 0) {
            dispatch(addItem({ product, qty }));
        }
    }

    return (
        <div className="mx-auto max-w-[1240px] px-10 py-7">
            <div className="flex flex-row gap-10">
                <div className="border-2 relative border-gray-300 w-[40%] rounded-xl">
                    {product.sale && (
                        <span
                            className="absolute top-5 left-5 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">
                        SALE!
                    </span>
                    )}
                    <img
                        src={require(`../../../images/product/${product.image}`)}
                        alt={product.model}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
                <div className="w-1/2">
                    <div>
                        <h1 className="text-4xl font-extralight mb-2">{product.model}</h1>
                        <RatingStarts product={product}/>
                        {product.sale ?
                            <div className="flex gap-2 items-center mt-4">
                                <h2 className="text-gray-500 line-through">{`$${product.price.toFixed(2)}`}</h2>
                                <h2 className="font-extralight text-2xl">{`$${product.newPrice.toFixed(2)}`}</h2>
                            </div>
                            :
                            <h2 className="font-extralight text-2xl">{`$${product.price.toFixed(2)}`}</h2>
                        }
                    </div>

                    <p className="text-sm font-light mt-10">{typeof product.description === 'object' && product.description.details}</p>

                    <div className="flex flex-row gap-4 items-center mt-6">
                        <div className="py-4 text-sm text-gray-500">
                            <input
                                className="border-[1px] px-2 w-20 py-3 rounded-xl border-gray-300"
                                onChange={(e) => handleQtyOnChange(e, product.id)}
                                value={qty}
                                type="number"
                                min="1"
                            />
                        </div>


                        <div
                            className="inline-block border-2 border-gray-200 rounded-full py-2 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
                            <button
                                className="text-xs lg:text-sm font-light cursor-pointer"
                                onClick={(e) => handleAddToCart(e, product.id)}
                            >
                                ADD TO CART
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
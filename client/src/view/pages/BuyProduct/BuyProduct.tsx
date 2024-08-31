import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productList from "../../../data/product.json";
import { Product } from "../../../model/Product";
import { RatingStarts } from "../../common/RatingStarts/RatingStarts";
import { addItem } from "../../redux/CartItemSlice/CartItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { total } from "../../redux/TotalPriceSlice/TotalPriceSlice";
import { RootState } from "../../redux/Store/Store";
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import ComboBox from "../../common/ComboBox/ComboBox";

export function BuyProduct() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [qty, setQty] = useState<number>(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
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

    const handleQtyOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQty = parseInt(e.target.value);
        setQty(newQty > 0 ? newQty : 1);
    };

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (qty > 0) {
            dispatch(addItem({ product, qty }));
        }
    };

    const openPopup = (url: string | URL | undefined) => {
        window.open(
            url,
            'popup',
            'width=600,height=600,scrollbars=no,resizable=no'
        );
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    // Extract unique options from product variants
    const colorOptions = Array.from(new Set(product.variants.map(variant => variant.color))).filter(color => color !== undefined);
    const storageOptions = Array.from(new Set(product.variants.map(variant => variant.storage))).filter(storage => storage !== undefined);
    const ramOptions = Array.from(new Set(product.variants.map(variant => variant.ram))).filter(ram => ram !== undefined);
    const networkOptions = Array.from(new Set(product.variants.map(variant => variant.signal))).filter(signal => signal !== undefined);

    // Find the image URL based on the selected color
    const selectedVariant = product.variants.find(variant => variant.color === selectedColor);
    const imageUrl = selectedVariant ? selectedVariant.image : product.image;

    return (
        <div className="mx-auto max-w-[1240px] px-10 py-7">
            <div className="flex flex-row gap-10">
                <div className="relative w-[40%] rounded-xl">
                    <div className="border-gray-300 border-2 rounded-xl">
                        {product.sale && (
                            <span
                                className="absolute top-5 left-5 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">
                            SALE!
                        </span>
                        )}
                        <img
                            src={require(`../../../images/product/${imageUrl}`)}
                            alt={product.model}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <h1 className="text-4xl font-extralight mb-2">{product.model}</h1>
                        <RatingStarts product={product} />
                        {product.sale ?
                            <div className="flex gap-2 items-center mt-4">
                                <h2 className="text-gray-500 line-through">{`$${product.price.toFixed(2)}`}</h2>
                                <h2 className="font-extralight text-2xl">{`$${product.newPrice.toFixed(2)}`}</h2>
                            </div>
                            :
                            <h2 className="font-extralight text-2xl">{`$${product.price.toFixed(2)}`}</h2>
                        }
                    </div>

                    <p className="text-sm font-light mt-6">
                        {typeof product.description === 'object' && product.description.details}
                    </p>

                    <div className="mt-6 flex flex-col gap-6">
                        {/* Color Section */}
                        {colorOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Color:</h2>
                                <ComboBox options={colorOptions} handleInputChange={handleColorChange} />
                            </div>
                        )}

                        {/* Storage Section */}
                        {storageOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Storage:</h2>
                                <ComboBox options={storageOptions} handleInputChange={() => {}} />
                            </div>
                        )}

                        {/* Ram Section */}
                        {ramOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Ram:</h2>
                                <ComboBox options={ramOptions} handleInputChange={() => {}} />
                            </div>
                        )}

                        {/* Network Section */}
                        {networkOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Network:</h2>
                                <ComboBox options={networkOptions} handleInputChange={() => {}} />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-row gap-4 items-center mt-6">
                        <div className="py-4 text-sm text-gray-500">
                            <input
                                className="border-[1px] px-2 w-20 py-3 rounded-xl border-gray-300"
                                onChange={handleQtyOnChange}
                                value={qty}
                                type="number"
                                min="1"
                            />
                        </div>

                        <div
                            className="inline-block border-2 border-gray-200 rounded-full py-2 px-4 mt-2 hover:bg-primary hover:text-white transition-all duration-500">
                            <button
                                className="text-xs lg:text-sm font-light cursor-pointer"
                                onClick={handleAddToCart}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <div className="mt-3 flex gap-12">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-sm">Categories:</h2>
                            <h2 className="text-sm">Share:</h2>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-center">
                            <h2 className="text-sm font-extralight">{`${product.category}, ${product.brand}`}</h2>
                            <ul className="flex gap-1">
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openPopup('https://www.facebook.com/sharer/sharer.php?u=YOUR_URL');
                                        }}
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openPopup('https://twitter.com/intent/tweet?url=YOUR_URL&text=YOUR_TEXT');
                                        }}
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openPopup('https://pinterest.com/pin/create/button/?url=YOUR_URL&media=YOUR_IMAGE_URL&description=YOUR_DESCRIPTION');
                                        }}
                                    >
                                        <FaPinterestP />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

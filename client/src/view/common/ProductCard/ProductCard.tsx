import React, { useState } from "react";
import { Product } from "../../../model/Product";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { Link, useNavigate } from "react-router-dom";
import { RatingStarts } from "../RatingStarts/RatingStarts";
import ComboBox from "../ComboBox/ComboBox";

interface ProductCardProps {
    Product: Product;
}

export function ProductCard({ Product }: ProductCardProps) {
    const isOutOfStock = Product.totalQty === 0;
    const [isOptionActive, setIsOptionActive] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const navigate = useNavigate();
    const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

    const availableVariants = Product.variants.filter(
        (variant) => variant.qty > 0
    );

    const colorOptions = Array.from(
        new Set(availableVariants.map((variant) => variant.color))
    ).filter((color) => color !== undefined);
    const storageOptions = Array.from(
        new Set(availableVariants.map((variant) => variant.storage))
    ).filter((storage) => storage !== undefined);
    const ramOptions = Array.from(
        new Set(availableVariants.map((variant) => variant.ram))
    ).filter((ram) => ram !== undefined);
    const networkOptions = Array.from(
        new Set(availableVariants.map((variant) => variant.signal))
    ).filter((signal) => signal !== undefined);

    // Find the image URL based on the selected color
    const selectedVariant = Product.variants.find(
        (variant) => variant.color === selectedColor
    );
    const imageUrl = selectedVariant ? selectedVariant.image : Product.image;
    const variantQty = selectedVariant ? selectedVariant.qty : 0;
    const totalQty = Product.totalQty;

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    const handleSelectOptions = () => {
        setIsOptionActive(true);
    };

    const handleViewCart = () => {
        navigate("/cart");
    };

    const handleCloseOptions = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOptionActive(false);
            setIsClosing(false);
        }, 500); // This should match the duration of your transition
    };

    return (
        <div
            className={`w-64 border-2 border-gray-300 mt-[3%] relative transition-all duration-500 rounded-xl ${
                isOutOfStock
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-primary hover:scale-105"
            }`}
        >
            <Link
                to={!isOutOfStock ? `/buy/${Product.id}` : "#"}
                className={`${isOutOfStock ? "pointer-events-none" : ""}`}
            >
                <div
                    className={`h-60 pt-4 flex items-center justify-center relative ${
                        isOptionActive ? "opacity-20" : "opacity-100"
                    }`}
                >
                    {Product.sale && !isOutOfStock && (
                        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">
              SALE!
            </span>
                    )}
                    {isOutOfStock && (
                        <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-xl">
                            OUT OF STOCK
                        </div>
                    )}
                    <img
                        src={require(`../../../images/product/${Product.image}`)}
                        className="w-full h-auto object-cover rounded-lg"
                        alt=""
                    />
                </div>
            </Link>
            <div
                className={`flex items-center justify-center flex-col gap-2 h-52 ${
                    isOptionActive ? "opacity-20" : "opacity-100"
                }`}
            >
                <Link
                    to={!isOutOfStock ? `/buy/${Product.id}` : "#"}
                    className={`${isOutOfStock ? "pointer-events-none" : ""}`}
                >
                    <div className="flex justify-center items-center flex-col gap-2">
                        <h2 className="text-primary font-light text-[14px]">{`${Product.category}, ${Product.brand}`}</h2>
                        <h1 className="text-[15px]">{Product.model}</h1>

                        <div>
                            {Product.sale ? (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    {isOutOfStock ? (
                                        ""
                                    ) : (
                                        <h3 className="text-gray-500 text-sm line-through">{`$${Product.price.toFixed(
                                            2
                                        )}`}</h3>
                                    )}
                                    <h3 className="text-black text-lg">{`$${Product.newPrice.toFixed(
                                        2
                                    )}`}</h3>
                                </div>
                            ) : (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    <h3 className="text-black text-lg">{`$${Product.price.toFixed(
                                        2
                                    )}`}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>

                <RatingStarts product={Product} />
                <div
                    className={`inline-block border-2 border-gray-200 rounded-full py-1 px-4 hover:bg-primary hover:text-white transition-all duration-500 ${
                        isOutOfStock ? "pointer-events-none" : ""
                    }`}
                >
                    <button
                        className="text-xs lg:text-sm font-light cursor-pointer"
                        onClick={isButtonActive ? handleSelectOptions : handleViewCart}
                    >
                        {isButtonActive ? "SELECT OPTIONS" : "VIEW CART"}
                    </button>
                </div>
            </div>

            <div
                className={`transition-all duration-500 ease-in-out ${
                    isOptionActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
            >
                {/* Select Option Section */}
                {(isOptionActive || isClosing) && (
                    <div
                        className={`absolute bottom-0 ov justify-center z-10 items-center rounded-b-xl bg-white transition-all transform duration-500 ease-in-out flex flex-col gap-6 p-4 ${
                            isOptionActive && !isClosing
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0"
                        }`}
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#5f6368"
                                onClick={handleCloseOptions}
                                className="cursor-pointer"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </div>
                        {/* Color Section */}
                        {colorOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Color:</h2>
                                <ComboBox
                                    options={colorOptions}
                                    handleInputChange={handleColorChange}
                                    totalQty={totalQty}
                                />
                            </div>
                        )}

                        {/* Storage Section */}
                        {storageOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Storage:</h2>
                                <ComboBox
                                    options={storageOptions}
                                    handleInputChange={() => {}}
                                    totalQty={totalQty}
                                />
                            </div>
                        )}

                        {/* Ram Section */}
                        {ramOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Ram:</h2>
                                <ComboBox
                                    options={ramOptions}
                                    handleInputChange={() => {}}
                                    totalQty={totalQty}
                                />
                            </div>
                        )}

                        {/* Network Section */}
                        {networkOptions.length > 0 && (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <h2 className="text-lg font-medium min-w-[100px]">Network:</h2>
                                <ComboBox
                                    options={networkOptions}
                                    handleInputChange={() => {}}
                                    totalQty={totalQty}
                                />
                            </div>
                        )}
                        <AddToCartButton
                            product={Product}
                            disable={isOutOfStock}
                            isButtonActive={isButtonActive}
                            setIsButtonActive={setIsButtonActive}
                            setIsOptionActive={setIsOptionActive}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

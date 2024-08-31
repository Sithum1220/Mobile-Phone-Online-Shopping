import {Product} from "../../../model/Product";
import React from "react";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton";
import {Link} from "react-router-dom";
import {RatingStarts} from "../RatingStarts/RatingStarts";

interface ProductCardProps {
    Product: Product;
}

export function ProductCard({Product}: ProductCardProps) {
    const isOutOfStock = Product.totalQty === 0;

    return (
        <div
            className={`w-64 border-2 border-gray-300 mt-[3%] transition-all duration-500 p-2 rounded-xl ${
                isOutOfStock ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary hover:scale-105'
            }`}
        >

            <Link to={!isOutOfStock ? `/buy/${Product.id}` : '#'}
                  className={`${isOutOfStock ? 'pointer-events-none' : ''}`}>
                <div className="h-60 pt-4 flex items-center justify-center relative">
                    {Product.sale && !isOutOfStock && (
                        <span
                            className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">
                            SALE!
                        </span>
                    )}

                    {isOutOfStock && (
                        <div
                            className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-xl">
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
            <div className="flex items-center justify-center flex-col gap-2 h-52">
                <Link to={!isOutOfStock ? `/buy/${Product.id}` : '#'}
                      className={`${isOutOfStock ? 'pointer-events-none' : ''}`}>
                    <div className="flex justify-center items-center flex-col gap-2">
                        <h2 className="text-primary font-light text-[14px]">{`${Product.category}, ${Product.brand}`}</h2>
                        <h1 className="text-[15px]">{Product.model}</h1>

                        <div>
                            {Product.sale ? (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    {isOutOfStock ? (
                                            ''
                                        )
                                        :
                                        (
                                            <h3 className="text-gray-500 text-sm line-through">{`$${Product.price.toFixed(2)}`}</h3>

                                        )
                                    }
                                    <h3 className="text-black text-lg">{`$${Product.newPrice.toFixed(2)}`}</h3>
                                </div>
                            ) : (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    <h3 className="text-black text-lg">{`$${Product.price.toFixed(2)}`}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>

                <RatingStarts product={Product}/>
                <AddToCartButton product={Product} disable={isOutOfStock}/>
            </div>
        </div>
    );
}

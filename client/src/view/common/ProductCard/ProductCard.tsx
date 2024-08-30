import {Product} from "../../../model/Product";
import React from "react";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton";
import {Link} from "react-router-dom";
import path from "node:path";
import {RatingStarts} from "../RatingStarts/RatingStarts";

interface ProductCardProps {
    Product: Product;
}

export function ProductCard({Product}: ProductCardProps) {
    return (

        <div
            className="w-64 border-2 border-gray-300 mt-[3%] hover:border-primary hover:scale-105 transition-all duration-500 p-2 rounded-xl">
            <Link to={`/buy/${Product.id}`}>
                <div className="h-60 pt-4 flex items-center justify-center relative">
                    {Product.sale && (
                        <span
                            className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">
                        SALE!
                    </span>
                    )}
                    <img src={require(`../../../images/product/${Product.image}`)}
                         className="w-full h-auto object-cover rounded-lg" alt=""/>
                </div>
            </Link>
            <div className="flex items-center justify-center flex-col gap-2 h-52">
                <Link to={`/buy/${Product.id}`}>
                    <div className="flex justify-center items-center flex-col gap-2">
                        <h2 className="text-primary font-light text-[14px]">{`${Product.category}, ${Product.brand}`}</h2>
                        <h1 className="text-[15px]">{Product.model}</h1>

                        <div>
                            {Product.sale ? (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    <h3 className="text-gray-500 text-sm line-through">{`$${Product.price.toFixed(2)}`}</h3>
                                    <h3 className="text-black text-lg ">{`$${Product.newPrice.toFixed(2)}`}</h3>
                                </div>
                            ) : (
                                <div className="flex justify-center sm:justify-start items-center gap-1">
                                    <h3 className="text-black text-lg ">{`$${Product.price.toFixed(2)}`}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>

                <RatingStarts product={Product}/>
                <AddToCartButton product={Product}/>
            </div>
        </div>


    );
}

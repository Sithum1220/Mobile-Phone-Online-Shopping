import {Product} from "../../../model/Product";
import React from "react";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton";

interface ProductCardProps {
    Product: Product;
}

export function ProductCard({Product}: ProductCardProps) {
    return (
        <div
            className="w-64 border-2 border-gray-300 mt-[3%] hover:border-primary hover:scale-105 transition-all duration-500 p-2 rounded-xl">
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
            <div className="flex items-center justify-center flex-col gap-2 h-52">
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

                <RatingStars product={Product}/>
               <AddToCartButton product={Product}/>
            </div>
        </div>


    )
        ;
}

function RatingStars({product}: { product: Product }) {
    const ratingCounts = product.reviews.reduce((acc, review) => {
        acc[review.rate] = (acc[review.rate] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    const mostCommonHighestRate = Object.entries(ratingCounts).reduce((a, b) =>
        a[1] > b[1] ? a : b[1] === a[1] ? (Number(b[0]) > Number(a[0]) ? b : a) : b
    );

    const [displayedRate, displayedCount] = mostCommonHighestRate;

    return (
        <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
                <svg key={i}
                     className={`w-4 h-4 fill-current ${i < Number(displayedRate) ? 'text-yellow-400' : 'text-gray-300'}`}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                </svg>
            ))}
            {/*<span className="ml-2 text-sm text-gray-600">({displayedCount})</span>*/}
        </div>
    );
}
import React, { useEffect, useState } from "react";
import Item from "../../../images/OldProduct/Polaroid_Cube.png";
import Iphone15 from "../../../images/product/Iphone_15.png";
import dealOfTheDayProduct from '../../../data/dealOfTheDayProduct.json';
import { Product } from "../../../model/Product";

// @ts-ignore
const typedDealOfTheDayProduct: Product[] = dealOfTheDayProduct;

function RatingStars({ product }: { product: Product }) {
    const ratingCounts = product.reviews.reduce((acc, review) => {
        acc[review.rate] = (acc[review.rate] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    const mostCommonHighestRate = Object.entries(ratingCounts).reduce((a, b) =>
        a[1] > b[1] ? a : b[1] === a[1] ? (Number(b[0]) > Number(a[0]) ? b : a) : b
    );

    const [displayedRate] = mostCommonHighestRate;

    return (
        <div className="flex mb-2 justify-center sm:justify-start items-center">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 fill-current ${i < Number(displayedRate) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                </svg>
            ))}
        </div>
    );
}

export function DealOfTheDays() {
    const [timeLeft, setTimeLeft] = useState({days: 28, hours: 5, minutes: 34, seconds: 25});

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                const {days, hours, minutes, seconds} = prevTime;

                if (seconds > 0) {
                    return {...prevTime, seconds: seconds - 1};
                } else if (minutes > 0) {
                    return {...prevTime, minutes: minutes - 1, seconds: 59};
                } else if (hours > 0) {
                    return {...prevTime, hours: hours - 1, minutes: 59, seconds: 59};
                } else if (days > 0) {
                    return {...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59};
                } else {
                    clearInterval(interval);
                    return {days: 0, hours: 0, minutes: 0, seconds: 0};
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const mainProduct = typedDealOfTheDayProduct[0];
    const secondaryProduct = typedDealOfTheDayProduct[1];
    return (
        <div className="mx-auto max-w-[1240px] px-6 xl:px-10 py-7">
            <h1 className="text-xl sm:text-2xl font-light mb-4">Deal of the days</h1>
            <div className="flex flex-col lg:flex-row gap-4 ">
                <div className="p-4 bg-white shadow-md border-2 flex flex-col sm:flex-row border-gray-200 hover:border-primary hover:scale-[1.02] transition-all duration-500 cursor-pointer w-full lg:w-3/4 rounded-lg">
                    <div className="relative p-4 sm:p-10 w-full sm:w-1/2">
                        <span
                            className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-2xl">SALE!</span>
                        <div
                            style={{
                                backgroundImage: `url(${require(`../../../images/product/${mainProduct.image}`)})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className="absolute inset-0 w-full h-full rounded-xl">
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                        <RatingStars product={mainProduct}/>
                        <div className="text-center sm:text-left">
                            <h1 className="text-xl sm:text-2xl mb-2">{mainProduct.model}</h1>
                            <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                                <h3 className="text-gray-500 text-sm line-through">${mainProduct.price.toFixed(2)}</h3>
                                <h3 className="text-lg">${mainProduct.newPrice.toFixed(2)}</h3>
                            </div>
                            <p className="text-sm font-light mb-4">{typeof mainProduct.description === 'object' && mainProduct.description.details}</p>
                            <div>
                                <h1 className="text-lg mb-2">Hurry Up! Specials Offers</h1>
                                <div className="flex justify-center sm:justify-start gap-4">
                                    {['DAY', 'HRS', 'MIN', 'SEC'].map((label, index) => (
                                        <div key={index} className="text-center">
                                            <span className="block text-2xl sm:text-3xl font-thin">{Object.values(timeLeft)[index]}</span>
                                            <span className="block text-xs sm:text-sm text-gray-500">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#212529] shadow-md border-2 border-gray-200 rounded-xl w-full lg:w-1/4 p-4">
                    <div className="relative bg-auto mx-auto p-4 w-full h-full min-h-[200px]">
                        <div
                            style={{
                                backgroundImage: `url(${require(`../../../images/product/${secondaryProduct.image}`)})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.3,
                            }}
                            className="absolute inset-0 w-full h-full rounded-xl">
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-white text-lg font-light">Best Digital</h2>
                            <h1 className="text-2xl text-white font-thin mb-4">{secondaryProduct.model}</h1>
                            <div>
                                <h3 className="text-gray-400 text-sm line-through">${secondaryProduct.price.toFixed(2)}</h3>
                                <h3 className="text-3xl sm:text-4xl text-[#F9DB76] font-light">${secondaryProduct.newPrice}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
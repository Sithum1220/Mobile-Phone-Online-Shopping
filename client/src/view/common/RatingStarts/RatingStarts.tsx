import {Product} from "../../../model/Product";
import React from "react";

export function RatingStarts({product}: { product: Product }) {
    const ratingCounts = product.reviews.reduce((acc, review) => {
        acc[review.rate] = (acc[review.rate] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    const mostCommonHighestRate = Object.entries(ratingCounts).reduce((a, b) =>
        a[1] > b[1] ? a : b[1] === a[1] ? (Number(b[0]) > Number(a[0]) ? b : a) : b
    );

    const [displayedRate, displayedCount] = mostCommonHighestRate;

    return (
        <div className="flex mb-3">
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
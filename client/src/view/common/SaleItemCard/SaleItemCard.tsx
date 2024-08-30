import React, { useEffect, useState } from 'react';
import { Product } from '../../../model/Product';
import productList from '../../../data/product.json';
import {RatingStarts} from "../RatingStarts/RatingStarts";

interface TimeLeft {
    day: number;
    hrs: number;
    min: number;
    sec: number;
}

export function SaleItemCard() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ day: 28, hrs: 5, min: 34, sec: 25 });
    const [saleProducts, setSaleProducts] = useState<Product[]>([]);

    useEffect(() => {
        const filtered = productList.filter(item => item.sale);
        // @ts-ignore
        setSaleProducts(filtered);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                const { day, hrs, min, sec } = prevTime;

                if (sec > 0) return { ...prevTime, sec: sec - 1 };
                if (min > 0) return { ...prevTime, min: min - 1, sec: 59 };
                if (hrs > 0) return { ...prevTime, hrs: hrs - 1, min: 59, sec: 59 };
                if (day > 0) return { day: day - 1, hrs: 23, min: 59, sec: 59 };

                clearInterval(interval);
                return { day: 0, hrs: 0, min: 0, sec: 0 };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {saleProducts.map((item: Product) => (
                <ProductCard key={item.id} product={item} timeLeft={timeLeft} />
            ))}
        </div>
    );
}

interface ProductCardProps {
    product: Product;
    timeLeft: TimeLeft;
}

function ProductCard({ product, timeLeft }: ProductCardProps) {
    return (
        <div className="flex flex-col lg:flex-row items-center border border-gray-200 hover:border-primary transition-all duration-300 hover:scale-105 rounded-xl p-4">
            <ProductImage image={product.image} model={product.model} />
            <div className="flex flex-col flex-grow ml-3">
                <RatingStarts product={product} />
                <ProductInfo product={product} />
                <CountdownTimer timeLeft={timeLeft} />
            </div>
        </div>
    );
}

function ProductImage({ image, model }: { image: string; model: string }) {
    return (
        <div className="relative">
            <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">SALE!</span>
            <img className="w-32 h-auto object-cover rounded-lg" src={require(`../../../images/product/${image}`)} alt={model} />
        </div>
    );
}



function ProductInfo({ product }: { product: Product }) {
    return (
        <>
            <h1 className="text-base font-semibold text-center sm:text-left">{product.model}</h1>
            <h3 className={`text-sm text-gray-600 mb-2 text-center font-light sm:text-left ${product.variants.some(item => item.color !== '') ? 'block' : 'hidden'}`}>
                {product.variants.length > 0 && product.variants[0].color !== ''
                    ? product.variants[0].color
                    : 'No color available'
                }
            </h3>
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                <h3 className="text-gray-500 text-sm line-through-">{`$${product.price}`}</h3>
                <h3 className="text-black text-lg ">{`$${product.newPrice.toFixed()}`}</h3>
            </div>
        </>
    );
}

function CountdownTimer({ timeLeft }: { timeLeft: TimeLeft }) {
    return (
        <div className="flex justify-between mt-auto">
            {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="text-center">
                    <span className="block text-sm font-semibold">{value}</span>
                    <span className="block text-xs text-gray-500">{key.toUpperCase()}</span>
                </div>
            ))}
        </div>
    );
}
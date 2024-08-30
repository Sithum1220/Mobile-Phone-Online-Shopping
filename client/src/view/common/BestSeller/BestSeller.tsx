import React, {useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import {Product} from "../../../model/Product";
import productList from '../../../data/product.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/Store/Store";
import {ProductCard} from "../ProductCard/ProductCard";


export function BestSeller() {
    const [bestSeller, setBestSeller] = useState<Product[]>([]);
    const [currentSet, setCurrentSet] = useState(0);
    const sliderRef = useRef<Slider>(null);

    // const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        // @ts-ignore
        const filtered: Product[] = productList.filter(
            (item) =>
                item.reviews.length > 4 &&
                item.reviews.reduce((acc, review) => acc + review.rate, 0) / item.reviews.length > 4
        );
        setBestSeller(filtered);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (current: number) => setCurrentSet(Math.floor(current / 4)),
        // beforeChange: (current: number, next: number) => setCurrentSet(Math.floor(next / 4)),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const handleDotClick = (index: number) => {
        setCurrentSet(index);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index * 4);
        }
    };

    return (
        <div className="best-seller-slider">
            <h1 className="text-2xl font-thin">Best Seller</h1>
            <div className="flex justify-end">
                <button
                    className={`w-3 h-3 rounded-full mx-1 ${currentSet === 0 ? 'bg-text' : 'bg-gray-200'}`}
                    onClick={() => handleDotClick(0)}
                />
                <button
                    className={`w-3 h-3 rounded-full mx-1 ${currentSet === 1 ? 'bg-text' : 'bg-gray-200'}`}
                    onClick={() => handleDotClick(1)}
                />
            </div>
            <Slider ref={sliderRef} {...settings}>
                {bestSeller.map((product, index) => (
                    <div key={index} className="py-6 ml-2">
                       <ProductCard Product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
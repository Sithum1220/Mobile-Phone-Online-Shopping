import React, {useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import {RootObjectProduct} from "../../../model/Product";
import ProductItem from "../../../data/product.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AddToCartButton} from "../AddToCartButton/AddToCartButton";

export function BestSeller() {
    const [bestSeller, setBestSeller] =
        useState<RootObjectProduct[]>([]);
    const [currentSet, setCurrentSet] = useState(0);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const filtered: RootObjectProduct[] = ProductItem.find(item =>
            item.category === "BestSeller")?.product || [];
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
            <div className="flex justify-end mt-2">
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
                    <div key={index} className="py-6">
                        <div
                            className="border-2 border-gray-200 hover:border-primary transition-all duration-500
                             hover:scale-105 p-4 lg:p-6 rounded-xl flex flex-col justify-between h-full">
                            <div className="h-[150px] sm:h-[180px] lg:h-[210px] mb-4">
                                <img
                                    src={require(`../../../images/product/${product.image}`)}
                                    className="w-full h-full object-contain"
                                    alt={product.title}
                                />
                            </div>

                            <div className="flex flex-col justify-end h-[150px] sm:h-[180px] lg:h-[210px]">
                                <div className="text-center">
                                    <h3 className="text-xs lg:text-sm mb-2 text-primary">{product.itemCategory}</h3>
                                    <h1 className="font-light text-sm lg:text-base mb-1">{product.title}</h1>
                                    <h3 className="text-sm lg:text-base mb-2">{product.price}</h3>
                                    <div className="flex justify-center mb-3">
                                        {[...Array(4)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-3 h-3 lg:w-4 lg:h-4 fill-current text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12
                                                    18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                            </svg>
                                        ))}
                                        <svg
                                            className="w-3 h-3 lg:w-4 lg:h-4 fill-current text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12
                                                18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                        </svg>
                                    </div>
                                    <AddToCartButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
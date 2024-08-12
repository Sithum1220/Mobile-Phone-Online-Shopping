import React, {useEffect, useState} from "react";
import ProductItem from '../../../data/product.json';
import {RootObjectProduct} from "../../../model/Product";

export function RecentFeaturedProducts() {
    const tabs = ['Recent', 'Featured', 'Top Rated'];
    const [activeTab, setActiveTab] = useState('Recent');
    const [filteredProducts, setFilteredProducts] = useState<RootObjectProduct[]>([]);

    useEffect(() => {
        const filtered: RootObjectProduct[] = ProductItem.find(item => item.category === activeTab)?.product || [];
        setFilteredProducts(filtered);
    }, [activeTab]);

    return (
        <div className="">
            <div className="mx-auto max-w-[1240px] pt-8 lg:pt-14">
                <ul className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6 mb-6 lg:mb-0">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={`text-black opacity-80 text-sm lg:text-base hover:text-text relative pb-2 
                                cursor-pointer transition-all duration-300 ${
                                activeTab === tab
                                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 ' +
                                    'after:h-[2px] after:w-full after:bg-primary after:transition-transform ' +
                                    'after:duration-300 after:scale-x-100'
                                    : 'after:content-[""] after:absolute after:left-0 after:bottom-0 ' +
                                    'after:h-[2px] after:w-full after:bg-primary after:transition-transform' +
                                    ' after:duration-300 after:scale-x-0'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 lg:mt-10">
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="border-2 border-gray-200 hover:border-primary transition-all duration-500 hover:scale-105 p-4 lg:p-6 rounded-xl flex flex-col justify-between"
                    >
                        <div className="h-[150px] sm:h-[180px] lg:h-[210px] mb-4">
                            <img
                                src={require(`../../../images/product/${product.image}`)}
                                className="w-full h-full object-contain"
                                alt={product.title}
                            />
                        </div>

                        <div className="flex flex-col justify-end">
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
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                        </svg>
                                    ))}
                                    <svg
                                        className="w-3 h-3 lg:w-4 lg:h-4 fill-current text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                    </svg>
                                </div>
                                <div className="inline-block border-2 border-gray-200 rounded-full py-1 px-4 mt-2">
                                    <button className="text-xs lg:text-sm font-light">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
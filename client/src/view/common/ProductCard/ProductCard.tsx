import React, {useEffect, useState} from "react";
import ProductItem from '../../../data/product.json';
import {Product, RootObjectProduct} from "../../../model/Product";

export function ProductCard() {
    const tabs = ['Recent', 'Featured', 'Top Rated'];
    const [activeTab, setActiveTab] = useState('Recent');
    const [filteredProducts, setFilteredProducts] = useState<RootObjectProduct[]>([]);

    useEffect(() => {
        const filtered: RootObjectProduct[] = ProductItem.find(item => item.category === activeTab)?.product || [];
        setFilteredProducts(filtered);

    }, [activeTab]);

    return (
        <div>
            <div className="mx-auto max-w-[1240px] pt-14 hidden lg:flex">
                <ul className="flex space-x-6">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={`text-black opacity-80 text-[16px] hover:text-text relative pb-2 
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
            <div className="flex-row flex justify-between items-center mt-10">
                {filteredProducts.map((product, index) => (
                    <div className="border-2 border-gray-200 p-6  pt-8 flex flex-col justify-between w-[22.4%] rounded-xl">
                        <div className="h-[210px]">
                            <img src={require(`../../../images/product/${product.image}`)} className="w-[540px]"
                                 alt=""/>
                        </div>

                        <div className="flex flex-col h-[210px] justify-end">
                            <div className="flex items-center flex-col mt-10">
                                <h3 className="text-[12px] mb-2 text-primary">{product.itemCategory}</h3>
                                <h1 className="font-light">{product.title}</h1>
                                <h3>{product.price}</h3>
                                <div className="flex flex-row mt-2 justify-center items-center">
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current text-yellow-400"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                        </svg>
                                    ))}
                                    <svg className="w-4 h-4 fill-current text-gray-300"
                                         xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                    </svg>
                                </div>
                                <div className="border-2 border-gray-200 rounded-3xl py-1 px-5 mt-5 w-32">
                                    <button className="text-[12px] font-light">ADD TO CART</button>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>

    );
}
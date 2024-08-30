import React, {useEffect, useState} from "react";
import {Product} from "../../../model/Product";
import productList from '../../../data/product.json';
import {ProductCard} from "../ProductCard/ProductCard";

export function RecentFeaturedProducts() {
    const tabs = ['Recent', 'Featured', 'Top Rated'];
    const [activeTab, setActiveTab] = useState('Recent');
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

    useEffect(() => {
        let selectedProducts: Product[] = [];

        if (activeTab === 'Recent') {
            // @ts-ignore
            selectedProducts = productList.slice(-4);

        }else if (activeTab === 'Featured'){
            // @ts-ignore
            selectedProducts = productList.filter(item => item.featured).slice(0,4);
        }else {
            // @ts-ignore
            selectedProducts = productList
                .filter(item => item.reviews.length > 4)
                .sort((a, b) => {
                    const avgRatingA = a.reviews.reduce((sum, review) => sum + review.rate, 0) / a.reviews.length;
                    const avgRatingB = b.reviews.reduce((sum, review) => sum + review.rate, 0) / b.reviews.length;
                    return avgRatingB - avgRatingA;
                })
                .slice(0, 4);
        }
        setDisplayedProducts(selectedProducts);
    }, [activeTab]);

    return (
        <div>
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

            <div className="flex mt-[2%] flex-wrap justify-center gap-11">
                {displayedProducts.map(product => (
                    <ProductCard key={product.id} Product={product}/>
                ))}
            </div>

        </div>
    );
}
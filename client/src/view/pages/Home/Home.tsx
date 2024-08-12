import iphone15ProMax from '../../../images/iphone15promax.png';
import bgGrid from '../../../images/grid-bg.jpg';
import {ServicesCard} from "../../common/ServicesCard/ServicesCard";
import {SaleItemCard} from "../../common/SaleItemCard/SaleItemCard";
import React, {useState} from "react";
import {RecentFeaturedProducts} from "../../common/RecentFeaturedProducts/RecentFeaturedProducts";
import {DealOfTheDays} from "../../common/DealOfTheDays/DealOfTheDays";
import {BestSeller} from "../../common/BestSeller/BestSeller";

export function Home() {


    return (
        <div>
            <div className="bg-[#212529] overflow-hidden">
                <div
                    className="mx-auto flex flex-col-reverse md:flex-row max-w-[1240px] py-7 h-auto md:h-[490px]
                    justify-between items-center">
                    <div className="flex flex-col gap-8 p-5 md:pl-10 items-start text-center md:text-left">
                        <h1 className="text-white tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                        font-light">
                            New Collection <br className="hidden md:block"/> Coming to town
                        </h1>
                        <p className="text-text text-base sm:text-lg md:text-xl font-light">
                            Introducing fashionable & gorgeous <br className="hidden md:block"/>
                            phone From design to stylish wearable
                        </p>
                        <button className="bg-primary text-white font-light text-sm sm:text-base md:text-[12px] py-3
                         px-8 rounded-3xl mt-8
                        hover:text-black hover:bg-white transition-colors duration-500 ease-in-out">
                            READ MORE
                        </button>
                    </div>
                    <img src={iphone15ProMax} className="w-[70%] md:w-[30%] mb-8 md:mb-0" alt="iPhone 15 Pro Max"/>
                </div>
            </div>
            <div
                style={{backgroundImage: `url(${bgGrid})`}}
                className="bg-[#fcfcfc] mx-auto bg-auto w-full">
                <ServicesCard/>
            </div>

            <div className="mx-auto max-w-[1240px] py-7 px-10">
                <SaleItemCard/>
                <RecentFeaturedProducts/>
            </div>
            <div
                style={{backgroundImage: `url(${bgGrid})`}}
                className="bg-[#fcfcfc] bg-auto mx-auto p-4 w-full">
                <DealOfTheDays/>
            </div>

            <div className="mx-auto max-w-[1240px] py-7 px-10">
                <BestSeller />
            </div>
        </div>
    );
}

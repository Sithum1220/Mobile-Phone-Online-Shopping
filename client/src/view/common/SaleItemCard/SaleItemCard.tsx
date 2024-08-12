import SaleItemList from '../../../data/sale-item.json';
import {SaleItem} from "../../../model/SaleItem";
import {useEffect, useState} from "react";

export function SaleItemCard() {
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

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {SaleItemList.map((item: SaleItem, index) => (
                <div className="flex flex-col lg:flex-row items-center border border-gray-200 hover:border-primary transition-all duration-300 hover:scale-105 rounded-xl p-4 transition-all duration-300" key={index}>
                    <div className="relative mb-4">
                        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">SALE!</span>
                        <img className="w-full h-auto object-cover rounded-lg" src={item.image} alt={item.title}/>
                    </div>

                    <div className="flex flex-col flex-grow">
                        <div className="flex mb-2 justify-center sm:justify-start">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                </svg>
                            ))}
                            <svg className="w-4 h-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                            </svg>
                        </div>
                        <h1 className="text-base font-semibold text-center sm:text-left">{item.title}</h1>
                        <h3 className="text-sm text-gray-600 mb-2 text-center sm:text-left">{item.color}</h3>

                        <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                            <h3 className="text-gray-500 text-sm line-through">{item.oldPrice}</h3>
                            <h3 className="text-black text-lg font-bold">{item.newPrice}</h3>
                        </div>

                        <div className="flex justify-between mt-auto">
                            {['DAY', 'HRS', 'MIN', 'SEC'].map((label, index) => (
                                <div key={index} className="text-center">
                                    <span className="block text-sm font-semibold">
                                        {Object.values(timeLeft)[index]}
                                    </span>
                                    <span className="block text-xs text-gray-500">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
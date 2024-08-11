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
        <div className="flex flex-row justify-center gap-8 xl:gap-5">
            {SaleItemList.map((item: SaleItem, index) => (
                <div className="flex flex-col xl:flex-row border-[1px] pl-2 w-full hover:border-primary border-gray-200 rounded-xl p-5 gap-3" key={index}>
                    <div className="relative flex justify-center">
                       <span
                           className="absolute top-[12%] left-[20%] xl:top-5 xl:left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-xl">SALE!</span>
                        <img className="xl:w-44 w-64" src={item.image} alt="Meizu M6 Note"/>
                    </div>

                    <div>
                        <div className="text-yellow-400 flex mb-2 xl:justify-start justify-center">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                                </svg>
                            ))}
                            <svg className="w-4 h-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.817 1.508 8.213L12 18.897l-7.444 4.439 1.508-8.213L.587 9.306l8.332-1.151z"/>
                            </svg>
                        </div>
                        <div className="flex items-center xl:items-start flex-col xl:justify-start justify-center">
                            <h1 className="text-[16px]">{item.title}</h1>
                            <h3 className="text-[16px]">{item.color}</h3>
                        </div>

                        <div className="mt-3 flex flex-row items-center gap-3 xl:justify-start justify-center">
                            <h3 className="text-text text-[14px] line-through">{item.oldPrice}</h3>
                            <h3 className="text-black text-[16px]">{item.newPrice}</h3>
                        </div>
                        <div className="flex justify-between mt-8 xl:px-0 px-3">
                            {['DAY', 'HRS', 'MIN', 'SEC'].map((label, index) => (
                                <div key={index} className="text-center">
                                    <span className="block text-lg font-semibold">
                                        {Object.values(timeLeft)[index]}
                                    </span>
                                    <span className="block text-xs font-semibold text-text">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            ))}
        </div>
    );
}
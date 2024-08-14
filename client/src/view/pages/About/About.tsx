import iphone13 from '../../../images/iPhone_13.png'
import laptopBG from '../../../images/laptopBg.jpg'
import CIcon from "@coreui/icons-react";
import {cilPaperPlane} from "@coreui/icons";

export function About() {
    return (
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10 py-7">
            <div className="bg-[#EEF1F6] flex flex-col sm:flex-row justify-between w-full rounded-xl sm:h-[28rem]">
                <div className="p-6 sm:p-12 flex justify-center items-center sm:pl-10 lg:pl-28">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-center sm:text-left">Hello! <br/> Here we are.</h1>
                </div>
                <div className="flex items-end justify-center sm:justify-end sm:pr-10 lg:pr-24">
                    <img src={iphone13} className="w-[280px] sm:w-[400px] lg:w-[520px]" alt=""/>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-[8%]">
                <div className="w-full sm:w-1/2 pr-0 sm:pr-10 mb-6 sm:mb-0">
                    <h1 className="text-xl">We will help you to choose</h1>
                    <p className="mt-6 text-xl sm:text-2xl lg:text-[28px] font-extra-light opacity-75">We offer a wide range of electronics,
                        household appliances and various consumer products from
                        clothing to alcoholic beverages.</p>
                </div>
                <div className="flex justify-end w-full sm:w-1/2">
                    <img src={laptopBG} className="w-full shadow-md rounded-xl" alt=""/>
                </div>
            </div>

            <div className="mt-[8%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full bg-white mt-[2%]">
                    {[
                        { icon: "home", number: "2345", text: "goods available for purchase" },
                        { icon: cilPaperPlane, number: "3758", text: "returning customers" },
                        { icon: "help", number: "837", text: "of users visited" },
                        { icon: "rocket_launch", number: "1285", text: "new arrivals" }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-6 sm:p-12 gap-5">
                            {typeof item.icon === "string" ? (
                                <span className="material-symbols-outlined text-primary text-[44px] font-light">
                                    {item.icon}
                                </span>
                            ) : (
                                <CIcon className="text-primary size-10" icon={item.icon} />
                            )}
                            <div className="flex flex-col items-center">
                                <h1 className="text-4xl sm:text-5xl font-extra-light">{item.number}</h1>
                                <p className="text-[14px] text-text mt-[3%] text-center">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between my-[8%]">
                <div className="flex justify-end w-full sm:w-1/2 mb-6 sm:mb-0">
                    <img src={laptopBG} className="w-full shadow-md rounded-xl" alt=""/>
                </div>
                <div className="w-full sm:w-1/2 pl-0 sm:pl-10 lg:pl-20 flex flex-col justify-center">
                    <h1 className="text-xl">We are trusted</h1>
                    <p className="mt-6 text-xl sm:text-2xl lg:text-[28px] font-extra-light opacity-75">Our main goal and fundamental principle
                        in the work is the satisfaction of customers – both retail buyers and organizations.</p>
                </div>
            </div>
        </div>
    );
}
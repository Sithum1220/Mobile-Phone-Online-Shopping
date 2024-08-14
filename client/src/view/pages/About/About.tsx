import iphone13 from '../../../images/iPhone_13.png'
import laptopBG from '../../../images/laptopBg.jpg'

export function About() {
    return (
        <div className="mx-auto max-w-[1240px] px-10 py-7">
            <div className="bg-[#EEF1F6] flex justify-between w-full rounded-xl h-[28rem]">
                <div className="p-12 flex justify-center items-center pl-28">
                    <h1 className="text-6xl font-extralight">Hello! <br/> Here we are.</h1>
                </div>
                <div className="flex items-end pr-24">
                    <img src={iphone13} className="w-[520px]" alt=""/>
                </div>
            </div>

            <div className="flex justify-between mt-[8%] ">
                <div className="w-1/2 pr-10">
                    <h1 className="text-xl">We will help you to choose</h1>
                    <p className="mt-6 text-[28px] font-extra-light opacity-75">We offer a wide range of electronics,
                        household appliances and various consumer products from
                        clothing to alcoholic beverages.</p>
                </div>
                <div className="flex justify-end w-1/2">
                    <img src={laptopBG} className="w-full shadow-md rounded-xl" alt=""/>
                </div>
            </div>

            <div className="flex justify-between mt-[8%] ">

                <div className="flex justify-end w-1/2">
                    <img src={laptopBG} className="w-full shadow-md rounded-xl" alt=""/>
                </div>

                <div className="w-1/2 pl-20  flex flex-col justify-center">
                    <h1 className="text-xl">We are trusted</h1>
                    <p className="mt-6 text-[28px] font-extra-light opacity-75">Our main goal and fundamental principle
                        in the work is the satisfaction of customers – both retail buyers and organizations.</p>
                </div>
            </div>
        </div>
    );
}
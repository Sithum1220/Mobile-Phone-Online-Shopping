import React, {useState} from 'react';

export function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);


    return (
        <div className="max-w-full bg-[#F2F2F2]">
            <div
                className="md:flex justify-between items-center max-w-[1240px] mx-auto py-1 md:px-4 text-black
                text-opacity-50">

                {/*web welcome*/}
                <div className="flex gap-4 md:gap-8  items-center">
                    <h1 className="text-[12px] hidden  md:block text-opacity-50 text-black">Welcome to Devicer</h1>
                    <div className="hidden  md:block">
                        <span className="text-[12px] text-black me-2 opacity-65">Customer Care</span>
                        <a className="text-[12px] hover:text-blue-600 text-black opacity-50"
                           href="tel:1-800-123-4567"> 1-800-123-4567</a>
                    </div>
                </div>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                    {/*mobile menu icon*/}
                    <div className={`flex justify-center md:hidden pt-6 gap-4 w-full md:gap-8 items-center `}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="#5f6368" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <path
                                d={isOpenMenu ? "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 " +
                                    "224-56 56-224-224-224 224Z" : "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-" +
                                    "200v-80h720v80H120Z"}/>
                        </svg>
                    </div>


                    {/*mobile ul*/}
                    <div
                        className={`md:hidden flex justify-center bg-[#363636] py-4 mt-4  ${isOpenMenu ? "block" : "hidden"}
                     ${isOpen ? "block" : "hidden"}`}>
                        <ul className="space-y-6">
                            <li><a href="/signin" className="text-gray-300  opacity-80 text-[12px] hover:text-white">Sign
                                Up</a></li>
                            <li><a href="/signup" className="text-gray-300  opacity-80 text-[12px] hover:text-white">Sign
                                In</a></li>
                            <li><a href="/mylist" className="text-gray-300  opacity-80 text-[12px] hover:text-white">My
                                List</a></li>
                        </ul>
                    </div>


                    {/*mobile welcome*/}
                    <div className={`flex justify-center md:hidden py-8 gap-4 w-full md:gap-8 items-center `}>
                        <h1 className="text-[12px] text-opacity-50 text-black">Welcome to Devicer</h1>
                        <div className="">
                            <span className="text-[12px] text-black me-2 opacity-65">Customer Care</span>
                            <a className="text-[12px] hover:text-blue-600 text-black opacity-50"
                               href="tel:1-800-123-4567"> 1-800-123-4567</a>
                        </div>
                    </div>
                </div>


                {/*mobile arrow icon*/}
                <div className="w-full flex justify-center md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#5f6368"
                        onClick={() => setIsOpen(!isOpen)}

                    >
                        <path
                            d={isOpen
                                ? "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"
                                : "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                            }
                        />
                    </svg>
                </div>


                {/*web ul*/}
                <div className="hidden  md:block">
                    <ul className="flex space-x-6">
                        <li><a href="/signin" className="text-black opacity-80 text-[12px] hover:text-blue-700">Sign
                            Up</a></li>
                        <li><a href="/signup" className="text-black opacity-80 text-[12px] hover:text-blue-700">Sign
                            In</a></li>
                        <li><a href="/mylist" className="text-black opacity-80 text-[12px] hover:text-blue-700">My
                            List</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
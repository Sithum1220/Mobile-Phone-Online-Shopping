import logo from '../../../images/devicer-logo.png';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function Header() {
    const [showFeaturesPopup, setShowFeaturesPopup] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // @ts-ignore
    const count = useSelector((state) => state.counter.value);
    // @ts-ignore
    const total = useSelector((state) => state.price.value);

    return (
        <div className={`sticky top-0 z-40 bg-white ${hasScrolled ? 'shadow-xl' : ''}`}>
            <div className="mx-auto flex max-w-[1240px] px-10 py-7 justify-center flex-col lg:flex-row
            lg:justify-between items-center">
                <img src={logo} className="w-[140px]" alt="Devicer logo"/>
                <div className="lg:relative lg:w-[62%] hidden lg:block">
                    <input
                        className="rounded-3xl w-full px-5 py-3 border-[2px] border-blue-600 pl-10"
                        type="text"
                        placeholder="Search"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                         fill="#5f6368" className="lg:absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5
                          text-blue-600">
                        <path d="M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55
                        0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0
                        173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15
                        42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65
                        53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66
                        130.96q53.65 53.66 130.96 53.66Z"/>
                    </svg>
                </div>
                <div className="flex-row items-center gap-3 hidden lg:flex">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                             fill="#5f6368">
                            <path d="M291.02-98.31q-26.74 0-45.22-18.81-18.49-18.82-18.49-45.71T246-208.32q18.7-18.6
                         45.43-18.6 26.72 0 45.42 18.81 18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71
                         18.6Zm387.69 0q-26.73 0-45.22-18.81Q615-135.94 615-162.83t18.7-45.49q18.69-18.6
                         45.42-18.6t45.42 18.81q18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71
                         18.6ZM232.69-745.23l111.54 232.61h278.38q3.47 0 6.35-1.73 2.89-1.73
                         4.42-4.8l118.47-215.31q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27h-513Zm-23.07-45.38h554.81q24.51 0
                         37.08 21.19 12.56 21.19.56 42.96L679.14-503.74q-9.99 16.59-25.62 26.55-15.64 9.96-33.75
                         9.96H324l-55.23 102.07q-2.69 4.62 0 10.01 2.69 5.38 8.46 5.38h466v45.38H283.92q-37.77
                         0-54.53-26.07-16.77-26.08.3-57.62l64.39-117.23-151.23-319.31H67.92V-870h104.31l37.39
                         79.39Zm134.61 277.99h285.69-285.69Z"/>
                        </svg>
                        {count > 0 && (
                            <span
                                className="absolute -top-2 -right-1 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {count}
                        </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[12px]">Your Cart</label>
                        <label className="text-[16px]">${`${(total).toFixed(2)}`}</label>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-[1240px] px-10 py-4 hidden lg:flex">
                <ul className="flex space-x-6">
                    <Link to={"/"}>
                        <li><a href="#"
                               className="text-black opacity-80 text-[16px] hover:text-blue-700 transition duration-300">Home</a>
                        </li>
                    </Link>
                    <li className="relative transition duration-300"
                        onMouseEnter={() => setShowFeaturesPopup(true)}
                        onMouseLeave={() => setShowFeaturesPopup(false)}
                    >
                        <a
                            href="#"
                            className="text-black opacity-80 text-[16px] hover:text-blue-700"

                        >
                            Features
                        </a>
                        <div
                            className={`absolute top-full left-0 bg-white shadow-3xl rounded-md flex justify-start
                                        flex-col py-4 w-44 transition-all duration-300 ease-in-out ${
                                showFeaturesPopup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                            }`}
                            onMouseEnter={() => setShowFeaturesPopup(true)}
                            onMouseLeave={() => setShowFeaturesPopup(false)}
                        >

                            <ul className="flex flex-col">
                                <Link to={"/about"}>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-thin transition duration-300">About</li>
                                </Link>
                                <Link to={"/contact"}>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-thin transition duration-300">Contact</li>
                                </Link>
                                <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-thin transition duration-300">News</li>
                            </ul>

                        </div>
                    </li>
                    <li><a href="#"
                           className="text-black opacity-80 text-[16px] hover:text-blue-700 transition duration-300">Shop</a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row justify-between items-center p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                     fill="#5f6368">
                    <path d="M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55
                    0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07
                    102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23
                    251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65
                    53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66
                    130.96q53.65 53.66 130.96 53.66Z"/>
                </svg>


                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                         fill="#5f6368">
                        <path d="M291.02-98.31q-26.74 0-45.22-18.81-18.49-18.82-18.49-45.71T246-208.32q18.7-18.6
                         45.43-18.6 26.72 0 45.42 18.81 18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71
                         18.6Zm387.69 0q-26.73 0-45.22-18.81Q615-135.94 615-162.83t18.7-45.49q18.69-18.6
                         45.42-18.6t45.42 18.81q18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71
                         18.6ZM232.69-745.23l111.54 232.61h278.38q3.47 0 6.35-1.73 2.89-1.73
                         4.42-4.8l118.47-215.31q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27h-513Zm-23.07-45.38h554.81q24.51 0
                         37.08 21.19 12.56 21.19.56 42.96L679.14-503.74q-9.99 16.59-25.62 26.55-15.64 9.96-33.75
                         9.96H324l-55.23 102.07q-2.69 4.62 0 10.01 2.69 5.38 8.46 5.38h466v45.38H283.92q-37.77
                         0-54.53-26.07-16.77-26.08.3-57.62l64.39-117.23-151.23-319.31H67.92V-870h104.31l37.39
                         79.39Zm134.61 277.99h285.69-285.69Z"/>
                    </svg>
                    {cartItemCount > 0 && (
                        <span
                            className="absolute -top-2 -right-1 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {cartItemCount}
                        </span>
                    )}
                </div>

                <div className="border-2 border-black rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#5f6368">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

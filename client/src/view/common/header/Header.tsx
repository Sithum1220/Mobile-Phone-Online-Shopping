import logo from '../../../images/devicer-logo.png';
import React from "react";

export function Header() {
    return (
        <div className="sticky">
            <div className="mx-auto flex max-w-[1240px] px-10 py-7 justify-between items-center">
                <img src={logo} className="w-[140px]" alt="Devicer logo"/>
                <input className="rounded-3xl w-[62%] px-5 py-3 border-[2px] border-blue-600" type="text"
                       placeholder="Search"/>
                <div className="flex flex-row items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                         fill="#5f6368">
                        <path d="M291.02-98.31q-26.74 0-45.22-18.81-18.49-18.82-18.49-45.71T246-208.32q18.7-18.6
                        45.43-18.6 26.72 0 45.42 18.81 18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71
                        18.6Zm387.69 0q-26.73 0-45.22-18.81Q615-135.94 615-162.83t18.7-45.49q18.69-18.6 45.42-18.6t45.42
                        18.81q18.69 18.81 18.69 45.71 0 26.89-18.81 45.49-18.82 18.6-45.71 18.6ZM232.69-745.23l111.54
                        232.61h278.38q3.47 0 6.35-1.73 2.89-1.73 4.42-4.8l118.47-215.31q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27h-513Zm-23.07-45.38h554.81q24.51
                        0 37.08 21.19 12.56 21.19.56 42.96L679.14-503.74q-9.99 16.59-25.62 26.55-15.64 9.96-33.75 9.96H324l-55.23
                        102.07q-2.69 4.62 0 10.01 2.69 5.38 8.46 5.38h466v45.38H283.92q-37.77 0-54.53-26.07-16.77-26.08.3-57.62l64.39-117.23-151.23-319.31H67.92V-870h104.31l37.39
                        79.39Zm134.61 277.99h285.69-285.69Z"/>
                    </svg>
                    <div className="flex flex-col">
                        <label className="text-[12px]" htmlFor="">Your Cart</label>
                        <label className="text-[16px]" htmlFor="">$0.00</label>
                    </div>

                </div>
            </div>

            <div className="mx-auto flex max-w-[1240px] px-10 py-4">
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-black opacity-80 text-[16px] hover:text-blue-700">Home
                    </a></li>
                    <li><a href="#" className="text-black opacity-80 text-[16px] hover:text-blue-700">Features
                    </a></li>
                    <li><a href="#" className="text-black opacity-80 text-[16px] hover:text-blue-700">Shop
                    </a></li>
                </ul>
            </div>
        </div>

    );
}
// @ts-ignore
import {Send as SendIcon} from '@mui/icons-material';
import CIcon from '@coreui/icons-react';
import {cilHome, cilPaperPlane} from "@coreui/icons";

export function ServicesCard() {
    return (
        <div className="px-10 py-7 mx-auto max-w-[1240px]">
        <div
            className="border-[1px] border-gray-200 grid lg:grid-rows-1 md:grid-rows-2 grid-cols-4 flex-wrap w-full lg:w-auto bg-white mt-[2%]">
            <div
                className="border-r-[1px] border-gray-200] flex lg:col-span-1 md:col-span-2 col-span-4 flex-row items-center p-12 gap-5">
              <span className="material-symbols-outlined text-primary text-[44px] font-light">
                        home
               </span>

                <div className="flex flex-col">
                    <h1 className="text-lg">Home Shipping</h1>
                    <p className="text-[14px] text-text">Free for all oder</p>
                </div>
            </div>

            <div
                className="border-r-[1px] border-gray-200] flex flex-row lg:col-span-1 md:col-span-2 col-span-4 items-center p-12 gap-5">
                <CIcon className="text-primary size-10" icon={cilPaperPlane}/>

                <div className="flex flex-col">
                    <h1 className="text-lg">Home Shipping</h1>
                    <p className="text-[14px] text-text">Free for all oder</p>
                </div>
            </div>

            <div
                className="border-r-[1px] border-gray-200] lg:col-span-1 md:col-span-2 col-span-4 flex flex-row items-center p-12 gap-5">
               <span className="material-symbols-outlined text-primary text-[44px] font-light">
                        help
               </span>

                <div className="flex flex-col">
                    <h1 className="text-lg">Home Shipping</h1>
                    <p className="text-[14px] text-text">Free for all oder</p>
                </div>
            </div>

            <div
                className="border-gray-200] flex lg:col-span-1 md:col-span-2 col-span-4 flex-row items-center p-12 gap-5">
               <span className="material-symbols-outlined text-primary text-[44px] font-light">
                        rocket_launch
               </span>

                <div className="flex flex-col">
                    <h1 className="text-lg">Home Shipping</h1>
                    <p className="text-[14px] text-text">Free for all oder</p>
                </div>
            </div>

        </div>
        </div>
    );
}
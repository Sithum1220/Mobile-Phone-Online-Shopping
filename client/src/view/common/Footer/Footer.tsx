import {Facebook, Instagram, Twitter, YouTube} from "@mui/icons-material";
import {FooterCategories} from "../FooterCategories/FooterCategories";

export function Footer() {
    return (
        <div className="bg-[#212121]">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <FooterCategories
                        title={"Products"}
                        txt1={"Apple Watch Series"}
                        txt2={"Refurbished iPad 4th"}
                        txt3={"Apple 9.7″ iPad"}
                        txt4={"Apple iPhone 6s 16GB"}
                        txt5={"Apple Magic Mouse"}
                    />

                    <FooterCategories
                        title={"Customer Service"}
                        txt1={"News"}
                        txt2={"FAQ"}
                        txt3={"Shop"}
                        txt4={"About us"}
                        txt5={"Contacts"}
                    />

                    <FooterCategories
                        title={"Socials"}
                        txt1={"Twitter"}
                        txt2={"YouTube"}
                        txt3={"Instagram"}
                        txt4={"Snapchat"}
                        txt5={"Facebook"}
                    />

                    <FooterCategories
                        title={"Customer Care"}
                        txt1={"Sale"}
                        txt2={"Shop"}
                        txt3={"Cart"}
                        txt4={"My Orders"}
                        txt5={"Contacts"}
                    />
                </div>
            </div>
            <div className="w-full h-[0.8px] bg-text opacity-20"></div>
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <h1 className="font-thin text-text opacity-65 text-[13px] text-center sm:text-left">
                        This is a sample website - Devicer © 2024 / All Rights Reserved
                    </h1>
                    <ul className="flex flex-row gap-3">
                        <li><a href="#" aria-label="Facebook">
                            <Facebook className="text-text opacity-60 hover:opacity-100 transition-opacity"/>
                        </a></li>
                        <li><a href="#" aria-label="Instagram">
                            <Instagram className="text-text opacity-60 hover:opacity-100 transition-opacity"/>
                        </a></li>
                        <li><a href="#" aria-label="Twitter">
                            <Twitter className="text-text opacity-60 hover:opacity-100 transition-opacity"/>
                        </a></li>
                        <li><a href="#" aria-label="YouTube">
                            <YouTube className="text-text opacity-60 hover:opacity-100 transition-opacity"/>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
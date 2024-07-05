import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import logo from "../../../images/devicer-logo.png"
export function NavBar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Sign Up' },
        { id: 2, text: 'Sign In' },
        { id: 3, text: 'My List' },
    ];

    return (
        <div className="max-w-full bg-[#F2F2F2]">
            <div className='flex justify-between items-center h-10 max-w-[1240px] mx-auto px-4 text-black text-opacity-50'>
                {/* Logo */}
                <div className="flex gap-4 md:gap-8 items-center">
                    <h1 className='text-[14px]  text-opacity-50 text-black'>Welcome to Devicer</h1>
                    <div className="hidden  md:block">
                        <span className="text-[15px] text-black me-2 opacity-55">Customer Care</span>
                        <a className="text-[15px] hover:text-blue-600 text-black opacity-50" href="tel:1-800-123-4567"> 1-800-123-4567</a>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:text-blue-600 text-[14px] rounded-xl m-2 cursor-pointer duration-300'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[50%] h-full  border-r-gray-900 bg-[#F2F2F2] ease-in-out duration-500'
                            : 'ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    {/*<h1 >Devicer.</h1>*/}
                    <img className='w-[100px] font-bold text-[#00df9a] m-4' src={logo} alt=""/>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#3452FF] duration-300 hover:text-white cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
        ;
}
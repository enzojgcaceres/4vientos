import React, {useEffect, useState} from "react";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io"; 
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import logoLigth from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/LogoDuBlanc.jpeg";
import logoDark from "../../assets/Marucha/WhatsApp Unknown 2024-05-14 at 22.47.54/LogoDark.jpeg";
import { useSelector } from "react-redux";


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Tienda",
        link: "/#shop",
    },
    {
        id: 3,
        name: "Nosotros",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Productos en tendencia",
        link: "/#",
    },
    {
        id: 2,
        name: "Los + vendidos",
        link: "/#",
    },
    {
        id: 3,
        name: "Los mejores calificados",
        link: "/#",
    }
]

const Navbar = ( { handleOrderPopup } ) =>{
    const theme = useSelector((state) => state.theme.theme);
    const logoImgRef = React.useRef(null)

    // useEffect(() => {
    //     const storedTheme = localStorage.getItem('theme')

    //         setIsDarkMode(storedTheme === 'dark')
        
    // } , [])

    // useEffect(() => {
    //     if(logoImgRef.current) {
    //         logoImgRef.current.src = isDarkMode ? logoDark : logoLigth
    //     }
    // }, [isDarkMode])

    useEffect(() => {
        if(logoImgRef.current) {
            logoImgRef.current.src = theme === 'dark' ? logoDark : logoLigth
        }
    }, [theme]);

    return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4" >
            <div className="container flex justify-between items-center">
                {/* Logo and links section */}
                    <div className="flex items-center gap-4">
                    <img ref={logoImgRef} src={logoLigth} alt="logo" className="h-12 sm:h-16" />
                        {/* <img src={logoLigth} alt="logo" className= {`h-12 sm:h-16`} /> */}
                        {/* <img ref={logoImgRef} src={logoLigth} alt="logo" className= {`h-12 sm:h-16 ${isDarkMode ? 'darklogo' : ''}`} /> */}
                        {/* <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl " >4 Vientos +</a> */}
                    {/* Menu items */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4" >
                            {
                                MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200" > 
                                        {" "}
                                        {data.name} </a>
                                    </li>
                                ))}
                            {/* Dropdown */}
                            <li className="relative cursor-pointer group" >
                                <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2" > Quick Links 
                                <span>
                                <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                </span>
                                </a>

                                {/* Dropdown links */}
                                <div className="fixed z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white" >
                                    <ul className="space-y-2" >
                                        {
                                            DropdownLinks.map((data, index) =>(
                                                <li key={index}>
                                                    <a className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold" href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </li>
                        </ul>
                    </div>
                    </div>
                {/* Navbar Right section */}  
                <div className="flex justify-between items-center gap-4">
                    {/* search bar section */}
                    <div className="relative group hidden sm:block">
                    <input type="text" placeholder="Search" className="search-bar" /> 
                    <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                    </div>
                    {/* order button section */}
                    <button className="relative p-3" onClick={handleOrderPopup} >
                    <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                    <div
                    className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs"
                    >
                        4
                    </div>
                    </button>
                    {/* dark mode section */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>    
        </div>    
    </div>
    );
};

export default Navbar;
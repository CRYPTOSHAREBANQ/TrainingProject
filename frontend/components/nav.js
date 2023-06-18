import React, { useState } from "react";
// import { ethers } from "ethers";

const Nav = () => {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState("hidden");



    React.useEffect(() => {
        // connectMetamask();
    }, []);

    return (
        <div>
            <nav className=" border-gray-200 bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span
                        
                        className="flex items-center"
                    >
                        {/* <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG8D7QD3f5dMQwa10YH-Uu5rZx5_cO4g11gGw3AP5HbLGKBoqKcZj1zN_7J8oAwHEudgPW5fI5fgaEBIkbNOZq1zTGuK5wuak26ox16BtDrp6K23LmHZutP-R1h21G23IqKQxH8511t-UaQElYey-9zX-XERddZIS73clCV0hyAH7qA_Tlv9Wh0mup/s500/Gold%20Luxury%20Initial%20Circle%20Logo.png"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Training Project
                        </span>
                    </span>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={() =>{if(mobileMenuOpen == "hidden"){ setMobileMenuOpen("")}else{setMobileMenuOpen("hidden")}}}

                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${mobileMenuOpen} w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                                <a
                                    href="./"
                                    className="block py-2 pl-3 pr-4  rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>

                            {/* <li>
                                <a
                                    // href={`./transaction?q=${mAddress}`}
                                    className="block py-2 pl-3 pr-4  rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                                >
                                    Transaction History
                                </a>
                            </li> */}
                            
                        </ul>
                    </div>
                </div>
                <div className=" text-slate-400 text-center text-sm ">
                    {/* {address} */}
                </div>
            </nav>
        </div>
    );
};

export default Nav;

import React from "react";

const Form = () => {
    return (
        <div className=" max-w-2xl  m-auto mt-40 ">
            <div className="flex w-2xl items-center justify-center">
            
                <a href="./data" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create Ethereum Wallet
                    </span>
                </a>

                <a href="./data/bitcoin" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 text-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create Bitcoin Wallet
                    </span>
                </a>
            
            </div>
        </div>
    );
};

export default Form;

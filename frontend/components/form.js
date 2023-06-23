import React from "react";

const Form = () => {
    return (
        <div className=" max-w-2xl  m-auto mt-40 ">
            <div className="flex w-2xl items-center justify-center">
            
                <a href="./data" className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Create CryptoAPI Wallet
                    </span>
                </a>
            
            </div>
        </div>
    );
};

export default Form;

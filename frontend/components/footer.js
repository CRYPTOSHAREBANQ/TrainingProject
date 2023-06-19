import React from "react";

const Footer = () => {
    return (
        <div className=" absolute bottom-0 w-full  ">
            <footer className=" rounded-lg shadow m-4 bg-gray-800 ">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm  sm:text-center text-gray-400">
                        
                   {` "Frank" - Blockchain Developer , "Diwakar" - Blockchain Developer
 , "Anade Davis" - Blockchain Architect `}
                     
                    </span>
                  
                </div>
            </footer>
        </div>
    );
};

export default Footer;

import React from "react";

const Form = () => {
    const [walletId, setWalletId] = React.useState("");
    return (
        <div className=" max-w-2xl  m-auto mt-40 ">
            <div className="flex w-2xl items-center">
                <div className="relative w-full">
                    <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-slate-400"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="chatAddress"
                        className=" border   text-sm rounded-lg   block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your Wallet ID"
                        onChange={(e) => {
                            setWalletId(e.target.value);
                        }}
                        required
                    />
                </div>
                <a
                    href={`./data?q=${walletId}`}
                    className="p-2.5 ml-2 text-sm font-medium text-white  rounded-lg border border-blue-700  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    SUBMIT
                </a>
            </div>
        </div>
    );
};

export default Form;

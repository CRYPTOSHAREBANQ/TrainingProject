import React, { useState } from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
// console.log(data.data.items)

export async function getServerSideProps(context) {
    // console.log(process.env.DB_HOST)

    const apiKey = process.env.API_KEY;

    // let options = {
    //       "method": "GET",
    //       "hostname": "rest.cryptoapis.io",
    //       "path": "/v2/blockchain-data/ethereum/goerli/addresses/0xF248cA9408E60205fF2b167a27C112A40Dc9dd55/transactions",
    //       "qs": {"context":"yourExampleString","limit":50,"offset":0},
    //       "headers": {
    //         "Content-Type": "application/json",
    //         "X-API-Key": "33b2d073b8a2828c996e1aabdc694680bec64a2b"
    //       }
    //     };
    const q = context.query.q.toString();
    // console.log(context.query.q)
    const pureData = await fetch(
        `https://rest.cryptoapis.io/wallet-as-a-service/wallets/${q}/ethereum/goerli/addresses`,
        {
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": "d13e26fc6544d5b79b32f8f76c632c176d47eae7",
            },
        }
    );

    const treData = await pureData.json();

    return {
        props: { wholedata: treData },
    };
    //   console.log(pureData)
}

const TransactionData = ({ wholedata }) => {
    console.log(wholedata);
    const array = wholedata.data.items;
    //648c8c8e6dd9d1288aeeedb9
//     const create = () =>{
// co
//     }

    return (
        <>
            <Nav />
            
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl m-auto">
                    {/* <div className=" flex justify-between items-center m-10">
                        <div className=" text-3xl font-bold ">Your Wallets</div>
                        <div>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={create}
                            >
                                Create Wallet
                            </button>
                        </div>
                    </div> */}

                    <div className=" flex flex-wrap items-center justify-center">


                    {array.map((res, index) => {
                        return (
                            <div className=" m-5">
                                <div className="block max-w-sm p-6  border rounded-lg shadow  bg-gray-800 border-gray-700 ">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                                        Wallet Address :-
                                    </h5>
                                    <p className=" text-sm text-gray-300">
                                        {res.address}
                                    </p>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                                        Balance :-
                                    </h5>
                                    <p className=" text-sm text-gray-300">
                                        {res.confirmedBalance.amount}
                                    </p>

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                                        Created Timestamp :-
                                    </h5>
                                    <p className=" text-sm text-gray-300">
                                        {res.createdTimestamp}
                                    </p>

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                                         Tokens :-
                                    </h5>
                                    <p className=" text-sm text-gray-300">
                                        {res.confirmedBalance.unit}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    </div>
                </div>

                {/* <button className='bg-white' onClick={trans}>data</button> */}
            </div>
            <Footer />
        </>
    );
};

export default TransactionData;

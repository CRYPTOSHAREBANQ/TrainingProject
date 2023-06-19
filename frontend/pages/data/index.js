import React, { useState } from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
// console.log(data.data.items)

export async function getServerSideProps(context) {
    const apiKey = process.env.API_KEY;

    const q = context.query.q.toString();
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
}

const TransactionData = ({ wholedata }) => {
    console.log(wholedata);
    const array = wholedata.data.items;

    return (
        <>
            <Nav />

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl m-auto">
                    <div className=" flex flex-wrap items-center justify-center">
                        {array.map((res, index) => {
                            return (
                                <div className=" m-5" key={index}>
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

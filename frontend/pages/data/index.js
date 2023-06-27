import React, { useState } from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export const getStaticProps = async () => {
  const res = await fetch(`https://unrivaled-bunny-5b8fc8.netlify.app/api/walletAddress`); // change the wrl according to domain
  const walletAddress = await res.json();
  return { props: { walletAddress } , revalidate: 1};
};

const TransactionData = ({ walletAddress }) => {
  // console.log(walletAddress);

  const token = [
    { Name :"USD Tether" ,symbol: "USDT"},
    { Name :"USD Coin" ,symbol: " USDC"},
    { Name :"Binance Coin" ,symbol: "BNB"},
    { Name :"Uniswap" ,symbol: "UNI"},
    { Name :"Aave Coin" ,symbol: "AAVE"},
    { Name :"Chainlink" ,symbol: "LINK"},
  ]

  return (
    <>
      <Nav />

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl m-auto">
          <div className=" flex flex-wrap items-center justify-center">
            <div className=" m-5">
              <div className="block max-w-sm p-6  border rounded-lg shadow  bg-gray-800 border-gray-700 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                  Wallet Address :-
                </h5>
                <p className=" text-sm text-gray-300">
                  {walletAddress.address}
                </p>
                <br />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                  Tokens :-
                </h5>
                  {token.map((element)=>{
                    return(
                      <>
                        <div className="text-gray-300 text-sm">{element.symbol} - {element.Name}</div>
                      </>
                    )
                  })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransactionData;

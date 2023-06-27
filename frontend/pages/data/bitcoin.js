import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export const getStaticProps = async () => {
  const res = await fetch(`http://main--sweet-kitsune-41c1a1.netlify.app/api/bitcoin`); // change the wrl according to domain
  const walletAddress = await res.json();
  return { props: { walletAddress } , revalidate: 1 };
};

const TransactionData = ({ walletAddress }) => {
  // console.log(walletAddress);

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
                <p className=" text-sm text-gray-300">BTC</p>
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

import React from "react";
import Countdown from "../CountDown/CountDown";

function Offer() {
  const endTime = Date.now() + 86400000;

  return (
    <div>
      <div className="mx-20 px-20 py-10 my-10 border-solid border-4 border-red-500 bg-red-200 rounded">
        <h2 className="text-6xl py-4 font-bold">Special Offer !!!</h2>
        <h2 className="text-2xl py-4 font-bold">Buy Our Toys with <span className="font-bold text-6xl">20%</span> <span className="font-bold text-4xl">discount!!!</span> </h2>
        <p className="mt-4 mb-10 text-xl">
          Hurry up and grab your favorite toys before the offer runs out! You
          can enjoy a fantastic 20% discount on all toys in our store. Don't
          miss out on this opportunity to bring joy to your little ones at a
          discounted price. The offer ends in:
        </p>
        <Countdown className="mt-4" endTime={endTime}></Countdown>
      </div>
      
    </div>
  );
}

export default Offer;

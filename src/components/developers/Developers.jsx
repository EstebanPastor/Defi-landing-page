import React from "react";
import terminal from '../../assets/terminal.png'

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex" >
        <div>
          <h2>Superpowers for DEFI developers.</h2>
          <p>
            Checkout the<span className="blue">documentation</span>, the <span className="blue">quick
            start</span> or a guide below to integrate your project with thousands of
            tokens and billions of liquidity
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
            <img src={terminal} alt="your terminal" 
            className="max-w-[250px] shadow-lg shadow-cyan-500/50 text-center"
            />
        </div>
      </div>
    </div>
  );
};

export default Developers;

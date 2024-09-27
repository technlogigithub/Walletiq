import React from 'react';

const BuyTokens: React.FC = () => {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-md w-[350px] h-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Buy WLIQ Tokens</h2>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-white">
          <span className="block">0.16628</span>
          <span className="text-sm text-gray-400">$326.00</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">ETH</button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-white">
          <span className="block">546.34</span>
          <span className="text-sm text-gray-400">$329.83</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">WLIQ</button>
      </div>

      <label className="text-gray-400 text-xs">
        <input type="checkbox" className="mr-2" />
        I read and agree to WLIQ token purchase agreement and privacy policy.
      </label>

      <button className="bg-blue-600 w-full mt-4 text-white px-4 py-2 rounded hover:bg-blue-700">
        Connect Wallet
      </button>
    </div>
  );
};

export default BuyTokens;

// import React from 'react';

// const BuyTokens: React.FC = () => {
//   return (
//     <div className="bg-dark-secondary p-6 rounded-lg w-1/3">
//       <h3 className="text-lg font-bold">Buy WLIQ Tokens</h3>
//       <div className="my-4">
//         <input type="text" className="input-field" value="0.16628" disabled />
//         <button className="btn-secondary">ETH</button>
//       </div>
//       <div className="my-4">
//         <input type="text" className="input-field" value="546.34" disabled />
//         <button className="btn-secondary">WLIQ</button>
//       </div>
//       <button className="bg-blue-600 w-full py-2 rounded-lg">Connect Wallet</button>
//     </div>
//   );
// }

// export default BuyTokens;

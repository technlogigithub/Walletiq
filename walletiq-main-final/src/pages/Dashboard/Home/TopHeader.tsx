import React from 'react'

function TopHeader() {
  return (
    <div  className='flex spacr-ce'>
      <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Buy WLIQ Tokens</h2>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-1/2">
          <input type="text" value="0.16628" className="w-full p-2 bg-gray-700 text-white rounded" />
          <p className="text-gray-400">$326.00</p>
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded">ETH</button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-1/2">
          <input type="text" value="546.34" className="w-full p-2 bg-gray-700 text-white rounded" />
          <p className="text-gray-400">$329.83</p>
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded">WLIQ</button>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <p className="text-gray-400 text-sm">I read and agree to WLIQ token purchase agreement and privacy policy.</p>
      </div>
      <button className="px-4 py-2 bg-blue-600 rounded w-full">Connect Wallet</button>
    </div>
      <div className='flex'>
        <div className='col-end-auto'>hi</div>
        <div>Home</div>
        <div>Settings</div>
      </div>
      <div>
      <div>English</div>
      <div></div>
      <div></div>
    </div>
    </div>
  )
}

export default TopHeader
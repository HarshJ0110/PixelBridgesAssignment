import React from 'react'

const WalletCard = () => {
  return (
    <div className='w-[90vw] h-[30vh] flex justify-center items-center border border-3 bg-slate-600 bg-opacity-40 border-gray-500 rounded-3xl m-10'>
      <button className='w-44 flex justify-center text-gray-300 text-lg bg-gradient-to-b from-sky-500 to-indigo-400 hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-600 rounded-3xl h-10'><p className='p-1'>Connect Wallet</p></button>
    </div>
  )
}

export default WalletCard
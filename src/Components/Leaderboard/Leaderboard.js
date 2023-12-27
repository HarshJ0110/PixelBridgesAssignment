import React from 'react'
import Navbar from '../Navbar'
import Image from '../images/Leaderboard.png'
import WalletCard from './LeaderboardCards/WalletCard'
import Table from '../Liquidity/LiquidityCard/Table'
import Table1 from './LeaderboardCards/Table1'
const Leaderboard = () => {
  return (
    <div className='lexstake flex flex-col justify-center items-center'>
      <Navbar/>
      <img src={Image}/>
      <button className='w-[90vw] flex justify-center text-gray-300 text-lg bg-gradient-to-b from-sky-500 to-indigo-600 mx-3 mt-6 rounded-3xl h-10 border-2 border-gray-300'><p className='p-1'>Connect Wallet</p></button>
      <WalletCard/>
      <Table1/>
    </div>
  )
}

export default Leaderboard
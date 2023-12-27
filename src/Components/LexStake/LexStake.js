import React from 'react'
import Navbar from '../Navbar'
import Cardcomp1 from './LexStateCard/Cardcomp1'
import Cardcomp2 from './LexStateCard/Cardcomp2'
import Cardcomp3 from './LexStateCard/Cardcomp3'
import Dropcomp from './LexStateCard/Dropcomp'

const LexStake = () => {
  return (
    <div className='lexstake flex flex-col items-center'>
      <Navbar />
      <p className='m-7 text-lg text-gray-300'>Stake <span className='hover:cursor-pointer text-gray-400 border-b-2 border-gray-400 text-xl font-medium'>LEX</span> and <span className='hover:cursor-pointer text-gray-400 border-b-2 border-gray-400'>esLEX</span> to earn rewards from variant LP pools.</p>
      <Dropcomp />
      <div className='flex flex-col lg:flex-row'>
        <Cardcomp1 />
        <Cardcomp2 />
      </div>
      <p className='mx-3 mt-8 text-lg fonnt-medium text-gray-300'>Convert esLEX tokens to LEX tokens.</p>
      <p className='mx-3 mb-8 text-lg text-gray-300'>Please read the <span className='hover:cursor-pointer text-gray-400 border-b-2 border-gray-400'>vesting details</span> before using the vaults.</p>
      <Cardcomp3 />
    </div>
  )
}

export default LexStake
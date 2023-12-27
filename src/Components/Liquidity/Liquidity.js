import React, { useState } from 'react'
import Navbar from '../Navbar'
import LiqCard from './LiquidityCard/LiqCard'
import OrderCard from './LiquidityCard/OrderCard'
import Table from './LiquidityCard/Table'
import Modal from './LiquidityCard/Modal'

const Liquidity = () => {
  const [click, setClick] = useState(false);
  const [mXPL, setmXPL] = useState(true);
  const [sXPL, setsXPL] = useState(false);
  const [name, setName] = useState("USDT");


  const handleSlide1 =() => {
    setmXPL(true);
    setsXPL(false);
}

const handleSlide2 =() => {
    setsXPL(true);
    setmXPL(false);
}

  const handleSlider = () => {
    setmXPL(!mXPL)
    setsXPL(!sXPL);
  }

  return (
    <div className='dashboard flex flex-col items-center'>
      <Navbar />
      {click && <Modal click={click} setclick={setClick} setName={setName}/>}
      {mXPL && <p className='text-gray-300 m-12 text-xl font-medium'>Purchase <span className='hover:cursor-pointer text-gray-400 border-b-2 border-gray-400'>mXLP</span> to earn ETH fees from swaps and leverages trading.</p>}
      {sXPL && <p className='text-gray-300 m-12 text-xl font-medium'>Purchase <span className='hover:cursor-pointer text-gray-400 border-b-2 border-gray-400'>sXLP</span> to earn ETH fees from leverages trading.</p>}
      <div>
        <div className='w-[90vw] flex text-lg text-white bg-slate-400 opacity-60 mt-6 border border-gray-300 rounded-3xl h-14'>
          <div className={`${!mXPL ? 'absolute z-50 slider w-[45vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-14' : 'slider1 w-[45vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-14'}`} >
          </div>
          <div className={`${!mXPL ? 'absolute z-50 slider2 w-[45vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-14 hover:cursor-pointer' : 'hover:cursor-pointer slider2 w-[45vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-14 '}`} onClick={handleSlider}>
          </div>
          <p className='ml-[15vw] md:ml-[20vw] mt-4 absolute z-50 hover:cursor-pointer' onClick={handleSlide1}>mXLP</p>
          <p className='ml-[63vw] md:ml-[65vw] mt-4 absolute z-50 hover:cursor-pointer' onClick={handleSlide2}>sXPL</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center text-gray-300 my-8'>
        <div className='w-[90vw] lg:w-[40vw] flex-col'>
          <div className='flex flex-col md:flex-row mt-2'>
            <LiqCard text={"APR"} price={"31.86%"}/>
            <LiqCard text={"Price"} price={"1.0100"}/>
          </div>
          <div className='flex flex-col md:flex-row'>
            <LiqCard text={"Wallet"} price={"0.00 mXLP($0.00)"}/>
            <LiqCard text={"Staked"} price={"0.00 mXLP($0.00)"}/>
          </div>
        </div>
        <div className='w-[90vw] lg:w-[50vw] border-2 border-gray-800 rounded-3xl'>
          <OrderCard click={click} setClick={setClick} setName={setName} name={name} mXPL={mXPL} sXPL={sXPL}/>
        </div>
      </div>
      <Table/>
    </div>
  )
}

export default Liquidity
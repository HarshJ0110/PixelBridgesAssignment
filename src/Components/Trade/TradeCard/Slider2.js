import React, { useState } from 'react'

const Slider2 = () => {

    const [positions, setPositions] = useState(true);
    const [orders, setOrders] = useState(false);
    const [trades, setTrades] = useState(false);


    const handleSlide1 = () => {
        setPositions(true);
        setOrders(false);
        setTrades(false)
    }

    const handleSlide2 = () => {
        setPositions(false);
        setOrders(true);
        setTrades(false)
    }

    const handleSlide3 = () => {
        setOrders(false);
        setPositions(false);
        setTrades(true)
    }
    return (
        <div className='w-[88vw] flex flex-col bg-slate-400 bg-opacity-20 rounded-3xl mb-8 xl:mb-20 mt-[58vh] xl:mt-20'>
            <div className='w-[84vw] m-auto flex text-lg text-white bg-slate-400 opacity-60 mt-6 border border-gray-300 rounded-3xl h-12'>
                <div className={`${positions ? 'z-50  w-[30vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[30vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide1}>
                </div>
                <div className={`${orders ? 'z-50 w-[30vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[30vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide2}>
                </div>
                <div className={`${trades ? 'z-50 w-[30vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[30vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide3}>
                </div>
                <p className='ml-[5vw] md:ml-[11vw] mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide1}>positions</p>
                <p className='ml-[35vw] md:ml-[40vw] mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide2}>orders</p>
                <p className='ml-[63vw] md:ml-[69vw] mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide3}>Trades</p>
            </div>

            {orders && <>
                <div className='xl:flex lg:justify-between hidden m-5'>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Type</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Order</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Price</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Mark Price</p>
                </div>
                <hr className='mx-8 xl:inline hidden'></hr>
                <p className='text-gray-300 my-5 ml-8 font-medium'>No open order</p></>}
            {positions && <>
                <div className='xl:flex justify-between hidden m-5'>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Position</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Net Value	</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Size</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Collateral</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Entry Price</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Mark Price</p>
                    <p className='text-gray-300 m-3 mb-1 font-medium'>Liq. Price</p>
                </div>
                <hr className='mx-8 xl:inline hidden'></hr>
                <p className='text-gray-300 my-5 ml-8 font-medium'>No open positions</p></>}
            {trades && <div className='text-gray-300 m-5 ml-8 font-medium' >No Trades Yet</div>}
        </div>
    )
}

export default Slider2
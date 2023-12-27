import React, { useState } from 'react'
import Slider1 from './Slider1';
import Usdt from '../../Liquidity/LiquidityCard/Usdt';
import { Slider } from '@mui/material';



const TradeCard1 = (props) => {
    const [long, setlong] = useState(true);
    const [short, setShort] = useState(false);
    const [swap, setSwap] = useState(false);
    const [market, setMarket] = useState(true);
    const [limit, setlimit] = useState(false);
    const [Click1, setclick1] = useState(false)
    const [leverage, setLeverage] = useState(1);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [price, setPrice] = useState([2]);
    const [Long, setLong] = useState(1);
    const [pay, setPay] = useState(1);
    const [xfactor, setXfactor] = useState(1.5);
    const [yfactor, setYfactor] = useState(1.01);
    const [zfactor, setZfactor] = useState(1.1);
    

    const {click, setclick, name} = props

    const handleChange = () => {
        setclick1(!Click1)
    }

    const priceHandler = (event, newPrice) => {
        setLeverage(newPrice);
        setPrice(newPrice)
    }

    const onChange1 = (e) => {
        setValue1(e.target.value)
        setValue2(xfactor * e.target.value);
        setPay(e.target.value * yfactor)
        setLong(e.target.value * zfactor)
    }

    const onChange2 = (e) => {
        setValue2(e.target.value)
        setValue1(e.target.value / xfactor);
        setPay(e.target.value / yfactor)
        setLong(e.target.value / zfactor)
    }

    const onChange3 = (e) => {
        setValue2(e.target.value / yfactor)
        setValue1(e.target.value / xfactor);
        setValue3(e.target.value)
        setPay(e.target.value / yfactor)
        setLong(e.target.value / zfactor)
    }

    const handleSlide2 = () => {
        setlimit(true);
        setMarket(false);
    }
    const handleSlide1 = () => {
        setlimit(false);
        setMarket(true);
    }

    const handleSlider = () => {
        setMarket(!market)
        setlimit(!limit);
    }
    return (
        <div className='flex flex-col items-center bg-slate-500 bg-opacity-20 w-[90vw] xl:w-[30vw] rounded-3xl mx-5 mt-[20px]'>
            <Slider1 long={long} setlong={setlong} short={short} setShort={setShort} swap={swap} setSwap={setSwap} />
            <div className='w-[84vw] xl:w-[26vw] flex text-lg text-white bg-slate-400 opacity-60 mt-6 border border-gray-300 rounded-3xl h-12'>

                <div className={`${!market ? 'absolute z-50 slider w-[42vw] xl:w-[13vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'slider1 w-[42vw] xl:w-[13vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12 '}`} >
                </div>
                <div className={`${!market ? 'absolute z-50 slider2 w-[42vw] xl:w-[13vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 hover:cursor-pointer' : 'hover:cursor-pointer slider2 w-[42vw] xl:w-[13vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlider}>
                </div>
                <p className='ml-[13vw] md:ml-[15vw] xl:ml-[5vw] mt-3 xl:mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide1}>Market</p>
                <p className='ml-[58vw] md:ml-[60vw] xl:ml-[18vw] mt-3 xl:mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide2}>Limit</p>
            </div>
            <div className='w-[82vw] xl:w-[24vw]  text-gray-300'>
                <p className='mt-4 xl:mb-0'>Pay : {pay.toFixed(2)}</p>
            </div>
            <input type='Number' placeholder='0.0' value={value1} className='w-[85vw] xl:w-[26vw] rounded-3xl h-12 bg-slate-400 bg-opacity-20 p-4 pr-24 text-white mb-5' onChange={onChange1}></input>
            <p className='absolute text-xl font-medium ml-[63vw] md:ml-[72vw] lg:ml-[38vw] mt-[196px] xl:ml-[19vw]'><Usdt par={name} setclick={setclick} click={click} /></p>

            <div className='w-[82vw] xl:w-[24vw] flex justify-between text-gray-300'>
                <p className='mt-4 xl:mb-0'>{long && <span>Long</span>} {short && <span>Short</span>} {swap && <span>Recieve</span>} : {Long.toFixed(2)}</p>
                <p className='mt-4 xl:mb-0'>Leverage: {leverage}x </p>
            </div>
            <input type='Number' placeholder='0.0' value={value2} className='w-[85vw] xl:w-[26vw] rounded-3xl h-12 bg-slate-400 bg-opacity-20 p-4 pr-24 text-white mb-5' onChange={onChange2}></input>
            <p className='absolute text-xl font-medium ml-[63vw] md:ml-[72vw] lg:ml-[38vw] mt-[300px]  xl:ml-[19vw]'><Usdt par={name} setclick={setclick} click={click} /></p>

            {limit && <><div className='w-[85vw] xl:w-[24vw] flex justify-between text-gray-300'>
                <p className='xl:mt-4 xl:mb-0'>Price</p>
                <p className='xl:mt-4 xl:mb-0'>Mark: $5678976</p>
            </div>
                <input type='Number' placeholder='0.0' value={value3} className='w-[85vw] xl:w-[26vw] rounded-3xl h-12 bg-slate-400 bg-opacity-20 p-4 pr-24 text-white xl:mb-4' onChange={onChange3}></input>
                <p className='absolute text-xl font-medium ml-[63vw] md:ml-[72vw] lg:ml-[38vw] mt-[394px] xl:mt-[410px] xl:ml-[19vw]'><Usdt par={name} setclick={setclick} click={click} /></p>  </>}

            {!swap && <div className='w-[82vw] flex justify-between xl:w-[24vw]'>
                <p className='text-gray-300 mb-5'>Leverage slider</p>
                <input type='checkbox' onChange={handleChange}></input>
            </div>}
            {(Click1 && !swap) && <div className='w-[82vw] xl:w-[24vw]'> <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={2}
                max={50}
            /></div>}

            {swap && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>USDT Price</p><p>$0.9999</p></div>}
            {swap && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>USDC.e Price</p><p>$0.9999</p></div>}
            {!swap && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Collateral In</p><p><Usdt par={name} setclick={setclick} click={click} /></p></div>}
            <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Leverage</p><p>{leverage}</p></div>
            {(swap && limit) && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Price</p><p>{"$56.876.56"}</p></div>}
            {!swap && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Entry Price</p><p>{market ? "$56.876.56" : "0"}</p></div>}
            {!swap && <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Liq. Price</p><p>{market && Long.toFixed(2) * 3}</p></div>}
            <div className='w-[83vw] text-slate-300 flex justify-between m-1 text-sm xl:w-[24vw]'><p>Open Fees</p><p>{pay.toFixed(2) * 6}</p></div>

            <button className='w-[85vw] xl:w-[26vw] flex justify-center text-gray-300 text-lg bg-slate-400 opacity-50 rounded-3xl h-12 pt-1 mb-5'><p className='p-1'>Smart Router</p></button>
            <button className='w-[85vw] xl:w-[26vw] flex justify-center text-gray-300 text-lg bg-gradient-to-b from-sky-500 to-indigo-600 hover:bg-gradient-to-b hover:from-slate-600 hover:to-indigo-600 rounded-3xl h-12 pt-1 mb-5'><p className='p-1'>Connect Wallet</p></button>

        </div>
    )
}

export default TradeCard1
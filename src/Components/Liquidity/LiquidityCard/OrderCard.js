import React, { useState } from 'react'
import Usdt from './Usdt';

const OrderCard = (props) => {

    const [sell, setSell] = useState(false);
    const [buy, setBuy] = useState(true);
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [xfactor, setXfactor] = useState(1.5);
    const [yfactor, setYfactor] = useState(1.01);
    const [zfactor, setZfactor] = useState(1.1);
    const [receive, setReceive] = useState(0);
    const [price, setPrice] = useState(0);

    const { mXPL, sXPL, click, setClick, name } = props;

    const handleClick = () => {
        setValue2(0);
        setValue1(0);
        setPrice(0)
        setReceive(0)
    }

    const onChange1 = (e) => {
        setValue1(e.target.value)
        setValue2(xfactor * e.target.value);
        setPrice(e.target.value * yfactor)
        setReceive(e.target.value * zfactor)

    }

    const onChange2 = (e) => {
        setValue2(e.target.value)
        setValue1(e.target.value/xfactor);
        setPrice(e.target.value/yfactor)
        setReceive(e.target.value/zfactor)
    }

    const handleSlide = () => {
        setBuy(!buy)
        setSell(!sell);
    }

    const handleSlide1 = () => {
        setBuy(true);
        setSell(false);
    }

    const handleSlide2 = () => {
        setSell(true);
        setBuy(false);
    }

    return (
        <div className='flex h-92 flex-col justify-center items-center p-5 mt-5 md:mt-0'>
            <div className='w-[85vw] lg:w-[48vw] flex text-lg text-white bg-slate-400 opacity-60 mt-2 border border-3 border-gray-300 rounded-3xl h-10'>
                <div className={`${!buy ? 'absolute z-20 slider w-[42.5vw] lg:w-[24vw] bg-gradient-to-b from-sky-500 to-indigo-500 border border-3 border-gray-300 rounded-3xl h-10 ' : 'slider1 w-[42.5vw] lg:w-[24vw] bg-gradient-to-b from-sky-500 to-indigo-500 border border-3 border-gray-300 rounded-3xl h-10'}`} >
                </div>
                <div className={`${!buy ? 'absolute z-20 slider2 w-[42.5vw] lg:w-[24vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-10 hover:cursor-pointer' : 'hover:cursor-pointer slider2 w-[42.5vw] lg:w-[24vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-10'}`} onClick={handleSlide}>
                </div>
                <p className='mt-[2vw] ml-[10vw] md:ml-[15vw] lg:ml-[9vw] md:mt-[0.5vw] absolute z-20 hover:cursor-pointer' onClick={handleSlide1}>buy {mXPL && <span>mXPL</span>} {sXPL && <span>sXPL</span>}</p>
                <p className='mt-[2vw] ml-[55vw] md:ml-[60vw] lg:ml-[34vw] md:mt-[0.5vw] absolute z-20 hover:cursor-pointer' onClick={handleSlide2}>sell {mXPL && <span>mXPL</span>} {sXPL && <span>sXPL</span>}</p>
            </div>
            <div className='w-[85vw] lg:w-[48vw] flex justify-between m-4'>
                <p>Pay : ${price.toFixed(4)}</p>
                <p>Balance : 0.0000</p></div>
            <input type='Number'placeholder='0.0' value={value1} className='w-[85vw] lg:w-[48vw] rounded-xl h-8 bg-slate-400 bg-opacity-5 p-4 pr-36 text-white' onChange={onChange1}></input>
            <span className='font-medium absolute text-md mt-[-87px] ml-[34vw] md:ml-[59vw] lg:ml-[28vw] xl:ml-[32vw] bg-white text-blue-600 px-1 rounded-sm hover:bg-blue-600 hover:text-white' onClick={handleClick}>MAX</span>
            <p className='absolute text-xl font-medium ml-[65vw] md:ml-[75vw] mt-[-87px] lg:ml-[40vw] xl:ml-[42vw]'>{(buy && mXPL) && <Usdt par={name} setclick={setClick} click={click}/>}{(buy && sXPL) && <Usdt par={name} setclick={setClick} click={click}/>}{(sell && mXPL) && <p>mXLP</p>}{(sell && sXPL) && <p>sXLP</p>}</p>
            <div className='w-[85vw] lg:w-[48vw] flex justify-between m-4'>
                <p>Receive : ${receive.toFixed(4)}</p>
                <p>Balance : 0.0000</p>
            </div>
            <input type='Number' placeholder='0.0' value={value2} className='w-[85vw] lg:w-[48vw] rounded-xl h-8 bg-slate-400 bg-opacity-5 p-4 pr-32 text-white' onChange={onChange2}></input>
            <p className='absolute text-xl font-medium  ml-[64vw] md:ml-[75vw] mt-[90px] lg:ml-[40vw]'>{(sell && mXPL) && <Usdt par={name} setclick={setClick} click={click}/>}{(sell && sXPL) && <Usdt par={name} setclick={setClick} click={click}/>}{(buy && sXPL) && <p>sXPL</p>}{(buy && mXPL) && <p>mXPL</p>}</p>

            <div className='w-[85vw] lg:w-[48vw] flex justify-between m-4'>
                <p>Total Supply</p>
                <p>20,046.7914 sXLP ($20,243.71)</p>
            </div>
            <button className='w-[85vw] lg:w-[48vw] flex justify-center text-lg bg-gradient-to-b from-sky-500 to-indigo-600 hover:bg-gradient-to-b hover:from-slate-600 hover:to-indigo-600 rounded-3xl h-10 mb-2'><p className='p-1'>Connect Wallet</p></button>
        </div>
    )
}

export default OrderCard
import React, {useState} from 'react'

const Slider1 = (props) => {

    const {short, long, swap, setlong, setShort, setSwap} = props
    

    const handleSlide1 = () => {
        setlong(true);
        setShort(false);
        setSwap(false)
    }

    const handleSlide2 = () => {
        setlong(false);
        setShort(true);
        setSwap(false)
    }

    const handleSlide3 = () => {
        setShort(false);
        setlong(false);
        setSwap(true)
    }
    return (
        <div className='w-[84vw] xl:w-[26vw] flex text-lg text-white bg-slate-400 opacity-60 mt-6 border border-gray-300 rounded-3xl h-12'>
            <div className={`${long ? 'z-50 w-[28vw]  xl:w-[8.6vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[28vw] xl:w-[8.6vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide1}>
            </div>
            <div className={`${short ? 'z-50 w-[28vw] xl:w-[8.7vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[28vw] xl:w-[8.7vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide2}>
            </div>
            <div className={`${swap ? 'z-50 w-[28vw] xl:w-[8.7vw] bg-gradient-to-b from-sky-500 to-indigo-500 border-2 border-gray-300 rounded-3xl h-12' : 'hover:cursor-pointer w-[28vw] xl:w-[8.7vw] hover:bg-gradient-to-b hover:from-sky-500 hover:to-indigo-500 opacity-50 rounded-3xl h-12 '}`} onClick={handleSlide3}>
            </div>
            <p className='ml-[9vw] md:ml-[11vw] xl:ml-[2.5vw] mt-3 xl:mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide1}>Long</p>
            <p className='ml-[35vw] md:ml-[38vw] xl:ml-[11.5vw] mt-3 xl:mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide2}>Short</p>
            <p className='ml-[65vw] md:ml-[67vw] xl:ml-[20.5vw] mt-3 xl:mt-2 absolute z-50 hover:cursor-pointer font-medium' onClick={handleSlide3}>Swap</p>
        </div>
    )
}

export default Slider1
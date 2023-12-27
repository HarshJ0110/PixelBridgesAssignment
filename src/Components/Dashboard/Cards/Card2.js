import React from 'react'
import Ring1 from '../../Ring1';
import Ring2 from '../../Ring2';


const Card2 = (props) => {
    const { url, text, text1, text2, text3, text4, price1, price2, price3, price4 } = props.Data;
    return (
        <div className='w-[90vw] lg:w-[44vw] h-[450px] md:h-72 flex flex-col md:flex-row justify-center items-center border bg-slate-600 bg-opacity-20 border-gray-500 rounded-3xl m-4'>
            <div className='w-[80vw] md:w-[52vw] lg:w-[26vw] flex flex-col text-gray-300 m-5'>
                <div className='flex md:mt-10'>
                    <img src={url} alt="Example" width="60px" height="60px" className='pr-4' />
                    <p className='text-2xl font-medium mt-2'>{text}</p></div>
                <div className='flex justify-between mt-5'>
                    <p>{text1}</p>
                    <p>{price1}</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p>{text2}</p>
                    <p>{price2}</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p>{text3}</p>
                    <p>{price3}</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p>{text4}</p>
                    <p>{price4}</p>
                </div>
            </div>
            <div className='flex w-[80vw] md:w-[36vw] lg:w-[18vw] justify-center items-center md:mt-0'>
                {text == "mXLP" && <Ring1 />}
                {text == "sXLP" && <Ring2 />}
            </div>
        </div>
    )
}

export default Card2
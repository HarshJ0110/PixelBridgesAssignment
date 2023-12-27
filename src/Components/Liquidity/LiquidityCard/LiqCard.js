import React from 'react'

const LiqCard = (props) => {

    const {text, price} = props
    return (
        <div className='w-[85vw] lg:w-1/2 h-44 flex flex-col border border-3 bg-slate-700 bg-opacity-40 border-gray-600 rounded-3xl m-2'>
            <div className='m-4 mb-0 text-gray-300 text-lg font-medium'>{text}</div>
            <div className='flex justify-center  items-center font-medium m-8'>{price}</div>
        </div>
    )
}

export default LiqCard
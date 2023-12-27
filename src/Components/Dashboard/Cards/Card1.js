import React from 'react'

const Card1 = (props) => {
const {text, price} = props.Data;
  return (
    <div className='w-[90vw] lg:w-[29vw] h-32 lg:h-72 flex flex-col border border-3 bg-slate-600 bg-opacity-20 border-gray-500 rounded-3xl m-3 lg:mt-16'>
          <div className='m-5 text-gray-300 text-lg font-bold'>{text}</div>
          <div className='flex justify-center align-middle lg:m-20 text-green-400 font-medium'>{price}</div>
    </div>
  )
}

export default Card1
import React from 'react'

const Usdt = (props) => {
    const {par, setclick, click} = props
    const handleClick = () =>{
        setclick(true)
    }
    console.log(click);

  return (
    <div>
        <button className='hover:text-blue-400 mx-5 md:mx-3 text-gray-300' onClick={handleClick}>{par}<i className="pl-1 fa-solid fa-angle-down hover:text-blue-400 text-gray-400"></i></button>
    </div>
  )
}

export default Usdt
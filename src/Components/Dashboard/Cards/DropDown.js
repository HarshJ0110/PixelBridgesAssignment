import React, { useState } from 'react'

const DropDown = () => {

    const [drop, setDrop] = useState(false);

    const handleDrop = () => (
        setDrop(!drop)
    )
    return (
        <div className='flex flex-col'>
            <button className='flex justify-between w-[90vw] h-20 boredr rounded-xl bg-slate-900 text-gray-300 mp-4' onClick={handleDrop}>
                <div className='flex'>
                    <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" width='30px' height='30px' alt='lex icon' className='my-auto ml-7 mr-3' />
                    <p className='my-7'>LEX</p>
                </div>
                <div className='flex'>
                    <p className='my-7'>$0.0041</p>
                    <i className="fa-solid fa-angle-down my-8 mx-8"></i>
                </div>
            </button>
            {drop && <div className='flex flex-col justify-between w-[90vw] h-32 boredr rounded-xl bg-slate-900 text-gray-300 mt-[-20px]'>
                    <div className='flex justify-between'><p className='m-7 mb-2 mt-10'>APR</p>
                    <p className='m-7 mb-2 mt-10'>71.81%</p> 
                    </div>   
                    <div className='flex justify-between'><p className='m-7 mt-0'>Total Staked</p>
                    <p className='m-7 mt-0'>11,017,537.47 LEX ($45,226.99)</p> 
                    </div>      
            </div>}

        </div>
    )
}

export default DropDown

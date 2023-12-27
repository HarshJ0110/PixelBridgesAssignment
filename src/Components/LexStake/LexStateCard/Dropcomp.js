import React, { useState } from 'react'

const Dropcomp = () => {
    const [dropcomp, setDropcomp] = useState(false);

    const handleDrop = () => (
        setDropcomp(!dropcomp)
    )
    return (
        <div className='flex flex-col mb-4'>
            <button className='w-[90vw] h-12 rounded-xl bg-slate-800 text-gray-300 ' onClick={handleDrop}>
                <p className='m-3'>Claimable Reward : <span className='text-green-400'>$0.00</span></p>
                <p className=''><i className="fa-solid fa-angle-down hover:text-blue-400 text-gray-400"></i></p>
            </button>
            {dropcomp && <div className='flex flex-col justify-between w-[90vw] h-62 boredr rounded-xl bg-slate-800 text-gray-300 mt-[-15px]'>
                <div className='flex justify-between'>
                    <p className='m-7 mb-2 mt-10'>ETH (WETH)</p>
                    <p className='m-7 mb-2 mt-10'>0.0000 ($0.00)</p>
                </div>
                <div className='flex justify-between'>
                    <p className='m-7 mt-0 mb-2'>LEX</p>
                    <p className='m-5 mt-0 mb-2'>0.0000 ($0.00)</p>
                </div>
                <div className='flex justify-between'>
                    <p className='m-7 mt-0 mb-2'>Escrowed LEX</p>
                    <p className='m-5 mt-0 mb-2'>0.0000 ($0.00)</p>
                </div>
                <div className='flex justify-between'>
                    <p className='m-7 mt-0 mb-2'>Multiplier Points</p>
                    <p className='m-5 mt-0 mb-2'>0.0000</p>
                </div>
                <div className='flex justify-between'>
                    <p className='m-7 mt-0 mb-2'>Staked Multiplier Points</p>
                    <p className='m-5 mt-0 mb-2'>0.0000</p>
                </div>
                <div className='flex justify-between'>
                    <p className='m-7 mt-0'>Total</p>
                    <p className='m-5 mt-0'>0.00</p>
                </div>
                
            </div>}

        </div>
    )
}

export default Dropcomp
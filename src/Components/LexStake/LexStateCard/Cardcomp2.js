import React from 'react'

const Cardcomp2 = () => {
    return (
        <div className='w-[90vw] lg:w-[44vw] h-76 flex flex-col border border-3 bg-slate-600 bg-opacity-20 border-gray-500 rounded-3xl m-4'>
            <div className='flex flex-col text-gray-300 m-5'>
                <div className='flex'>
                    <img src="https://app.lexer.markets/assets/lex-40b73a15.svg" alt="Example" width="50px" height="50px" className='pr-4' />
                    <div className='flex flex-col'>
                        <p className='text-xl font-medium mt-1'>esLEX</p>
                        <p className='text-xl font-medium'>$0.0048</p>
                    </div>
                </div>
                <div className='flex justify-between mt-5'>
                    <p>Wallet</p>
                    <p>0.00 LEX ($0.00)</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p>Staked</p>
                    <p>0.00 LEX ($0.00)</p>
                </div>
                <hr className='mt-5'></hr>
                <div className='flex justify-between mt-5'>
                    <p>APR</p>
                    <p>59.71%</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p>Multiplier Points APR</p>
                    <p>100.00%</p>
                </div>
                <div className='flex'>
                    <div className='w-1/2 h-36 flex flex-col  border bg-gray-900 bg-opacity-80 border-gray-800 rounded-3xl mt-5 m-1'>
                        <div className='m-4 mb-0 text-gray-300 text-lg font-medium'>Total Staked</div>
                        <div className='flex justify-center font-medium m-6'>11,017,537.47 LEX ($45,744.81)</div>
                    </div>
                    <div className='w-1/2 h-36 flex flex-col border bg-gray-900 bg-opacity-80 border-gray-800 rounded-3xl mt-5 m-1'>
                        <div className='m-4 mb-0 text-gray-300 text-lg font-medium'>Total Supply</div>
                        <div className='flex justify-center font-medium m-6'>7,253,391 esLEX ($35,251)</div>
                    </div>
                </div>
                <button className='flex justify-center text-lg bg-gradient-to-b from-sky-500 to-indigo-500 mt-6 rounded-3xl h-10'><p className='p-1'>Connect Wallet</p></button>

            </div>
        </div>
    )
}

export default Cardcomp2
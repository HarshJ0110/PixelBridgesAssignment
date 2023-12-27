import React from 'react'

const Cardcomp3 = () => {
    return (
        <div className='w-[90vw] h-72 flex flex-col border border-3 bg-slate-600 bg-opacity-20 border-gray-500 rounded-3xl m-4 mb-16 font-medium'>
            <div className='flex flex-col text-gray-300 m-5'>
                <p className='text-2xl font-medium mx-3'>LEX Vault</p>
                <div className='flex justify-between mt-5 mx-3'>
                    <p>Staked Tokens</p>
                    <p>0.00</p>
                </div>
                <div className='flex justify-between mt-3 mx-3'>
                    <p>texReserved for Vestingt2</p>
                    <p>0.00 / 0.0</p>
                </div>
                <div className='flex justify-between mt-3 mx-3'>
                    <p>Vesting Status</p>
                    <p>0.0000 / 0.0000</p>
                </div>
                <div className='flex justify-between mt-3 mx-3'>
                    <p>Claimable</p>
                    <p className='border-b-dotted border-gray-400'>0.0000 LEX</p>
                </div>
                <button className='flex justify-center text-lg bg-gradient-to-b from-sky-500 to-indigo-500 mx-3 mt-6 rounded-3xl h-10'><p className='p-1'>Connect Wallet</p></button>
            </div>
        </div>
    )
}

export default Cardcomp3
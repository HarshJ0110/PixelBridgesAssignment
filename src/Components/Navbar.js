import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    let location = useLocation();
    return (
        <div className='w-full flex justify-between xl:justify-around text-gray-300 z-10 bg-black bg-opacity-50 h-15 '>

            <ul className='flex xl:justify-around p-4 text-lg'>
                <button onClick={handleClick}><i className="fa-solid fa-bars xl:hidden m-1"></i></button>
                <li className='hover:text-blue-700 mt-1'>
                    <img src="https://app.lexer.markets/assets/logo_LEXER-80aa9bef.svg" height="80px" width="80px" alt="LEXER" />
                </li>
                <li className={`${location.pathname === '/dashboard' ? "text-blue-600 xl:inline hidden" : "hover:text-blue-500 xl:inline hidden"}`}>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='hover:text-blue-500 xl:inline hidden'>
                    Migrate v1 Assets
                </li>
                <li className={`${location.pathname === '/lexstake' ? "text-blue-600 xl:inline hidden" : "hover:text-blue-500 xl:inline hidden"}`}>
                    <Link to='/lexstake'>LexStake</Link>
                </li>
                <li className={`${location.pathname === '/liquidity' ? "text-blue-600 xl:inline hidden" : "hover:text-blue-500 xl:inline hidden"}`}>
                    <Link to='/liquidity'>Liquidity</Link>
                </li>
                <li className={`${location.pathname === '/trade' ? "text-blue-600 xl:inline hidden" : "hover:text-blue-500 xl:inline hidden"}`}>
                    <Link to='/trade'>Trade</Link>
                </li>
                <li className={`${location.pathname === '/leaderboard' ? "text-blue-600 xl:inline hidden" : "hover:text-blue-500 xl:inline hidden"}`}>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li className='hover:text-blue-500 xl:inline hidden'>
                    V2 Launch
                </li>
            </ul>
            <ul>
                <li className='font-thin border border-3 rounded-2xl mt-4 xl:m-2 p-2 px-4'>
                    <i className="fa-solid fa-wallet pr-3"></i>
                    Connect Wallet
                </li>

            </ul>
            {click && <div className='absolute z-10 w-[50vw] h-full bg-black bg-opacity-80 translate-x-0 transition-all'><ul className=' flex flex-col'>
                <i class="fa-regular fa-circle-xmark mt-5 text-2xl mx-[40vw]" onClick={handleClick}></i>
                <li className={`${location.pathname === '/dashboard' ? "text-blue-600 m-5 mt-10 mx-10" : "hover:text-blue-500 m-5 mt-10 mx-10"}`}>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='hover:text-blue-500 m-5 mx-10'>
                    Migrate v1 Assets
                </li>
                <li className={`${location.pathname === '/lexstake' ? "text-blue-600 m-5 mx-10" : "hover:text-blue-500 m-5 mx-10"}`}>
                    <Link to='/lexstake'>LexStake</Link>
                </li>
                <li className={`${location.pathname === '/liquidity' ? "text-blue-600 m-5 mx-10" : "hover:text-blue-500 m-5 mx-10"}`}>
                    <Link to='/liquidity'>Liquidity</Link>
                </li>
                <li className={`${location.pathname === '/trade' ? "text-blue-600 m-5 mx-10" : "hover:text-blue-500 m-5 mx-10"}`}>
                    <Link to='/trade'>Trade</Link>
                </li>
                <li className={`${location.pathname === '/leaderboard' ? "text-blue-600 m-5 mx-10" : "hover:text-blue-500 m-5 mx-10"}`}>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li className='hover:text-blue-500 m-5 mx-10'>
                    V2 Launch
                </li></ul></div>}
        </div>
    )
}

export default Navbar


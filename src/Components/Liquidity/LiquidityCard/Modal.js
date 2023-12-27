import React, { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';

const TrendingCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

const Modal = (props) => {

    const [trending, setTrending] = useState([0]);
    const { click, setclick, setName } = props
    const handleClick = () => {
        setclick(false);
    }
    const fetchTrendingCoins = async () => {
        try {
            const response = await fetch(TrendingCoins("USD"));
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTrending(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTrendingCoins();
    }, []);

    return (
        <div className='absolute z-20 w-[50vw] top-0 right-0 h-screen md:w-[30vw] bg-black bg-opacity-100 translate-x-0 transition-all'>
            <button className='text-gray-300 m-5 mx-10' onClick={handleClick}><i class="fa-regular fa-circle-xmark" onClick={handleClick}></i>
            </button>
            <p className='text-gray-300 m-5 mx-10 hover:text-blue-500' onClick={() => { setName("USDT");setclick(false) }}>USDT</p>
            <p className='text-gray-300 m-5 mx-10 hover:text-blue-500' onClick={() => { setName("BNB");setclick(false)  }}>BNB</p>
            <p className='text-gray-300 m-5 mx-10 hover:text-blue-500' onClick={() => { setName("BTC") ;setclick(false) }}>BTC</p>
            <p className='text-gray-300 m-5 mx-10 hover:text-blue-500' onClick={() => { setName("SOL") ;setclick(false) }}>SOL</p>
            <p className='text-gray-300 m-5 mx-10 hover:text-blue-500' onClick={() => { setName("LTC");setclick(false)  }}>LTC</p>
        </div>
    )
}

export default Modal
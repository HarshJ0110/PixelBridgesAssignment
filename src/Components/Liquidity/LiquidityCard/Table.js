import React, { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';

const TrendingCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Table = () => {
    const [trending, setTrending] = useState([0]);

    const fetchTrendingCoins = async () => {
        try {
            const response = await fetch(TrendingCoins("USD"));
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTrending(data);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }
    console.log(trending)

    useEffect(() => {
        fetchTrendingCoins();
    }, []);

    return (
        <div className='flex flex-col bg-slate-700 rounded-3xl my-8 bg-opacity-40'>
            <div className='w-[90vw] flex justify-around'>
                <p className='my-5 w-[2vw]  text-lg text-gray-300'></p>
                <p className='my-5 w-[2vw] xl:inline hidden text-lg text-gray-300'>Name</p>
                <p className='my-5 w-[2vw] text-lg text-gray-300'>Symbol</p>
                <p className='my-5 w-[2vw] xl:inline hidden text-lg text-gray-300'>P/L</p>
                <p className='my-5 w-[2vw] text-lg text-gray-300'>Price</p>
                <p className='my-5 w-[7vw] xl:inline hidden text-lg text-gray-300'>Total Volume</p>
            </div>
            <hr className='mx-10'></hr>
            {trending == "0" ? <Loader/>: trending.map((coin, index) => {
                let profit = coin.price_change_percentage_24h >= 0;
                return (
                    <div className={`w-[90vw] flex justify-around items-center`} key={index}>
                        <img src={coin?.image} alt={coin.name} width="70px" height="70px" className='my-5 w-[5vw]'></img>
                        <p className='my-10 w-[5vw] text-xl xl:inline hidden text-gray-400'>{coin?.id}</p>
                        <p className='my-10 w-[5vw] text-lg text-gray-400'>{coin?.symbol}&nbsp;</p>
                        <p className="my-10 w-[5vw] text-lg " style={{ color: profit > 0 ? "#02f744" : "red" }}>{profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%</p>
                        <p className='my-10 w-[5vw] text-lg xl:inline hidden text-gray-400'>{"$"}{numberWithCommas(coin?.current_price.toFixed(2))}</p>
                        <p className='my-10 w-[7vw] text-lg xl:inline hidden text-gray-400'>{"$"}{numberWithCommas(coin?.total_volume.toFixed(2))}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Table;

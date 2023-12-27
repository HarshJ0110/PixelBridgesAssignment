import React, {useState , useEffect} from 'react';
import Navbar from '../Navbar';
import TradeCard1 from './TradeCard/TradeCard1';
import TradingViewWidget from './TradeCard/TradingViewWidget';
import Slider2 from './TradeCard/Slider2';
import Usdt from '../Liquidity/LiquidityCard/Usdt';
import Modal from '../Liquidity/LiquidityCard/Modal';


const Trade = () => {
  const [click, setclick] = useState(false);
  const [name, setName] = useState("USDT")
  let i = 0; 
  useEffect(
    () => {
      i=i+1;
    },
    [name, i]
  );
  return (
    <div className='lexstake flex flex-col justify-center items-center'>
      {click && <Modal click={click} setclick={setclick} setName={setName}/>}
      <Navbar />
      <div className='w-[90vw] flex flex-col items-center xl:items-start xl:flex-row mt-10'>
        <TradeCard1 click={click} setclick={setclick} name={name}/>
        <div className='w-[90vw] h-[50vh] xl:w-[60vw] xl:h-[320px] border-3xl m-5 '>
          <div className='bg-slate-800 opacity-80 h-14 mb-2 rounded-3xl'>
            <div className='flex justify-around'>
              <div className='flex flex-col text-slate-300'><p className='text-lg mt-4'><Usdt par={name} setclick={setclick} click={click} /></p></div>
              <div className='flex flex-col text-slate-300'><p className='text-lg mt-1'>$2,226.35</p><p className='font-thin text-sm'> $2,224.35</p></div>
              <div className='flex flex-col text-slate-300'><p className='text-sm mt-1'>24h Change</p><p className='text-lg text-red-500'> -2.25%</p></div>
              <div className='md:flex flex-col hidden text-slate-300'><p className='text-sm mt-1'>24h High</p><p className='text-lg'> $2,227.35</p></div>
              <div className='md:flex flex-col hidden text-slate-300'><p className='text-sm mt-1'>24h Low</p><p className='text-lg'> $2,223.35</p></div>
            </div>
          </div>
          <TradingViewWidget name={name}/>
        </div>
      </div>
      <Slider2 />
    </div>
  );
}

export default Trade;

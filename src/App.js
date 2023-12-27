import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import LexStake from './Components/LexStake/LexStake';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Liquidity from './Components/Liquidity/Liquidity';
import Trade from './Components/Trade/Trade';
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/lexstake' element={<LexStake />} />
          <Route path='/liquidity' element={<Liquidity />} />
          <Route path='/trade' element={<Trade/>}/>
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </Router>
      <Marquee className='fixed right-0 h-10 bottom-0 bg-blue-900 text-white'>
  
Trade-2-Earn up to ~$20k in esLEX rewards now! More volume = more money! Read up onTrade-2-Earn!
<span className='ml-10'>LEX GO!</span>
</Marquee>
    </div>
  );
};

export default App;


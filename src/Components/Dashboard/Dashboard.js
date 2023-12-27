import React from 'react'
import Card2 from './Cards/Card2'
import Card1 from './Cards/Card1';
import Navbar from '../Navbar';
import DropDown from './Cards/DropDown';

const Dashboard = () => {
  const cardData1 = [
    { id: 1, text: 'Total Trading Volume', price: '$272,852.21' },
    { id: 2, text: 'Total Fees', price: '$466.29' },
    { id: 3, text: 'Total Value Locked', price: '$70,721.26' },
  ];

  const cardData2 = [
    { id: 1, url: 'https://app.lexer.markets/assets/corecrypto-16dfbe5b.svg', text: 'mXLP', text1: 'Price', price1: '$1.022', text2: 'TVL', price2: '27.59%', text3: 'APR', price3: '$70,721.26', text4: 'Stables Percentage', price4: '55.63%' },
    { id: 2, url: 'https://app.lexer.markets/assets/ic_usdc_24-3b8acc8e.svg', text: 'sXLP', text1: 'Price', price1: '$0.897', text2: 'TVL', price2: '$18,000.01', text3: 'APR', price3: '11.40%', text4: 'Stables Percentage', price4: '100.00%' },

  ];

  return (
    <div className='dashboard'>
      <Navbar/>
      <div className='flex flex-wrap justify-center lg:flex-row align-middle'>
        {cardData1.map((data) => (
          <Card1 key={data.id} Data={data} />
        ))}
      </div>
      <div className='flex flex-wrap justify-center lg:flex-row align-middle'>
        {cardData2.map((data) => (
          <Card2 key={data.id} Data={data} />
          
        ))}
      </div>
      <div className='flex justify-center pt-5 pb-20'>
        <DropDown />
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react';
import BarChart from './BarChart';
import RecentOrders from './RecentOrders';

const BottomCards = () => {
  return (
    <div className='p-4 grid md:grid-cols-3  grid-cols-1gap-4'>
        <BarChart />
        <RecentOrders />

    </div>
  )
}

export default BottomCards
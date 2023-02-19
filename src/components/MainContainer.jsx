import React from 'react';
import Delivery from '../img/delivery.png';

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex-col items-start md:items-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
      <div className="w-10 h-10 rounded-full overflow-hidden bg-white">

          <img src={Delivery}
          className="w-full h-full object-contain"
          alt="delivery"/>
          </div>
        </div>
      </div>
      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  )
}

export default MainContainer
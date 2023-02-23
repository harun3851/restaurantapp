import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from "../img/heroBg.png";
import {heroData} from '../utils/data';




const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
    <div className="py-2 flex-1 gap-6 flex-col items-start justify-start md:items-center">
      <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full">
        <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
         <div className="w-10 h-10 rounded-full overflow-hidden bg-white">

        <img src={Delivery}
        className="w-full h-full object-contain"
        alt="delivery"/>
        </div>
      </div>
      <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
        The fastest Delivery in 
        <span className="text-orange-600 text-[3rem]">Your City</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum
         quisquam atque optio numquam nesciunt cupiditate magni ex rerum doloremque 
         quas, ab quaerat molestiae tenetur ratione non impedit, repudiandae dolorum?
      </p>

      <button type="button"
      className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-3xl
      hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">order now</button> 
    </div>
    <div className="py-2 flex-1 flex items-center relative">
      <img src={HeroBg} className="ml-auto h-420 w-full " alt="hero-bg"/>
        <div className="w-full h-full absolute top-0 left-0 flex items-center  justify-center   py-4
        gap-4 flex-wrap">
         {heroData && 
         heroData.map((n)=>(
          <div 
          key={n.id} 
          className="w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"> 
          <img src={n.imageSrc} className="w-20 lg:w40 -mt-10 lg:-mt-20  " alt="I1" />
          
          <p className="text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor">{n.name}</p>
          
          <p className="text-[12px] lg:text-sm  text-lighttextGray font-semibold my-1 lg:my-3">
            {n.desc}
          </p>
          
          <p className="text-sm text-light textGray font-semibold">
            <span className="text-xs text-red-600">$</span>{n.price}
          </p>
        </div>
         ))}
      </div>
    </div>
  </section>
  );
};

export default HomeContainer;
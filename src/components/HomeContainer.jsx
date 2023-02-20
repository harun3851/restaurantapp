import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from "../img/heroBg.png";
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
      className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg 
      hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">order now</button> 
    </div>
    <div className="py-2 flex-1 flex items-center">
      <img src={HeroBg} className="ml top-16 right-16 h-685" alt="hero-bg"/>
    </div>
  </section>
  );
};

export default HomeContainer;
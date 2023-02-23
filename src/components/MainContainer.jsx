import React from 'react';
import HomeContainer  from "./HomeContainer";
import RowContainer from './RowContainer';


const MainContainer = () => {
  return (
   <div className="w-full h-auto flex flex-col items-center justify-center  ">
    <HomeContainer />
    <section className="w-full lg:my-10 my-40">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute
        before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0
        before:bg-orange-500 transition-all ease-in-out duration-100" >
          Our fresh % healthy fruit
        </p>
        <div className="hidden md:flex gap-3 items-center">
      <div className="w-8 h-8 rounded-lg bg-orange-300  flex items-center justify-center"></div>
      <div className="w-8 h-8 rounded-lg bg-orange-300  flex items-center justify-center"></div>
        </div>
      </div>
      <RowContainer flag={true}/>
    </section>
   </div>
  );
};

export default MainContainer;
import React from 'react';
import HomeContainer  from "./HomeContainer";


const MainContainer = () => {
  return (
   <div className="w-full h-auto flex flex-col items-center justify-center  ">
    <HomeContainer />
    <section className="w-full">
      <div className="w-full flex items-center justify-between">
        <p className="text-lg font-semibold uppercase relative">
          Our fresh % healthy fruit
        </p>
      </div>
    </section>
   </div>
  );
};

export default MainContainer;
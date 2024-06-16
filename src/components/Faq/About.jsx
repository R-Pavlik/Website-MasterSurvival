import React from 'react';
import Background from "../../img/Background.png"
import Logo from "../../img/Logo.png"


export default function About() {
  return (
    <div className="h-full bg-gray-200 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <img src={Background} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className=" w-full h-full bg-black bg-opacity-50 p-4 text-white text-center relative flex flex-col justify-center items-center">
              
              <h1 className="text-7xl font-bold">ČASTO KLADENÉ DOTAZY</h1>
              <div className='w-[770px] h-[3px] bg-white mt-2'></div>
              
            </div>
          </div>
    </div>
  );
}

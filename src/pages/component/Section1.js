import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <>
    <div className="relative py-6 px-4 xl:container mx-auto lg:mt-10 lg:h-[600px]">
        <Image src="/sec2.svg" alt="working on laptop" height={100} width={100} className="hidden md:block absolute left-0 top-28 lg:w-[160px]" />
        <Image src="/sec3.svg" alt="working on laptop" height={100} width={100} className="hidden md:block absolute right-0 lg:w-[160px] " />
        <div className="flex flex-col justify-center items-center md:w-9/12 mx-auto lg:w-7/12 ">
            <Image src="sec1.svg" alt="vector" height={100} width={100} className="lg:w-[150px]" />
            
            <p className="font-medium mt-4 lg:mt-6 font-volkhov xl:text-[20px]">welcome to chuksdesingz</p>

            <h1 className="mt-4 text-[18px] xl:text-[22px] text-center font-extrabold font-cinzel md:w-11/12 mx-auto lg:mt-8">"WHERE SIMPLICITY MEETS ART—BRINGING CLASS, POISE, AND UNIQUENESS TO YOUR BRAND."</h1>

            <h1 className="mt-4 font-cinzel text-center text-[14px] xl:text-[18px] md:w-9/12 mx-auto lg:mt-8">"BEYOND CRAFTING ICONIC BRANDS AND COMPELLING STRATEGIES, WE GO THE EXTRA MILE TO ENSURE OUR CLIENTS' SATISFACTION. WE DON’T JUST DESIGN—WE BRING YOUR BUSINESS TO LIFE."</h1>

            <h1 className="font-cinzel text-center text-[14px] xl:text-[18px] font-bold lg:mt-4">[YOU SPEAK WE CREATE]  </h1>
        </div>
    </div>
    
    </>
  );
};

export default Section1;

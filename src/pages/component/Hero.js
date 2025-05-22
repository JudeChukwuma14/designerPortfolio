import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:container mx-auto gap-6 bg-[#BABABA]">
        <div>
            <div className="font-cinzel text-[70px] md:text-[80px] lg:text-[100px] xl:text-[120px] flex justify-center flex-col mx-auto items-center mt-10 lg:mt-28 xl:mt-36 text-white">
                <h1 className="">CHUKS</h1>
                <h1 className="-mt-13 lg:-mt-20">DESIGNZ</h1>
            </div>

            <div className="text-center w-11/12 mx-auto text-white">
                <p className="font-cinzel xl:text-[20px]">"Your Vision, Our Design—Let’s Build Something Remarkable!"</p>
            </div>

            <div className="bg-[#68412B] px-4 py-2 flex justify-center w-11/12 md:w-5/12 mx-auto mt-4 md:mt-8 btn-submit">
                <button className="font-cinzel text-white xl:text-[20px] ">Contact Us</button>
            </div>

        </div>

        <div>
            <Image src="/Hero.svg" alt="chuks" height={100} width={100} className="w-11/12 mx-auto" />
            
        </div>
    </div>
    </>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="bg-[#C4A269] relative xl:container mx-auto flex flex-col items-center py-6 ">

<div className="bg-[#BA8653] w-11/12 mx-auto h-[60px] absolute -top-8">

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between w-10/12 my-10">
             <div className="lg:w-5/6 w-full mx-auto">
            <div>
                <h2 className="font-cinzel font-bold hidden md:block">READY TO ELEVATE YOUR BRAND</h2>

            <h1 className="font-georgia text-[20px] md:text-[24px] font-extrabold">Schedule a Consultation</h1>
            </div>


            <div className="font-georgia mt-2">
                <p>Address</p>
                <p>Lagos Nig.</p>
            </div>

            <div className="font-georgia flex items-center md:items-start md:flex-col gap-2 mt-2">
                <p>Call</p>
                <p>+234-904-4881-203</p>
            </div>

            <div className="font-georgia mt-2">
                <p>Email:</p>
                <p>chuksdesignz@gmail.com</p>
            </div>

            <div className=" gap-2 hidden md:flex mt-2">
                <Image src="/fb.svg" alt="social icon" height={50} width={50} className="w-8 text-[#14170F]" />

                <Image src="/ig.svg" alt="social icon" height={50} width={50} className="w-8 text-[#14170F]" />

                <Image src="/wa.svg" alt="social icon" height={50} width={50} className="w-8 text-[#14170F]" />
            </div>
        </div>

        <div className="lg:w-5/6 w-full mx-auto mt-6 ">
            <div>
                <h1 className="font-georgia text-[20px] md:text-[24px] font-extrabold">Business Hours</h1>
            </div>

            <div className="mt-2 flex flex-col gap-2">
                <p>Monday to Saturday</p>
                <p>8:00 am - 8:00 pm</p>
            </div>

            <div className="mt-2 flex flex-col gap-2">
                <p>Sundays</p>
                <p>12:00 noon to 8:00 pm</p>
                
            </div>

            <div className="mt-3">
                <h1 className="font-georgia text-[20px]">Let's Connect</h1>
                <div className="flex gap-3">
                    <input type="email" placeholder="Enter your email here*" className="border-[1px] border-black px-2 py-1  placeholder:font-rage-italic outline-none" />

                    <button className="bg-[#14170F] text-white px-4">Join</button>
                </div>
            </div>


            <div className=" gap-2 mt-2 md:hidden flex">
                <Image src="/fb.svg" alt="social icon" height={50} width={50} className="w-6 text-[#14170F]" />

                <Image src="/ig.svg" alt="social icon" height={50} width={50} className="w-6 text-[#14170F]" />

                <Image src="/wa.svg" alt="social icon" height={50} width={50} className="w-6 text-[#14170F]" />
            </div>


        </div>
        </div>


    </div>
    
    </>
  );
};

export default Footer;

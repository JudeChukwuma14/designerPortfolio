import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#D0D0D0] w-full xl:container mx-auto">
        <div className="p-4 ">
            <Image src="/sec2img.svg" alt="chuks 2" width={100} height={100} className="w-full " />
        </div>
        <div className="relative bg-[#D0D0D0] text-[#68412B] px-4 py-8 flex flex-col justify-center">
            <Image src="/star.svg" alt="vector" height={50} width={50} className="absolute top-0 md:top-4 right-8" />
            <h1 className="font-cinzel font-[1000]">I’M CHUKS</h1>

            <h1 className="font-cinzel text-[35px] uppercase font-extralight lg:w-4/6">Brand designer, Singer, Writer, Enterpreneur</h1>

            <p className="font-rakkas lg:w-5/6 xl:text-xl">a passionate web designer and digital strategist dedicated to helping brands stand out in the digital world. With a background in UI/UX design, digital marketing, and full-stack development, I bring a unique blend of creativity and technical expertise to every project.</p>

            <p className="font-rakkas mt-4 lg:w-5/6 xl:text-xl">At ChuksDesigns Agency, 0ur mission is simple: to craft visually stunning and high-performing websites that turn ideas into impact. Whether it’s branding, design, or development, I believe in delivering solutions that are not only beautiful but also efficient, functional, and tailored to your business needs.</p>

            <Image src="belowvec.svg" width={100} height={100} alt="vector" className="absolute bottom-0 right-0" />
        </div>

    </div>
    
    </>
  );
};

export default Section2;

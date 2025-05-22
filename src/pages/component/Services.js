import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <>
    <div className="bg-[#68412B] relative py-14 xl:py-20 xl:container mx-auto">
        <Image src="/star.svg" height={50} width={50} className="absolute w-[40px] md:w-[60px] xl:w-[80px] left-14 top-4 xl:top-8 " />

        <h1 className="text-center text-white text-3xl xl:text-5xl font-pacifico xl:mb-10">
        Our Service Offerings
        </h1>
        <div className="flex flex-wrap justify-center gap-y-8 px-4 py-10 font-cinzel">
  {/* First 3 Cards */}
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col items-center text-white text-center">
    <Image
      src="/service1.svg"
      alt="typing on the pc keyboard"
      width={100}
      height={100}
      className="border border-white w-11/12"
    />
    <h1 className="uppercase font-semibold text-xl mt-4 xl:text-[26px]">Branding & Identity</h1>
    <p className="uppercase font-light mt-2 px-4 xl:text-[18px]">We create distinctive brand identities that tell your story, from logos to complete brand strategies.</p>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col items-center text-white text-center">
    <Image
      src="/service2.svg"
      alt="drawing on ipad"
      width={100}
      height={100}
      className="border border-white w-11/12"
    />
    <h1 className="uppercase font-semibold text-xl mt-4 xl:text-[26px]">Graphic Design</h1>
    <p className="uppercase font-light mt-2 px-4 xl:text-[18px]">Visually stunning designs for social media, marketing materials, packaging, and more.</p>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col items-center text-white text-center">
    <Image
      src="/service3.svg"
      alt="typing on the pc keyboard"
      width={100}
      height={100}
      className="border border-white w-11/12"
    />
    <h1 className="uppercase font-semibold text-xl mt-4 xl:text-[26px]">Digital Marketing</h1>
    <p className="uppercase font-light mt-2 px-4 xl:text-[18px]">Grow your brand with expert strategies in social media marketing, SEO, and content creation.</p>
  </div>

  {/* Last 2 Cards */}
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col items-center text-white text-center">
    <Image
      src="/service4.svg"
      alt="desktop view"
      width={100}
      height={100}
      className="border border-white w-11/12"
    />
    <h1 className="uppercase font-semibold text-xl mt-4 xl:text-[26px]">Web Development</h1>
    <p className="uppercase font-light mt-2 px-4 xl:text-[18px]">High-performance, fully functional websites built for speed, security, and user experience.</p>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col items-center text-white text-center">
    <Image
      src="/service5.svg"
      alt="coffee and work"
      width={100}
      height={100}
      className="border border-white w-11/12"
    />
    <h1 className="uppercase font-semibold text-xl mt-4 xl:text-[26px]">Web Design/Redesign</h1>
    <p className="uppercase font-light mt-2 px-4 xl:text-[18px]">Whether starting fresh or revamping an existing site, we design sleek, responsive, and conversion-focused websites.</p>
  </div>
</div>




    </div>
    
    </>
  );
};

export default Services;

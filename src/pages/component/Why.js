import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <>
    <div className="bg-[#A28772] text-white xl:container mx-auto py-4 pb-14">
      <div className="relative">

        <Image src="/star.svg" alt="star vector" height={100} width={100} className="w-8 right-6 top-3 absolute md:hidden" />



        <div className="text-center px-4 py-12">
          <h1 className="font-cinzel-decorative text-[30px]">
          WHY CHOOSE US?
          </h1>
          <p className="text-[16px] px-8 md:w-8/12 lg:w-6/12 mx-auto font-georgia">
          At ChuksDesigns Agency, we don’t just design—we create experiences that help brands grow and thrive.
          </p>
        </div>


        <div className="px-8 md:grid md:grid-cols-3 md:gap-4 lg:gap-8">

          <div>
            <Image src="/why1.svg" alt="office" width={100} height={100} className="w-full" />

            <div className="text-center">
              <h2 className="text-[24px] py-2 font-lucida-bright">-Creativity Meets Strategy-</h2>
              <p className="text-[14px] px-6 pb-10 font-georgia">Every project is a perfect blend of eye-catching visuals and strategic design to drive results.</p>
            </div>

          </div>



          <div className="md:flex md:flex-col-reverse">
            <Image src="/why2.svg" alt="office view flowers" height={100} width={100} className="w-full" />

            <div className="text-center">
              <h2 className="text-[24px] py-2 font-lucida-bright">-Affordable & Transparent Pricing-</h2>
              <p className="text-[14px] px-6 pb-10 font-georgia"> High-quality design doesn’t have to break the bank. We offer cost-effective solutions with no hidden fees.</p>
            </div>

          </div>



          <div>
            <Image src="/why3.svg" alt="office chair in the office" width={100} height={100} className="w-full" />

            <div className="text-center">
              <h2 className="text-[24px] py-2 font-lucida-bright">-Tailored to Your Vision-</h2>
              <p className="text-[14px] px-6 pb-10 font-georgia">We craft designs that align with your unique brand and goals,  From concept to launch, we’ve got you.</p>
            </div>

          </div>



        </div>




      </div>

    </div>
    
    </>
  );
};

export default Why;

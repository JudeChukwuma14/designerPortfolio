"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "ESTHER MARY",
    role: "Web Developer",
    image: "/esther.svg",
  },
  {
    name: "KCEE .N",
    role: "Web Developer",
    image: "/kcee.svg",
  },
  {
    name: "STELLA .O",
    role: "Web Designer",
    image: "/stella.svg",
  },
  {
    name: "LAWRENCE OLA",
    role: "Graphic Designer",
    image: "/law.jpeg",
  },
];

const Section3 = () => {
  const swiperRef = useRef(null);
  const [goingForward, setGoingForward] = useState(true);

  const handleSlide = () => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (goingForward) {
      if (swiper.isEnd) {
        swiper.slidePrev();
        setGoingForward(false);
      } else {
        swiper.slideNext();
      }
    } else {
      if (swiper.isBeginning) {
        swiper.slideNext();
        setGoingForward(true);
      } else {
        swiper.slidePrev();
      }
    }
  };

  const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
      setGoingForward(false);
    } else if (swiper.isBeginning) {
      setGoingForward(true);
    }
  };

  return (
    <div className="py-10 px-4 xl:container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold font-cinzel text-[14px] mb-4">
            OUR TEAM
          </h1>
          <h1 className="text-3xl font-bold uppercase font-cinzel">
            AWESOME <br /> TOP TEAM MEMBERS
          </h1>
        </div>

        <div
          onClick={handleSlide}
          className="cursor-pointer transition-transform duration-300 mt-30"
          style={{
            transform: goingForward ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          <Image
            src="/nextbtn.svg"
            alt="Slide"
            height={60}
            width={60}
            className="w-[30px] lg:w-[40px]"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-[250px] xl:h-[300px] 2xl:h-[380px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="bg-black text-white py-2 px-2 text-center w-4/6 absolute bottom-0 left-0">
                  <h1 className="text-lg font-semibold font-cinzel">
                    {member.name}
                  </h1>
                  <p className="text-sm font-volkhov">{member.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section3;

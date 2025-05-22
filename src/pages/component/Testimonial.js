"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    text: "ChuksDesigns transformed our brand identity! The creativity, professionalism, and attention to detail were outstanding. Highly recommend!",
    author: "David O., Startup Founder",
    avatar: "/testy1.svg",
  },
  {
    text:  "From website development to branding, they delivered beyond our expectations. Our site is now sleek, functional, and user-friendly!",
    author: "Sarah M., Small Business Owner",
    avatar: "/testy2.svg",
  },
  {
    text:  "Working with ChuksDesigns was seamless! They understood our vision and brought it to life with stunning designs and strategic marketing.",
    author: "Emeka A., CEO",
    avatar: "/testy3.svg",
  },
  {
    text:  "I needed a professional and affordable web redesign, and ChuksDesigns delivered! The process was smooth, and the results were incredible.",
    author: "Jessica L., Entrepreneur",
    avatar: "/testy4.svg",
  },
  {
    text: "Their branding expertise took our business to the next level. Our visuals now match our company’s high standards!",
    author: "Tolu B., Business Consultant",
    avatar: "/testy5.svg",
  },
  {
    text: "ChuksDesignz helped us reposition our school’s online presence. Clean design, clear communication, and great energy throughout.",
    author: "Mrs. Uzo, School Administrator",
    avatar: "/testy6.svg",
  },
  {
    text: "They turned my rough ideas into a fully functional website that attracts real customers. Worth every kobo.",
    author: "Blessing E., Fashion Retailer",
    avatar: "/testy7.svg",
  },
  {
    text: "They helped bring my brand to life. Simple process, powerful outcome. I recommend them without thinking twice.",
    author: "Zion M., Real Estate Marketer",
    avatar: "/testy8.svg",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#68412B] py-10 overflow-visible relative xl:container mx-auto">
      <h1 className="gradient-border text-[18px] lg:text-xl xl:text-2xl 2xl:text-3xl -mt-6 mb-6 text-center w-[160px] lg:w-[230px] lg:py-[2px] text-white mx-auto">
        CLIENT LOVE
      </h1>

      {/* Mobile View */}
      <div className="block md:hidden relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Quotation & Avatar */}
                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 flex justify-between w-8/12 z-20 -mt-8">
                  <Image src="/qu1.svg" alt="quotation" width={50} height={50} className="w-6 h-6 -mt-7" />
                  <Image src={testimonial.avatar} alt={testimonial.author} width={50} height={50} className="mx-auto -mt-7 rounded-full" />
                  <Image src="/qu2.svg" alt="quotation" width={50} height={50} className="w-6 h-6 -mt-7" />
                </div>

                {/* Testimonial Card */}
                <div className="relative w-10/12 bg-[#EEE6DE] text-center py-4 pt-20 rounded-t-lg mx-auto px-2 flex flex-col">
                  <p className="mx-auto w-10/12 font-cinzel">{testimonial.text}</p>
                  <h2 className="mt-2 text-[14px] font-bold font-volkhov">– {testimonial.author}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-6 md:py-4 overflow-x-auto overflow-y-hidden scrollbar-hide px-10 carousel-wrapper">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-[40%] min-w-[40%] md:w-[30%] md:min-w-[30%] lg:w-[25%] lg:min-w-[25%] bg-[#EEE6DE] text-center py-4 pt-20 rounded-lg flex-shrink-0"
          >
            {/* Floating Quotation & Avatar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex justify-between w-8/12 z-20">
              <Image src="/qu1.svg" alt="quotation" width={30} height={30} className="w-6 h-6" />
              <Image src={testimonial.avatar} alt={testimonial.author} width={50} height={50} className="rounded-full mx-auto" />
              <Image src="/qu2.svg" alt="quotation" width={30} height={30} className="w-6 h-6" />
            </div>

            {/* Testimonial Card */}
            <p className="mx-auto w-10/12 font-cinzel">{testimonial.text}</p>
            <h2 className="mt-2 text-[18px] font-bold font-volkhov">– {testimonial.author}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

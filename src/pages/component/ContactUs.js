import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="relative xl:container mx-auto py-4 ">
        {/* Background for md screens and up */}
        <div
          className="hidden md:block absolute inset-0 h-full w-full -z-10"
          style={{
            background: "linear-gradient(to bottom, white 50%, #D0D0D0 50%)",
          }}
        ></div>

        {/* Background image for mobile */}
        <Image
          src="/contactban.svg"
          alt="banner"
          height={100}
          width={100}
          className="absolute right-0 md:hidden"
        />

        <div className="mx-auto px-4 w-10/12 z-20 py-2">
          <div className="md:px-8 lg:px-14 md:pb-8 mx-auto relative md:shadow-[0_0_30px_rgba(0,0,0,0.15)] mt-4 md:my-18 bg-white">
            
            {/* Top right small banner (visible only md+) */}
            <Image
              src="/topban.svg"
              alt="banner"
              width={100}
              height={100}
              className="absolute right-0 hidden md:block lg:w-[130px] "
            />

            {/* Contact Text */}
            <div className="mx-auto md:mx-0 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 text-center md:text-left py-8">
              <h1 className="font-cinzel text-3xl">CONTACT US</h1>
              <p className="font-georgia">
                Feel free to contact us any time. We will get back to you as soon as we can!
              </p>
            </div>

            {/* Contact Form */}
            <form className="font-georgia">
              <div className="md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-20 grid grid-cols-1 justify-between">
                
                {/* Left side inputs */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col group">
                    <label className="mb-1 text-black group-focus-within:text-[#BA8653] transition-all duration-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#00000033] py-2 outline-none px-2"
                    />
                  </div>

                  <div className="flex flex-col group">
                    <label className="mb-1 text-black group-focus-within:text-[#BA8653] transition-all duration-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#00000033] py-2 outline-none px-2"
                    />
                  </div>
                </div>

                {/* Right side inputs */}
                <div className="flex flex-col gap-4 mt-4 md:mt-0">
                  <div className="flex flex-col group">
                    <label className="mb-1 text-black group-focus-within:text-[#BA8653] transition-all duration-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border border-[#00000033] py-2 outline-none px-2"
                    />
                  </div>

                  <div className="flex flex-col group">
                    <label className="mb-1 text-black group-focus-within:text-[#BA8653] transition-all duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border border-[#00000033] py-2 outline-none px-2"
                    />
                  </div>
                </div>
              </div>

              {/* Message box */}
              <div className="flex flex-col mt-4 group">
                <label className="mb-1 text-black group-focus-within:text-[#BA8653] transition-all duration-300">
                  Message
                </label>
                <textarea
                  className="border border-[#00000033] outline-none px-2 py-2"
                  rows={7}
                  cols={20}
                ></textarea>
              </div>

              <div className="w-full flex justify-center mt-5 mb-4">
                <button className="btn-submit w-full md:w-3/12 py-1 px-6 text-white mx-auto font-cinzel">
  SUBMIT
</button>

              </div>
            </form>

            

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

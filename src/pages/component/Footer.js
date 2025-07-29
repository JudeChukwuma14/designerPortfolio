import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const socialMediaLinks = {
    facebook: "https://www.facebook.com/share/1CxP2im4ML",
    instagram:
      "https://www.instagram.com/designzchuks?igsh=MThzMDh0YXg3MzJhcg==",
    whatsapp: "https://wa.me/2349044881203",
    linkedin:
      "https://www.linkedin.com/in/highness-chukwuka-6b5b2235b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  };
  return (
    <>
      <div className="bg-[#C4A269] relative xl:container mx-auto flex flex-col items-center py-6 ">
        <div className="bg-[#BA8653] w-11/12 mx-auto h-[60px] absolute -top-8"></div>

        <div className="grid w-10/12 grid-cols-1 my-10 md:grid-cols-2 md:justify-between">
          <div className="w-full mx-auto lg:w-5/6">
            <div>
              <h2 className="hidden font-bold font-cinzel md:block">
                READY TO ELEVATE YOUR BRAND
              </h2>

              <h1 className="font-georgia text-[20px] md:text-[24px] font-extrabold">
                Schedule a Consultation
              </h1>
            </div>

            <div className="mt-2 font-georgia">
              <p>Address</p>
              <p>Lagos Nig.</p>
            </div>

            <div className="flex items-center gap-2 mt-2 font-georgia md:items-start md:flex-col">
              <p>Call</p>
              <Link href="tel:+2349044881203">
                <p className="hover:underline">+234-904-4881-203</p>
              </Link>
            </div>

            <div className="mt-2 font-georgia">
              <p>Email:</p>
              <Link href="mailto:chuksdesignz@gmail.com">
                <p className="hover:underline">chuksdesignz@gmail.com</p>
              </Link>
            </div>

            <div className="hidden gap-2 mt-2 md:flex">
              <Link
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fb.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/ig.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/wa.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={30} className="w-8 text-[#14170F]" />
              </Link>
            </div>
          </div>

          <div className="w-full mx-auto mt-6 lg:w-5/6 ">
            <div>
              <h1 className="font-georgia text-[20px] md:text-[24px] font-extrabold">
                Business Hours
              </h1>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p>Monday to Saturday</p>
              <p>8:00 am - 8:00 pm</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p>Sundays</p>
              <p>12:00 noon to 8:00 pm</p>
            </div>

            <div className="mt-3">
              <h1 className="font-georgia text-[20px]">Let's Connect</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  // Add logic to handle email submission (e.g., send to API)
                  console.log("Submitted email:", email);
                  alert("Thank you for joining!"); // Temporary feedback
                  e.target.reset(); // Clear the input
                }}
                className="flex gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email here*"
                  className="border-[1px] border-black px-2 py-1 placeholder:font-rage-italic outline-none"
                  required
                />
                <button type="submit" className="bg-[#14170F] text-white px-4">
                  Join
                </button>
              </form>
            </div>

            <div className="flex gap-2 mt-2 md:hidden">
              <Link
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fb.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/ig.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/wa.svg"
                  alt="social icon"
                  height={50}
                  width={50}
                  className="w-8 text-[#14170F]"
                />
              </Link>
              <Link
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={30} className="w-8 text-[#14170F]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

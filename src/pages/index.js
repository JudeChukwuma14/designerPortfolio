import Image from "next/image";
import Navbar from "./component/NavBar";
import Hero from "./component/Hero";
import Section1 from "./component/Section1";
import Services from "./component/Services";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Numbers from "./component/Number";
import Testimonial from "./component/Testimonial";
import Why from "./component/Why";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <Section1 />
        </div>
        <div id="services">
          <Services />
        </div>
        <Section2 />
        <Section3 />
        <Numbers />
        <div id="testimonial">
          <Testimonial />
        </div>
        <div id="why">
          <Why />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
}
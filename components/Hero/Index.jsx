import Image from "next/image";
import Navbar from "./Navbar";
import Qiskit from "../../images/logos/Elite1.png";
import Arrow from "../../images/shapes/Arrow.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/it.png";
import Purpulebutton from "../shared/Purpulebutton";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

const form_url = "https://docs.google.com/forms/d/e/1FAIpQLSeQzLREHDwTkovKrolE3ar9LLxpdnR4ldfmZxItOgK2QykTnQ/viewform"
const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-bg">
      <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <div className="flex flex-col gap-16 lg:gap-0 relative ">
          <div className="lg:hidden w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Globe} alt=""/>
          </div>
          <div className="hidden lg:block w-12 h-12 absolute top-1/4 right-8">
            <Image src={Atom} alt=""/>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ["Entourage FSM"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
              Elite Council Entourage is a non-profit organization committed to empowering students in uncovering and pursuing their professional passions.<br></br> In alignment with our motto One for All, All for Success!, our mission is to equip them with tools, guidance, and unique opportunities for creative and personalized professional growth.

              </p>
              <div className="flex items-end">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" alt="" />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px] ">
                  <Purpulebutton title={"Join Now!"}  h={form_url}/>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <Image src={Qiskit} alt=""/>
              </Tilt>
            </div>
          </div>

       

          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} alt=""/>
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} alt=""/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

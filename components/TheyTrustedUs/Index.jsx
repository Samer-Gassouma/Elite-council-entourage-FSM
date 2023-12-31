import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import maqam from "../../images/shapes/atomWhite.png";
import computer from "../../images/shapes/it.png";
import qBraid from "../../images/logos/Elite1.png";

const TheyTrustedUs = () => {
  return (
    <section id="our-sponsors" className="section-container lg:pt-16">
      <div className="relative">
        <div className="mt-24 lg:mt-7 2xl:mt-12 ">
          <SectionTitle title={"They trusted us"} />
        </div>

     

        <div className="invisible lg:visible 2xl:visible h-7 w-7 absolute left-2/3 top-5 right-0 lg:w-12 lg:h-12 lg:-ml-10 2xl:-ml-20 2xl:h-20 2xl:w-16">
          <Image src={maqam} alt="" />
        </div>

        <div className="absolute left-70 -top-24 right-28 h-12 w-14 -mr-20 -mt-0 lg:mt-8 2xl:mt-0 lg:w-28 lg:h-20 2xl:h-28 2xl:w-40">
          <Image src={maqam} alt="" />
        </div>

        <div className="flex flex-col justify-center gap-9 2xl:ml-52 lg:ml-40 lg:flex-row lg:mt-20 lg:gap-28 w-3/4 mx-auto  2xl:flex-row 2xl:mt-32 2xl:gap-40">
          <div className="mt-8 h-16 w-44 lg:w-[22rem] lg:h-36 2xl:h-44 2xl:w-[33rem]">
            <Image src={qBraid} alt="qbraid logo" />
          </div>

          {/* <div className="lg:mt-10">
            <div className="h-16 w-36 lg:w-[22rem] lg:h-36 2xl:h-52 2xl:w-[33rem]">
              <Image src={WIQ} alt="WIQ logo" />
            </div>
          </div> */}
        </div>
{/* 
        <div className="flex flex-col items-center gap-9 lg:flex-row lg:gap-24 lg:mr-28 2xl:flex-row 2xl:mr-60 2xl:gap-36 w-2/3 mx-auto">
          <div className="mt-8 h-[7.75rem] w-[7.6rem] lg:h-44 lg:w-44 lg:-mt-1 2xl:mt-4 2xl:h-64 2xl:w-64">
            <Image src={Sonatrach} alt="Sonatrach logo" />
          </div>

          <div className="lg:mt-10 lg:w-80 lg:h-28 2xl:mt-20 2xl:h-40 2xl:w-[32rem]">
            <Image src={World} alt="World logo" />
          </div>
        </div> */}
      </div>

      <div className="relative mt-20">
        <div className="invisible lg:visible 2xl:visible absolute -left-2 -top-36 right-0 lg:w-16 lg:h-16 2xl:h-20 2xl:w-20">
          <Image src={maqam} alt="" />
        </div>

        <div className="invisible lg:visible 2xl:visible absolute 2xl:-ml-6 left-1/2 2xl:top-10 lg:-top-1 lg:-ml-4 right-0 lg:w-16 lg:w-12 2xl:h-24 2xl:w-24">
          <Image src={computer} alt="" />
        </div>

        <div className="invisible lg:visible 2xl:visible absolute 2xl:left-1/2 2xl:top-12 lg:left-1/2 right-0 lg:w-8 lg:h-9 2xl:h-12 2xl:w-12">
          <Image src={maqam} alt="" />
        </div>

        <div className="invisible lg:visible 2xl:visible absolute left-90 -top-10 right-0 lg:w-14 lg:h-14 2xl:h-20 2xl:w-20">
          <Image src={computer} alt="" />
        </div>
      </div>

      <div className="visible lg:invisible 2xl:invisible w-10 h-10 -mt-80 ml-14">
        <Image src={computer} alt="" />
      </div>
      <div className="visible lg:invisible 2xl:invisible w-10 h-10 mt-64 ml-72">
        <Image src={maqam} alt="" />
      </div>
      <div className="visible lg:invisible 2xl:invisible w-7 h-8 mt-62 ml-28">
        <Image src={maqam} alt="" />
      </div>
      <div className="visible lg:invisible 2xl:invisible w-14 h-10 -mt-9 ml-24">
        <Image src={computer} alt="" />
      </div>
    </section>
  );
};

export default TheyTrustedUs;

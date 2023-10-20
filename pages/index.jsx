import Head from "next/head";
import OurTeam from "../components/OurTeam/Index";
import Services from "../components/Services/Index";
import AboutUs from "../components/AboutUs/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Elite council entourage FSM</title>
        
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutUs />
        <Services />
        <OurTeam/>
        
      </main>
      <Footer />
    </>
  );
}

import SectionTitle from "../shared/SectionTitle";
import ParagSection from "../shared/ParagSection";

const Services = () => {
  return (
    <section id="Services">
      <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> 

      <div className="relative about-bg py-16">
     
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"Our Services"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              
              paragraph1={`LA COMMUNICATION EFFICACE ET TRAVAIL D'ÉQUIPE.`}       
              paragraph2={'DÉVELOPPEMENT PERSONNEL POUR LA CROISSANCE PROFESSIONNELLE'}      
              paragraph3={'** STRATÉGIES DE MARKETING SUR LES RÉSEAUX SOCIAUX'}
              paragraph4={'** ONLINE GAMING TOURNAMENTS (N1 À FINAL)'}
              reverse={false}
              Level={"1 ére Année"}
            ></ParagSection>
             
            <ParagSection
               paragraph1={`**PROGRAMMATION ORIENTÉE OBJECT.`}       
               paragraph2={'** DÉVELOPPEMENT WEB AVEC SYMFONY ET PHP.'}      
               paragraph3={'** DÉVELOPPEMENT FRONTEND AVANCÉ AVEC DJANGO ET REACT'}
               paragraph4={'**FULL-STACK avec angular ET SPRING BOOT'}
               paragraph5={"** DÉVELOPPEMENT D'APPLICATIONS MOBILES AVEC FLUTTER"}
              reverse={false}
              Level={"2 éme Année"}
            ></ParagSection>
            <ParagSection
                paragraph1={`** DÉVELOPPEMENT DE JEUX AVANCÉ EN UNREAL ENGINE ET C++.`}       
                paragraph2={'** ALPHA INNOVATION COUNCIL (HACKATON INTER-CHAPTER).'}      
                paragraph3={'**ALPHA INNOVATION COUNCIL (BOOT CAMP DES FINALISTES)'}
              reverse={false}
              Level={"3 éme Année"}
            ></ParagSection>
          </div>
        </div>
      </div>
       <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> 
    </section>
  );
};

export default Services;

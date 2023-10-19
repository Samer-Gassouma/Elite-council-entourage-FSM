import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

const AboutEvent = () => {
  return (
    <section id="About_Us" className="section-container pt-12 lg:pt-24">
      <SectionTitle title={"About Us | Présentation et objectifs du club"} />

      <div className="p-4 sm:p-10">
        <p className="text-xl 2xl:text-3xl lg:text-2xl">
          <b>Elite Council Entourage FSM</b><br/> 
          Elite Council Entourage FSM est un club fondé par des étudiants de la Faculté des Sciences de Monastir (FSM) dans le but d améliorer les perspectives professionnelles des étudiants et de les guider vers un avenir prometteur.
        </p>
        <b>Notre slogan :  Un pour tous, tous pour la réussite ! .</b>
        <p className="text-xl 2xl:text-3xl lg:text-2xl p-2">
          

        La vision du club est de dynamiser la vie étudiante en garantissant le développement personnel des étudiants pour les préparer à mieux à leur insertion professionnelle. Les valeurs du club incluent la prise d initiative, l esprit d équipe, l engagement et la créativité.        </p>
        <p className="text-xl 2xl:text-3xl lg:text-2xl p-2">
          
        Le club a plusieurs missions, y compris la formation d initiation qui consiste à lancer des programmes de coaching pour les premières années animés par des experts en softskills pour les accompagner tout au long de leur intégration dans l équipe. La formation de perfectionnement consiste à lancer des sessions de formation technique pour la deuxième année, dirigées par des professionnels des technologies de l information pour augmenter leurs connaissances techniques et les préparer pour le niveau supérieur.        </p>
        <p className="text-xl 2xl:text-3xl lg:text-2xl p-2">
        En rejoignant Elite Council FSM Entourage, les étudiants auront la chance de développer leur potentiel personnel et professionnel tout en étant entourés d un groupe soutenant et motivant. 
          </p>
      </div>

      <div className="p-4 sm:p-10">
       
        </div>
      
    </section>
  );
};

export default AboutEvent;

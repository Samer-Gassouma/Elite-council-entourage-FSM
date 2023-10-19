import Image from "next/image";
import YellowButton from "../shared/YellowButton"
const ParagSection = ({
  keyword1,
  paragraph1,
  keyword2,
  keyword3,
  keyword4,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  img,
  reverse,
  redirect,
  Level,
}) => {
  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
      <div className="flex flex-col gap-11 flex-1">
      <div>
          <YellowButton redirect={redirect} title={Level} />
        </div>
      
        <p className="text-qiskit-white text-sm lg:text-xl font-medium leading-6 lg:leading-8 2xl:text-4xl 2xl:leading-[3rem] lg:pl-8">
          <span className="font-bold text-qiskit-black ">{keyword1}</span>
          {paragraph1} <br />
          <span className="font-bold text-qiskit-black">{keyword2}</span>
          {paragraph2}<br />
          <span className="font-bold text-qiskit-black">{keyword3}</span>
          {paragraph3}<br />
          <span className="font-bold text-qiskit-black">{keyword4}</span>
          {paragraph4}<br />
          {paragraph5}
        </p>

       
      </div>

      
    </div>
  );
};

export default ParagSection;

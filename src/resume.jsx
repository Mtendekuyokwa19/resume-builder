import { CallIcon, Mail } from "./svg";
import { v4 as uuidv4 } from 'uuid';

export function Resume({details}) {

    return(
      <section className="w-1/2 flex flex-col bg-gray mt-2 bg-textResume">
      <Header details={details} />
      <SelfDescription details={details}/>
      <DetailSpace details={details}/>
      </section>
    )
}

function Header({details}) {

  return (
    <section className="bg-fontGray text-textResume flex justify-center items-center flex-col h-20">
      <h1 className="text-2xl">{details.Fullname}</h1>
      <p>{details.Jobtitle}</p>
    </section>
  );

}
function SelfDescription({details}) {

  return (
    <section className="flex flex-col my-2 p-2">
      <h1 className="text-xl text-textResume bg-fontGray px-3 ">
        Personal Introduction
      </h1>
      <p className="text-justify">
 {details.Bio}
      </p>
    </section>
  );

}
function DetailSpace({details}){

  return(
    <section className="flex justify-stretch py-3">
        <PersonalStack details={details}/>
        <Work details={details}/>
    </section>
  )

}

function Work({details}) {
  return (
    <div className="flex flex-col gap-1">
      <EducationTab details={details} />
      <Experience />
    </div>
  );

}
function PersonalStack({details}) {

  return(
    <section className="flex flex-col gap-6 w-1/2 pl-2">

    <Contact details={details}/>
    <Skills details={details}/>
    </section>
  )
}

function Contact({details}) {

  return (
    <section className="flex flex-col gap-1 basis-1">
      <span className="border-b-2 border-x-resumeColor border-solid w-2/3">
        <h1 className="text-xl text-fontGray">Contact</h1>
      </span>

      <div className="flex gap-1  items-center">
        <CallIcon />
        <p>{details.Phonenumber}</p>
      </div>

      <div className="flex gap-1 items-center">
        <Mail />
        <p>{details.Email}</p>
      </div>
    </section>
  );
}

function Skills({details}) {
let keys=[];


for (let i = 0; i < details.stack.length; i++) {
  keys[i]=uuidv4();

}

  return (
    <section className="my-4 flex flex-col gap-2 items-stretch">
      <span className="border-b-2 border-x-resumeColor border-solid w-2/3 ">
        <h1 className="text-xl text-fontGray">Tools & Technologies</h1>
      </span>

      <ul className="list-disc list-inside pl-5">
        {details.stack.map(language=>{ console.log(language,"er");return <li className="list-disc">{language}</li>})  }
      </ul>
    </section>
  );
}

function EducationTab({ details }) {
  return (
    <section className="flex flex-col border-l-4 border-l-fontGray p-2">
      <section>
        <h1 className="text-xl text-textResume bg-fontGray px-3">Education</h1>
      </section>

      <ul>

{details.education.map((school)=>{


     return(  <li className="list-disc">
                  <h3 className="font-bold underline">
                    {school.degreeMajor}
                  </h3>
                  <p className="italic">{school.schoolName}</p>
                </li>); })}
</ul>
    </section>
  );
}

function Experience() {
  return (
    <section className="flex flex-col border-l-4 border-l-fontGray p-2">
      <section>
        <h1 className="text-xl text-textResume bg-fontGray px-3">Experience</h1>
      </section>

      <ul>
        <li className="list-disc">
          <h3 className="font-bold underline">Airbnb</h3>
          <p className="italic">systems analyst</p>
          <p className="font-mono">2014-2022</p>
        </li>
        <li className="list-disc">
          <h3 className="font-bold underline">Agriculture club</h3>
          <p className="italic">Gardener</p>

          <p className="font-mono">2023-now</p>
        </li>
      </ul>
    </section>
  );
}
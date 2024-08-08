import { CallIcon, Mail } from "./svg";
import { v4 as uuidv4 } from 'uuid';

export function Resume({details,targetRef}) {

    return(
      <section className="w-1/2 flex flex-col bg-gray mt-2 p-4 bg-textResume resume" ref={targetRef}>
      <Header details={details} />
      <SelfDescription details={details}/>
      <DetailSpace details={details}/>
      </section>
    )
}

function Header({details}) {

  return (
    <section className=" text-black flex justify-center items-center flex-col h-20">
      <h1 className="text-2xl font-bold">{details.Fullname.toUpperCase()}</h1>
      <p className="font-mono">{details.Jobtitle}</p>
    </section>
  );

}
function SelfDescription({details}) {

  return (
    <section className="flex flex-col my-2 p-3">
      <h1 className="text-xl text-black font-bold ">
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
      <Experience details={details} />
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

        <h1 className="text-xl text-fontGray font-bold">Contact</h1>


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

        <h1 className="text-xl text-fontGray font-bold">Tools & Technologies</h1>


      <ul className="list-disc list-inside pl-5">
        {details.stack.map(language=>{ console.log(language,"er");return <li className="list-disc">{language}</li>})  }
      </ul>
    </section>
  );
}

function EducationTab({ details }) {
  return (
    <section className="flex flex-col border-l-4 border-l-black p-2">
      <section>
        <h1 className="text-xl text-fontGray font-bold ">Education</h1>
      </section>

      <ul>
        {details.education.map((school) => {
          return (
            <li className="list-disc">
              <h3 className="font-bold underline">{school.degreeMajor}</h3>
              <p className="italic">{school.schoolName}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Experience({details}) {
  return (
    <section className="flex flex-col border-l-4 border-l-black p-2">
      <section>
        <h1 className="text-xl text-fontGray font-bold">Experience</h1>
      </section>

      <ul>

        {details.experience.map(job=>{return (
          <li className="list-disc">
            <h3 className="font-bold underline">{job.CompanyName}</h3>
            <p className="italic">{job.Role}</p>
            <p classNamez="font-mono">{job.setYear()}</p>
          </li>
        );})}


      </ul>
    </section>
  );
}
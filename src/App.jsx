import { FormTabs } from "./form"
import { Resume } from "./resume"
import { Github, Logo, Preview } from "./svg"
import { Fragment } from "react";
import { usePDF } from "react-to-pdf";
import {useState} from "react"
import generatePDF from "react-to-pdf";
import { useRef } from "react";
export default function App() {
  return (
 <Content/>
  )
}

function Content() {

const targetRef = useRef();

  return (
    <div className=" dark:bg-gray-950 content">
      <Nav targetRef={targetRef}  />
      <WorkSpace targetRef={targetRef} />
    </div>
  );

}

function Nav({targetRef}) {


  return (
    <nav className="flex  topBar dark:bg-bgBlack justify-around sm:gap-20 p-3 items-center border-b-2 border-b-gray shadow-lg top-0 sticky">
      <h1 className="sm:text-2xl text-base   justify-center items-center font-bold text-black dark:text-white flex flex-row gap-1">
        <p>Resumeify</p> <Logo />
      </h1>

      <section className="flex sm:gap-9 gap-2 justify-center items-center">
        <li>
          <button
            title="Download"
            className="flex justify-center items-center gap-1 bg-buttonColor text-textResume p-2 rounded-lg sm:rounded-md"
            onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
          >
            <Preview />
            <p className="text-xs sm:text-base">Download</p>
          </button>
        </li>
        <li>
          <button title="Github" className="flex justify-center items-center">
            <Github />
          </button>
        </li>
      </section>
    </nav>
  );
}

function WorkSpace({targetRef}) {
  const [Qualifications, setQualifications] = useState(new PersonQualification());

  function configureQualification(Qualifications) {

    setQualifications(Qualifications); console.log(Qualifications, "i");
  }

  return (
    <section className="flex flex-col sm:flex-col md:flex-col lg:flex-row mt-2 gap-3 p-2">
      <FormTabs Qualifications={Qualifications} configureQualification={configureQualification} />
      <Resume details={Qualifications} targetRef={targetRef}/>
    </section>
  );
}


class PersonQualification {
  Fullname = "Jack Bauwer";
  Phonenumber = "+2656764782";
  Bio =
    "I'm a data scientist with over 5 years of experience in building and deploying machine learning models. I'm passionate about using data to solve real-world problems and am always looking for new challenges. explore the world through words and flavors. Currently working on a historical fiction novel and perfecting my sourdough bread recipe.";
  Email = "jack@linux.org";
  Jobtitle = "Product Manager";
  stack=["Node Js","Bython","Java"];
  education=[new Education(),new Education("Havard college","farmology")]
  experience=[new IExperience("Microsoft","systems analyst","2013-2024")]

addjob(CompanyName,Role,date){
let job = new IExperience(CompanyName, Role, date);
job.start=new Date()
job.end=new Date()
  this.experience.push(job)
}

}

export class Education{



  constructor(  schoolName="Mombera university",
  degreeMajor="computer science"){
    this.schoolName=schoolName;
    this.degreeMajor=degreeMajor

  }

}

export class IExperience {
  constructor(
    CompanyName = "Mombera university",
    Role = "computer science",
    year="2022-2034"
  ) {
    this.CompanyName=CompanyName;
    this.Role=Role;
    this.year=year
  }

  description=""
  start=new Date();
  end=new Date();

  setYear(){
    this.year=this.start.getFullYear().toString()+"-"+this.end.getFullYear().toString();

    return this.year;
  }

  setRole(Role){
    this.Role=Role
  }

  setStartDate(date){

    this.start=new Date(date)
  }

  setEndDate(date){
    this.end=new Date(date)
  }
}
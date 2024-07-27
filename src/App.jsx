import { FormTabs } from "./form"
import { Resume } from "./resume"
import { Github, Logo, Preview } from "./svg"
import { Fragment } from "react";
import {useState} from "react"
export default function App() {
  return (
 <Content/>
  )
}

function Content() {

  return (
    <div className=" dark:bg-gray-950 content">
      <Nav />
      <WorkSpace />
    </div>
  );

}

function Nav() {

  return (
    <nav className="flex  dark:bg-bgBlack justify-around gap-20 p-3 items-center border-b-2 border-b-gray shadow-lg top-0 sticky">
      <h1 className="text-2xl font-bold text-black dark:text-white flex flex-row gap-1">
        <p>Resumeify</p> <Logo />
      </h1>

      <section className="flex gap-9 justify-center items-center">
        <li>
          <button
            title="Download"
            className="flex justify-center items-center gap-1 bg-buttonColor text-textResume p-2 rounded-md"
          >
            <Preview />
            <p>Download</p>
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

function WorkSpace() {
  const [Qualifications, setQualifications] = useState(new PersonQualification());

  function configureQualification(Qualifications) {

    setQualifications(Qualifications); console.log(Qualifications, "i");
  }

  return (
    <section className="flex mt-2 gap-3 p-2">
      <FormTabs Qualifications={Qualifications} configureQualification={configureQualification} />
      <Resume details={Qualifications}/>
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
  experience=[new Experience("Airbnb","Product Designer","2024-2034"),new Experience("Microsoft","systems analyst","2013-2024")]



}

export class Education{



  constructor(  schoolName="Mombera university",
  degreeMajor="computer science"){
    this.schoolName=schoolName;
    this.degreeMajor=degreeMajor

  }

}

class Experience {
  constructor(
    CompanyName = "Mombera university",
    Role = "computer science",
    year="2022-2034"
  ) {
    this.CompanyName=CompanyName;
    this.Role=Role;
    this.year=year
  }
}
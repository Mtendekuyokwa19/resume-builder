import { CallIcon, Mail } from "./svg";

export function Resume() {

    return(
      <section className="w-1/2 flex flex-col">
      <Header/>
      <SelfDescription/>
      <DetailSpace/>
      </section>
    )
}

function Header() {

  return(
    <section className="bg-fontGray text-textResume flex justify-center items-center flex-col h-20">
        <h1 className="text-2xl">Jack Beckerson</h1>
        <p>Product Designer</p>
    </section>
  )

}
function SelfDescription() {

  return (
    <section className="flex flex-col my-2 p-2">
      <h1 className="text-xl text-textResume bg-fontGray px-3 ">
        Personal Introduction
      </h1>
      <p className="text-justify">
        I'm a data scientist with over 5 years of experience in building and
        deploying machine learning models. I'm passionate about using data to
        solve real-world problems and am always looking for new challenges.
        explore the world through words and flavors. Currently working on a
        historical fiction novel and perfecting my sourdough bread recipe.
      </p>
    </section>
  );

}
function DetailSpace(){

  return(
    <section className="flex justify-stretch py-3">
        <PersonalStack/>
        <Work/>
    </section>
  )

}

function Work() {
  return (
    <div className="flex flex-col gap-1">
      <EducationTab />
      <Experience />
    </div>
  );

}
function PersonalStack() {

  return(
    <section className="flex flex-col gap-6 w-1/2">

    <Contact/>
    <Skills/>
    </section>
  )
}

function Contact() {

  return (
    <section className="flex flex-col gap-1 basis-1">
      <span className="border-b-2 border-x-resumeColor border-solid w-2/3">
        <h1 className="text-xl text-fontGray">Contact</h1>
      </span>

      <div className="flex gap-1  items-center">
        <CallIcon />
        <p>+26588445566</p>
      </div>

      <div className="flex gap-1 items-center">
        <Mail/>
        <p>example@linux.org</p>
      </div>
    </section>
  );
}

function Skills() {


  return (
    <section className="my-4 flex flex-col gap-2 items-stretch">
      <span className="border-b-2 border-x-resumeColor border-solid w-2/3 ">
        <h1 className="text-xl text-fontGray">Tools & Technologies</h1>
      </span>

      <ul className="list-disc list-inside">
        <li>Node Js</li>
        <li>Golang</li>
        <li>Figma</li>
        <li>Ruby on Rails</li>
      </ul>
    </section>
  );
}

function EducationTab(){

  return (
    <section className="flex flex-col border-l-4 border-l-fontGray p-2">
      <section>
        <h1 className="text-xl text-textResume bg-fontGray px-3">Education</h1>
      </section>

      <ul>
        <li className="list-disc">
          <h3 className="font-bold underline">Bachelors Degree In Arts</h3>
          <p className="italic">Mombera university</p>
        </li>
        <li className="list-disc">
          <h3 className="font-bold underline">Master's Degree In African History</h3>
          <p  className="italic">University of cape town</p>
        </li>
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
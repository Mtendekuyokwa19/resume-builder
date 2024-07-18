import { CallIcon, Mail } from "./svg";

export function Resume() {

    return(
      <section className="w-1/2 flex flex-col">
      <Header/>
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

function DetailSpace(){

  return(
    <section className="flex justify-stretch">
        <PersonalStack/>
        <Work/>
    </section>
  )

}

function Work() {
  return(

    <EducationTab/>
  )

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
    <section className="my-4 flex flex-col gap-1 basis-1">
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
    <section>

        <h1 className="text-xl text-textResume bg-fontGray p-2">Education</h1>

    </section>
  );
}
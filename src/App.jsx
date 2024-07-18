import { FormTabs } from "./form"
import { Resume } from "./resume"
import { Github, Logo, Preview } from "./svg"
import { Fragment } from "react";

export default function App() {
  return (
 <Content/>
  )
}

function Content() {

  return(
    <div>
      <Nav/>
      <WorkSpace/>
    </div>
  )

}

function Nav() {

  return (
    <nav className="flex bg-gray justify-around gap-20 p-3 items-center border-b-2 border-b-gray">
      <h1 className="text-2xl font-bold text-black flex flex-row gap-1">

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

  return (
    <section className="flex" >
      <FormTabs />
      <Resume />
    </section>
  );
}
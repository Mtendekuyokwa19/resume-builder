import { FormTabs } from "./form"
import { Resume } from "./resume"
import { Github, Preview } from "./svg"
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

  return(
    <nav className="flex h-9 bg-gray-light justify-around gap-20 p-8">


        <h1 className="text-xl font-bold text-fontGray">Resume Builder</h1>

      <section className="flex gap-9">
      <li>
        <button title="Preview" className="flex justify-center items-center gap-1"><Preview/>
        <p>Preview</p>
        </button>
      </li>
      <li>
        <button title="Github">
          <Github/>
        </button>
      </li>
      </section>
    </nav>
  )
}

function WorkSpace() {

  return (
    <section className="flex" >
      <FormTabs />
      <Resume />
    </section>
  );
}
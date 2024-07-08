import { FormTabs } from "./form"
import { Github, Preview } from "./svg"

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
    <nav className="flex h-9 bg-neutral-500 p-2 justify-around gap-20">


        <h1>Resume Builder</h1>

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

  return(
    <FormTabs/>
  )
}
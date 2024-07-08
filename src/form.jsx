import { Education, Experience, PersonalDataIcon, Skills } from "./svg"
import { v4 as uuid } from 'uuid';
export function FormTabs() {

  return(
    <div>
      <TabCarousel/>
    </div>
  )

}

function TabCarousel(){
  let icons=[{icon:<PersonalDataIcon/>,id:uuid()},{icon:<Education/>,id:uuid()},{icon:<Experience/>,id:uuid()},{icon:<Skills/>,id:uuid()}]


return(
  <nav className="flex bg-gray-400 w-1/2 justify-center items-center gap-4">
    {icons.map(icon=>{

      return(<>

      <Button key={icon.id}>{icon.icon}</Button>
      {(icons.indexOf(icon)!==icons.length-1)?<Line/>:null}
      </>
      )
})}
  </nav>
)
}

function Button({children}) {

  return(
    <>
    <button>
      {children}
    </button>

    </>

  )

}

function Line(){

  return(
    <div className="w-14 h-2 bg-black">

    </div>
  )
}
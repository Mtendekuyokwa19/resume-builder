import { Fragment } from "react";
import { Add, Education, Experience, PersonalDataIcon, Skills } from "./svg"
import { v4 as uuid } from 'uuid';
import { useState } from "react";
export function FormTabs() {

  return(
    <div className="flex flex-col gap-3 w-1/2 h-2/3 bg-red-400 p-6">

      <FormBody/>

    </div>
  )

}

function FormBody() {

  const [position, setposition] = useState(0);
  function moveLeft() {

    return position === 0 ? setposition(3) : setposition(position - 1);

  }

  function moveRight() {
     return position===3?setposition(0):setposition(position + 1);
  }

  const Forms=[<PersonalDataForm/>,<EducationForm/>,<ExperienceForm/>,<SkillsForm/>]
  return (
    <>
      <TabCarousel setIndex={setposition} index={position} />;
      {Forms[position]}

        <CarouselButtons
          moveLeft={() => moveLeft()}
          moveRight={() => moveRight()}
          index={position}
        />

    </>
  );
}

function TabCarousel({setIndex,index}){
  let icons=[{icon:<PersonalDataIcon/>,id:uuid()},{icon:<Education/>,id:uuid()},{icon:<Experience/>,id:uuid()},{icon:<Skills/>,id:uuid()}]


return(
  <nav className="flex bg-gray-400  justify-center items-center gap-4 border-gray-light border-b-2 p-2 ">
    {icons.map(icon=>{

      return (
        <>
          <Button
            setIndex={() => setIndex(icons.indexOf(icon))}
            color={index === icons.indexOf(icon) ? "#9ed8db" : "#eff0f6"}
            key={icon.id}
          >
            {icon.icon}
          </Button>
          {icons.indexOf(icon) !== icons.length - 1 ? <Line /> : null}
        </>
      );
})}
  </nav>
)
}

function Button({children,setIndex,index,color}) {

  return(
    <>
    <button onClick={()=>setIndex(index)} style={{background:color}} className="bg-gray p-3 rounded-full flex justify-center items-center tabIcon">
      {children}
    </button>

    </>

  )

}

function Line(){

  return(
    <div className="w-16 h-2 bg-gray rounded-lg">

    </div>
  )
}

function CarouselButtons({ moveLeft, moveRight, index }) {
  return (
    <section className="flex justify-between m-8 ">
      <button
        className="p-3 text-gray-light w-24 rounded-md carouselBtnPrev"
        onClick={() => moveLeft()}
      >
        Prev
      </button>

      <button
        className="p-3 bg-buttonColor text-gray-light w-24 rounded-md carouselBtnNext"
        onClick={() => moveRight()}
      >
        Next
      </button>
    </section>
  );
}
function PersonalDataForm() {

  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <div className="flex flex-col gap-1">
        <h1 className="text-fontGray text-xl ">Personal Data</h1>
        <p className="text-textGrey">
          Please fill in your personal information
        </p>
      </div>
      <form action="" method="post" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="text-fontGray">
              Fullname:
            </label>
            <input type="text" id="Name" placeholder="Joseph Ubuntu" />
          </div>

          <div className="formElement">
            <label htmlFor="email" className="text-fontGray">
              Email:
            </label>
            <input type="email" id="email" placeholder="example@linux.org" />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="PhoneNumber" className="text-fontGray">
              Phone Number:
            </label>
            <input type="tel" id="PhoneNumber" placeholder="+2654567891011" />
          </div>
          <div className="formElement">
            <label htmlFor="JobTitle" className="text-fontGray">
              Job Title:
            </label>
            <input type="text" id="JobTitle" placeholder="Product Designer" />
          </div>
        </section>
      </form>

      <section className="flex flex-col">
        <label htmlFor="bio" className="text-fontGray">
          Bio:
        </label>

        <textarea
          name="bio"
          id="bio"
          className="Bio"
          placeholder="I love to code on weekends and help my little brother work on his arduino. "
        ></textarea>
      </section>
    </section>
  );

}

function EducationForm() {

  return(
      <section className="flex flex-col gap-3 mx-8 ">
        <div className="flex flex-col gap-1">
           <h1 className="text-fontGray text-xl ">Education</h1>
           <p className="text-textGrey">Please fill in your Education details</p>
        </div>
        <form action="" method="post" className="flex flex-col gap-4">

            <section className="flex justify-between">


                <div className="formElement">
                  <label htmlFor="Name" className="text-fontGray">School Name:</label>
                  <input type="text" id="Name" placeholder="Mombera University" />
                </div>


                <div className="formElement">
                  <label htmlFor="email" className="text-fontGray">Degree Major:</label>
                  <input type="email" id="email" placeholder="Computer Science"/>
                </div>

            </section>
            <section className="flex justify-between">
              <div className="formElement">
                  <label htmlFor="Startdate" className="text-fontGray">Start Date:</label>
                  <input type="date" id="Startdate" className="w-72"  />
              </div>
              <div className="formElement">
                  <label htmlFor="finishDate" className="text-fontGray">Finish Date:</label>
                  <input type="date" id="finishDate" className="w-72"/>
              </div>

            </section>


        </form>

      </section>
  )

}

function ExperienceForm() {
  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <section className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="text-fontGray text-xl ">Experience</h1>
          <button title="Add Experience" className="bg-gray-light rounded-full w-7 flex justify-center items-center">
          <Add/>
          </button>
        </div>

        <p className="text-textGrey">Please fill in your Job history</p>
      </section>
      <form action="" method="post" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="text-fontGray">
              Job Title:
            </label>
            <input type="text" id="Name" placeholder="UX Designer" />
          </div>

          <div className="formElement">
            <label htmlFor="email" className="text-fontGray">
              Company Name:
            </label>
            <input type="email" id="email" placeholder="Computer Science" />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Startdate" className="text-fontGray">
              Start Date:
            </label>
            <input type="date" id="Startdate" className="w-72" />
          </div>
          <div className="formElement">
            <label htmlFor="finishDate" className="text-fontGray">
              Finish Date:
            </label>
            <input type="date" id="finishDate" className="w-72" />
          </div>
        </section>

        <section className="flex flex-col formElement">
          <label htmlFor="Desciption" className="text-fontGray">
            Desciption:
          </label>
          <textarea name="Desciption" id="Desciption"></textarea>
        </section>
      </form>
    </section>
  );
}

function SkillsForm() {


  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <section className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="text-fontGray text-xl ">Tools and Technologies</h1>
        </div>

        <p className="text-textGrey">
          Please Add a technology you are familiar with
        </p>
      </section>
      <form action="" method="" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="text-fontGray">
              Technology:
            </label>
            <input type="text" id="Name" placeholder="NodeJS" />

            <button
              title="Add Skills"
              className="bg-gray-light rounded-md my-6 p-3 flex justify-center gap-1 items-center submitSkill"
            >
              <Add /> <p>Submit</p>
            </button>
          </div>
        </section>
      </form>
    </section>
  );
}
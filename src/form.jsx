import { Fragment } from "react";
import { Add, DeleteIcon, Education, Experience, PersonalDataIcon, Skills } from "./svg"
import { v4 as uuid } from 'uuid';
import { useState } from "react";
import { Education as School } from "./App";
export function FormTabs({configureQualification,Qualifications}) {

  return(
    <div className="flex flex-col gap-3 w-1/2 h-2/3 rounded-lg shadow-md p-6 dark:bg-bgBlack">

      <FormBody Qualifications={Qualifications} configureQualification={configureQualification}/>

    </div>
  )

}

function FormBody({configureQualification,Qualifications}) {

  const [position, setposition] = useState(0);
  function moveLeft() {

    return position === 0 ? setposition(3) : setposition(position - 1);

  }

  function moveRight() {
     return position===3?setposition(0):setposition(position + 1);
  }

  const Forms = [
    <PersonalDataForm
      Qualifications={Qualifications}
      configureQualification={configureQualification}
    />,
    <EducationForm
      Qualifications={Qualifications}
      configureQualification={configureQualification}
    />,
    <ExperienceForm
      Qualifications={Qualifications}
      configureQualification={configureQualification}
    />,
    <SkillsForm
      Qualifications={Qualifications}
      configureQualification={configureQualification}
    />
  ];
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


return (
  <nav className="flex  justify-center items-center gap-4 border-gray-light border-b-2 p-2 ">
    {icons.map((icon) => {
      return (
        <>
          <Button
            setIndex={() => setIndex(icons.indexOf(icon))}
            color={index === icons.indexOf(icon) ? "#03dac5" : "#eff0f6"}
            key={icon.id}
          >
            {icon.icon}
          </Button>
          {icons.indexOf(icon) !== icons.length - 1 ? <Line /> : null}
        </>
      );
    })}
  </nav>
);
}

function Button({children,setIndex,index,color}) {

  return(
    <>
    <button onClick={()=>setIndex(index)} style={{background:color}} className="dark:bg-blue-400 p-3 rounded-full flex justify-center items-center tabIcon">
      {children}
    </button>

    </>

  )

}

function Line(){

  return(
    <div className="w-16 h-2 bg-textResume rounded-lg">

    </div>
  )
}

function CarouselButtons({ moveLeft, moveRight, index }) {
  return (
    <section className="flex justify-between m-8 ">
      <button
        className="p-3 text-textResume w-24 rounded-md carouselBtnPrev"
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
function PersonalDataForm({configureQualification,Qualifications}) {

  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <div className="flex flex-col gap-1">
        <h1 className="dark:text-blueGray-100 text-textGrey text-xl ">
          Personal Data
        </h1>
        <p className="text-textGrey dark:text-blueGray-400">
          Please fill in your personal information
        </p>
      </div>
      <form action="" method="post" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label
              htmlFor="Name"
              className="text-fontGray dark:text-blueGray-300"
            >
              Fullname:
            </label>
            <input type="text" id="Name" placeholder="Joseph Ubuntu" onChange={(e)=>configureQualification({...Qualifications,'Fullname':e.target.value})} />
          </div>

          <div className="formElement">
            <label
              htmlFor="email"
              className="text-fontGray dark:text-blueGray-300"
            >
              Email:
            </label>
            <input type="email" id="email" placeholder="example@linux.org" onChange={(e)=>configureQualification({...Qualifications,'Email':e.target.value})} />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label
              htmlFor="PhoneNumber"
              className="text-fontGray dark:text-blueGray-300"
            >
              Phone Number:
            </label>
            <input type="tel" id="PhoneNumber" placeholder="+2654567891011" onChange={(e)=>configureQualification({...Qualifications,'Phonenumber':e.target.value})} />
          </div>
          <div className="formElement">
            <label
              htmlFor="JobTitle"
              className="text-fontGray dark:text-blueGray-300"
            >
              Job Title:
            </label>
            <input type="text" id="JobTitle" placeholder="Product Designer" onChange={(e)=>configureQualification({...Qualifications,'JobTitle':e.target.value})} />
          </div>
        </section>
      </form>

      <section className="flex flex-col">
        <label htmlFor="bio" className="text-fontGray dark:text-blueGray-300">
          Bio:
        </label>

        <textarea
          name="bio"
          id="bio"
          className="Bio"
          placeholder="I love to code on weekends and help my little brother work on his arduino. "

          onChange={(e)=>configureQualification({...Qualifications,'Bio':e.target.value})}
        ></textarea>
      </section>
    </section>
  );

}

function EducationForm({ configureQualification, Qualifications }) {
  let learningPlace = new School();
  let learningPlaceTwo = new School();
  const [educationPlaces, seteducationPlaces] = useState([learningPlace]);
  const [qualificationNoticeBoard, setqualificationNoticeBoard] = useState(null);

function ListQualification(){
let schools=Qualifications.education.map((school) => { return <AllSchools school={school} />});
setqualificationNoticeBoard(schools )


}



  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="dark:text-blueGray-100 text-textGrey text-xl ">
            Education
          </h1>
          <button
            title="Add Experience"
            className="bg-gray-light rounded-full w-7 flex justify-center items-center"

            onClick={()=>{seteducationPlaces([learningPlace,learningPlaceTwo])
              configureQualification({
              ...Qualifications,
              education: educationPlaces,

            });
            ListQualification();

            console.log(Qualifications)}}
          >
            <Add />
          </button>
        </div>

        <p className="text-textGrey dark:text-blueGray-400">
          Please fill in your Education details
        </p>
        {qualificationNoticeBoard}
      </div>
      <form action="" method="post" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="dark:text-blueGray-300">
              School Name:
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Mombera University"
              onChange={(e) => {
                educationPlaces[educationPlaces.length-1].schoolName =
                  e.target.value;
                seteducationPlaces([...educationPlaces]);
                console.log(educationPlaces);
                configureQualification({
                  ...Qualifications,
                  education: educationPlaces,
                });
              }}
            />
          </div>

          <div className="formElement">
            <label htmlFor="email" className="dark:text-blueGray-300">
              Degree Major:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Computer Science"
              onChange={(e) => {
                educationPlaces[educationPlaces.length-1].degreeMajor = e.target.value;
                seteducationPlaces([...educationPlaces]);
                console.log(educationPlaces);
                configureQualification({
                  ...Qualifications,
                  education: educationPlaces,
                });
              }}
            />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Startdate" className="dark:text-blueGray-300">
              Start Date:
            </label>
            <input type="date" id="Startdate" className="w-72" />
          </div>
          <div className="formElement">
            <label htmlFor="finishDate" className="dark:text-blueGray-300">
              Finish Date:
            </label>
            <input type="date" id="finishDate" className="w-72" />
          </div>
        </section>
      </form>
    </section>
  );
}

function ExperienceForm({ configureQualification, Qualification }) {
  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <section className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="dark:text-blueGray-100 text-textGrey text-xl ">
            Experience
          </h1>
          <button
            title="Add Experience"
            className="bg-gray-light rounded-full w-7 flex justify-center items-center"
          >
            <Add />
          </button>
        </div>

        <p className="text-textGrey dark:text-blueGray-400">
          Please fill in your Job history
        </p>
      </section>
      <form action="" method="post" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="dark:text-blueGray-300">
              Job Title:
            </label>
            <input type="text" id="Name" placeholder="UX Designer" />
          </div>

          <div className="formElement">
            <label htmlFor="email" className="dark:text-blueGray-300">
              Company Name:
            </label>
            <input type="email" id="email" placeholder="Computer Science" />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Startdate" className="dark:text-blueGray-300">
              Start Date:
            </label>
            <input type="date" id="Startdate" className="w-72" />
          </div>
          <div className="formElement">
            <label htmlFor="finishDate" className="dark:text-blueGray-300">
              Finish Date:
            </label>
            <input type="date" id="finishDate" className="w-72" />
          </div>
        </section>

        <section className="flex flex-col formElement">
          <label htmlFor="Desciption" className="dark:text-blueGray-300">
            Desciption:
          </label>
          <textarea name="Desciption" id="Desciption"></textarea>
        </section>
      </form>
    </section>
  );
}

function SkillsForm({ configureQualification, Qualifications }) {

  const [stack, setstack] = useState(null);
  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <section className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="dark:text-blueGray-100 text-textGrey text-xl ">
            Tools and Technologies
          </h1>
        </div>

        <p className="text-textGrey dark:text-blueGray-400">
          Please Add a technology you are familiar with
        </p>
      </section>
      <form action="" method="" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="dark:text-blueGray-300">
              Technology:
            </label>
            <input type="text" id="Name" placeholder="NodeJS" onChange={(e)=>{setstack(e.target.value)}} />

            <button
              title="Add Skills"
              className="bg-gray-light rounded-md my-6 p-3 flex justify-center gap-1 items-center submitSkill"
              onClick={(e)=>{
                e.preventDefault()
                let qualification=Qualifications;
                qualification.stack.push(stack);

                configureQualification(qualification);
              }}
            >
              <Add /> <p>Submit</p>
            </button>
          </div>
        </section>
      </form>
    </section>
  );
}

function AllSchools({school}){

  return(
    <div className="flex dark:bg-gray-200 p-2 justify-between rounded-md">
      <h4 className="italic">{school.schoolName}</h4>
      <button title="deleteSchool"> <DeleteIcon/> </button>
    </div>
  )

}
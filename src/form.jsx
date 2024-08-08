import { Fragment } from "react";
import { Add, DeleteIcon, Education, Experience, PersonalDataIcon, Skills } from "./svg"
import { v4 as uuid } from 'uuid';
import { useState } from "react";
import { Education as School } from "./App";
import { IExperience } from "./App";
export function FormTabs({configureQualification,Qualifications}) {

  return(
    <div className="flex flex-col gap-3 lg:w-1/2 h-2/3 sm:ma-w-full rounded-lg shadow-md lg:p-6 md:p-2 sm:p-3 dark:bg-bgBlack">

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
    <section className="flex flex-col   mx-3 sm:mx-8 gap-1 sm:gap-3 md:gap-1 ">
      <div className="flex flex-col gap-1">
        <h1 className="dark:text-blueGray-100 text-textGrey text-xl lg:text-xl md:text-xs sm:text-sm ">
          Personal Data
        </h1>
        <p className="text-textGrey dark:text-blueGray-400 lg:text-base md:text-xs sm:text-sm">
          Please fill in your personal information
        </p>
      </div>
      <form action="" method="post" className="flex flex-col gap-7">
        <section className="flex justify-between flex-col sm:flex-col md:flex-col lg:flex-row sm:gap-4 md:gap-4">
          <div className="formElement lg:text-base md:text-xs sm:text-sm">
            <label
              htmlFor="Name"
              className="text-fontGray dark:text-blueGray-300"
            >
              Fullname:
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Joseph Ubuntu"
              onChange={(e) =>
                configureQualification({
                  ...Qualifications,
                  Fullname: e.target.value,
                })
              }
            />
          </div>

          <div className="formElement lg:text-base md:text-xs sm:text-sm">
            <label
              htmlFor="email"
              className="text-fontGray dark:text-blueGray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@linux.org"
              onChange={(e) =>
                configureQualification({
                  ...Qualifications,
                  Email: e.target.value,
                })
              }
            />
          </div>
        </section>
        <section className="flex justify-between flex-col sm:flex-col md:flex-col lg:flex-row sm:gap-4 md:gap-4 sm:text-sm md:text-sm">
          <div className="formElement lg:text-base md:text-xs sm:text-sm">
            <label
              htmlFor="PhoneNumber"
              className="text-fontGray dark:text-blueGray-300"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="PhoneNumber"
              placeholder="+2654567891011"
              onChange={(e) =>
                configureQualification({
                  ...Qualifications,
                  Phonenumber: e.target.value,
                })
              }
            />
          </div>
          <div className="formElement lg:text-base md:text-xs sm:text-sm">
            <label
              htmlFor="JobTitle"
              className="text-fontGray dark:text-blueGray-300"
            >
              Job Title:
            </label>
            <input
              type="text"
              id="JobTitle"
              placeholder="Product Designer"
              onChange={(e) =>
                configureQualification({
                  ...Qualifications,
                  Jobtitle: e.target.value,
                })
              }
            />
          </div>
        </section>
      </form>

      <section className="flex flex-col lg:text-base md:text-xs sm:text-sm">
        <label htmlFor="bio" className="text-fontGray dark:text-blueGray-300">
          Bio:
        </label>

        <textarea
          name="bio"
          id="bio"
          className="Bio"
          placeholder="I love to code on weekends and help my little brother work on his arduino. "
          onChange={(e) =>
            configureQualification({ ...Qualifications, Bio: e.target.value })
          }
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
  const [disabled, setdisabled] = useState(false);



function ListQualification(){
let schools=Qualifications.education.map((school) => { return <AllSchools school={school} Qualifications={Qualifications} configureQualification={configureQualification} ListQualification={ListQualification} seteducationPlaces={(place)=>seteducationPlaces(place)} manageDisability={(bool)=>{}} handleDisabling={handleDisabling}/>});
setqualificationNoticeBoard(schools )


}




function handleDisabling(){

  Qualifications.education.length>1?setdisabled(true):setdisabled(false);
  handleCleareducation()
}
function handleCleareducation(){

    let clear=Qualifications.education.length === 0
      ? seteducationPlaces([learningPlace])
      :null ;
}

function clearForm() {
  document.querySelector("#educationForm").reset();

}


  return (
    <section className="flex flex-col gap-3 mx-8 ">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="dark:text-blueGray-100 text-textGrey text-xl ">
            Education
          </h1>
          <button type="reset"
            title="Add Experience"
            className="bg-gray-light rounded-full w-7 flex justify-center items-center"
        disabled={disabled}

            onClick={()=>{seteducationPlaces([...educationPlaces,learningPlaceTwo])
              configureQualification({
              ...Qualifications,
              education: educationPlaces,

            });
            ListQualification();
            clearForm()
            handleDisabling();


}}
          >
            <Add />
          </button>
        </div>

        <p className="text-textGrey dark:text-blueGray-400">
          Please fill in your Education details
        </p>
        {qualificationNoticeBoard}
      </div>
      <form action="" method="post" className="flex flex-col gap-4" id="educationForm">
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

          <div className="formElement educationForm">
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

function ExperienceForm({ configureQualification, Qualifications }) {
  let personalQualification=Qualifications;
  let initialJob=new IExperience("University of bronx","Software engineer","2012-2024");
const [Joblist, setJoblist] = useState(null);
  console.log(initialJob.setRole("twice"), initialJob);
  const [jobs, setjobs] = useState([initialJob]);
function newJob() {
  let Jobs=Qualifications.experience.map(job=>{return <AllJobs name={job.CompanyName} index={Qualifications.experience.indexOf(job)} techList={Qualifications} settechList={configureQualification} setTabs={()=>{newJob()}} Tabs={Joblist} jobs={jobs} setJobs={(Jobs)=>setjobs(Jobs)} unEmployedstate={unEmployedstate} />})
  setJoblist(Jobs);

}


function clearForm() {
  document.querySelector("#experienceForm").reset()

}

function unEmployedstate() {
  setjobs([initialJob])

}


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
            onClick={() => {

                 clearForm();
            setjobs([...jobs,new IExperience("Company", "Role", "2024-4322")])
              configureQualification({...personalQualification,'experience':jobs})
              console.log(personalQualification)
              newJob();

            }}
          >
            <Add />
          </button>
        </div>

        <p className="text-textGrey dark:text-blueGray-400">
          Please fill in your Job history
        </p>
      </section>
     {Joblist}
      <form
        action=""
        method="post"
        className="flex flex-col gap-4"
        id="experienceForm"
      >
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="dark:text-blueGray-300">
              Job Title:
            </label>
            <input
              type="text"
              id="Name"
              placeholder="UX Designer"
              onChange={(e) =>{
                  jobs[
                  jobs.length - 1
                ].setRole(e.target.value);

                configureQualification({...personalQualification,'experience':jobs})
              }



              }
            />
          </div>

          <div className="formElement">
            <label htmlFor="email" className="dark:text-blueGray-300">
              Company Name:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Computer Science"
              onChange={(e) =>{jobs[
                  jobs.length - 1
                ].CompanyName = e.target.value;
               configureQualification({
                 ...personalQualification,
                 'experience': jobs,
               });

              }

              }
            />
          </div>
        </section>
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Startdate" className="dark:text-blueGray-300">
              Start Date:
            </label>
            <input
              type="date"
              id="Startdate"
              className="w-72"
              onChange={(e) =>{

                jobs[
                  jobs.length - 1
                ].setStartDate(e.target.value);

                 configureQualification({
                   ...personalQualification,
                   'experience': jobs,
                 });
              }

              }
            />
          </div>
          <div className="formElement">
            <label htmlFor="finishDate" className="dark:text-blueGray-300">
              Finish Date:
            </label>
            <input
              type="date"
              id="finishDate"
              className="w-72"
              onChange={(e) =>{
                      jobs[
                        jobs
                        .length - 1
                      ].setEndDate(e.target.value);
              configureQualification({
                ...personalQualification,
                'experience': jobs,
              });
              }

              }
            />
          </div>
        </section>

        <section className="flex flex-col formElement">
          <label htmlFor="Desciption" className="dark:text-blueGray-300">
            Desciption:
          </label>
          <textarea
            name="Desciption"
            id="Desciption"
            onChange={(e) =>{jobs[
                jobs.length - 1
              ].description = e.target.value;
               configureQualification({
                 ...personalQualification,
                ' experience': jobs,
               });
            }

            }
          ></textarea>
        </section>
      </form>
    </section>
  );
}

function SkillsForm({ configureQualification, Qualifications }) {

  const [techList, settechList] = useState(Qualifications.stack);
  const [disabled, setdisabled] = useState(false);

  let keys=[];

  for (let x = 0; x < techList.length; x++) {
  keys[x]=uuid()

  }
  let tools=techList.map(stack=><AllStacks key={keys[techList.indexOf(stack)]} name={stack} index={techList.indexOf(stack)} techList={techList} settechList={(techList)=>{settechList(techList); configureQualification({...Qualifications,'stack':techList})}}/>);
const [stack, setstack] = useState(null);
  function handleClick() {
      let oldStack=Qualifications.stack;
      oldStack.push(stack)

      let ButtonState=techList.length>4?setdisabled(true):false;

     return configureQualification({...Qualifications,'stack':oldStack});

  }


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
        <div className="flex justify-evenly">{tools}</div>
      </section>
      <form action="" method="" className="flex flex-col gap-4">
        <section className="flex justify-between">
          <div className="formElement">
            <label htmlFor="Name" className="dark:text-blueGray-300">
              Technology:
            </label>
            <input
              type="text"
              id="Name"
              placeholder="NodeJS"
              onChange={(e) => {
                setstack(e.target.value);
              }}
            />

            <button
              title="Add Skills"
              className="bg-gray-light rounded-md my-6 p-3 flex justify-center gap-1 items-center submitSkill"
              disabled={disabled}
              onClick={(e) => {
                e.preventDefault();
                handleClick();
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

function AllSchools({school,index,ListQualification,configureQualification,Qualifications,manageDisability,seteducationPlaces,handleDisabling}){
let personalQualification=Qualifications;

  return(
    <div className="flex dark:bg-gray-200 p-2 justify-between rounded-md">
      <h4 className="italic">{school.schoolName}</h4>
      <button title="deleteSchool" onClick={()=>{personalQualification.education.splice(index,1);seteducationPlaces(personalQualification.education); configureQualification({...personalQualification});handleDisabling(); ListQualification();manageDisability(false)}}> <DeleteIcon/> </button>
    </div>
  )

}

function AllStacks({ name,index ,techList,settechList}) {
  let techStack=techList;

  return (
    <div className="flex dark:bg-gray-200 p-2 justify-between gap-2 rounded-md shadow-md">
      <h4 className="italic">{name}</h4>
      <button title="deleteSchool" onClick={()=>{techStack.splice(index,1);  settechList(techStack);}}>
        <DeleteIcon />
      </button>
    </div>
  );
}

function AllJobs({ name, index, techList, settechList,setTabs,jobs,setJobs,unEmployedstate }) {
let Jobs=techList.experience;


  return (
    <div className="flex dark:bg-gray-200 p-2 justify-between gap-2 rounded-md shadow-md">
      <h4 className="italic">{name}</h4>
      <button
            onClick={()=>{
              console.log(techList)
              Jobs.splice(index,1);
              settechList({...techList,'experience':Jobs});

              setJobs(Jobs)

               setTabs();
               let allTasksremoval=Jobs.length===0?unEmployedstate():null;
            }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

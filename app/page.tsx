import Image from "next/image";
import AboutMe from '@/components/Card/aboutmecard'
import CAE from '@/components/Dropdowns/cae'
import P4LABS from '@/components/Dropdowns/p4labs'
import Project from "@/components/Projects/project";
import { getAllProjects } from '@/utils/projects';

export default function Home() {
  const skills = [
    "React/Next",
    "Angular",
    "Flask",
    ".NET development",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Arduino",
    "MySQL",
    "SQLite",
    "Xamarin",
    "Networking",
    "Security",
    "AI",
    "Machine Learning",
    "AWS",
    "Jira",
    "GitHub",
    "microservices",
    "Microsoft Azure",
    "SCRUM",
    "Communication",
    "Leadership",
    "French",
    "English",
    "Mandarin/Cantonese",
    "Node.JS"
  ];

  return (
    <div className="lg:snap-y snap-none lg:snap-mandatory h-screen w-full overflow-y-scroll z-20">

        <div id="home" className="snap-center w-full h-full relative flex items-center z-10 justify-center font-exo-2 ">
        <div className="flex flex-row w-full h-full absolute top-0 left-0 bg-[#434b8f] text-[#FFD700] ">
          {/* <div className="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div> */}
        </div>
          <div className="flex flex-row w-full h-3/4 absolute bottom-0 left-0 bg-gradient-to-t from-blue-300 "></div>
          <div className="flex flex-row w-full h-1/6 absolute top-0 left-0 bg-gradient-to-b from-[#212546] "></div>
          <div className="flex flex-col items-center justify-around z-20 space-y-8">
            <div className="flex flex-col space-y-4 items-center">
              <div className="text-white z-20 flex flex-col items-center md:flex-row md:items-end space-x-2 px-8">
                <p className="font-bold text-3xl md:text-4xl">Hello,</p>
                <p className="font-bold text-3xl md:text-4xl">I&apos;m Lawrence Liang</p>
              </div>              
              <div className="flex-grow h-[6px] w-1/2  md:w-full bg-white rounded-full"> </div>
            </div>
            


            <div className="text-white z-20 text-2xl font-exo-2 flex flex-row space-x-2 mx-[10%] text-center">
              A driven and dedicated developer ready to utilize my skills wherever they&apos;re needed, and eager to learn new ones.
            </div>

            <a href="/#projects">
              <button className="px-16 py-2 bg-blue-300 shadow-lg hover:scale-[105%] ease-in-out duration-300 text-2xl font-semibold text-black">Projects</button>
            </a>
          </div>
        </div>


        {/* <div id="aboutme" className="snap-start bg-neutral-100  w-full h-full flex items-center justify-center px-[20%] py-28">
          <div className="bg-white shadow-md w-full h-full flex flex-col items-center justifty-around p-8 space-y-8">
            <p className="font-exo-2 text-4xl text-zinc-800 font-semibold">About Me</p>
            <div className="flex flex-row items-center justify-around w-full">
              <div className="flex flex-col justify-center items-center w-1/2">
                <p className="font-poetsen text-2xl text-zinc-800">Get to know me!</p>
              </div>
              <div className="flex flex-col justify-center items-center w-1/2">
                <p className="font-poetsen text-2xl text-zinc-800">Skills</p>
              </div>
            </div>
          </div>
        </div> */}

        <div id="aboutme" className="z-6 snap-start bg-blue-200 relative w-full h-auto md:h-full  min-h-screen flex flex-row items-start justify-center pt-20 p-4 lg:px-[10%] lg:py-32 font-open-sans">
          <div className="flex flex-row w-full h-1/3 absolute top-0 left-0 bg-gradient-to-b from-blue-300 "></div>
          <div className="flex flex-row w-full h-1/6 absolute bottom-0 left-0 bg-gradient-to-t from-blue-50 "></div>
          <div className="flex flex-col items-center w-full h-full space-y-8">
            <div className="flex flex-col md:flex-row items-start justify-between w-full h-full md:space-x-16">
              <div className="flex flex-col items-start w-full md:w-2/5 h-full space-y-4">
                <p className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full z-20">About Me</p>
                
                <AboutMe></AboutMe>
                <div className="flex flex-col items-start justify-start space-y-2 w-full h-full md:flex-grow">
                  <p className="text-4xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full">Experience</p>
                  <div className="relative flex flex-col items-start space-y-4 overflow-y-scroll experiences flex-grow max-h-[calc(100vh-35rem)] min-h-[calc(100vh-35rem)] w-full p-3">
                    <CAE></CAE>
                    <P4LABS></P4LABS>
                  </div>
                </div>
              </div>

              
              
              
              <div className="flex flex-col space-y-4 h-full md:w-3/5 z-20 p-4 md:p-0">
                <div className="flex flex-col justify-start items-start font-exo-2 text-md md:text-lg space-y-2 w-full h-auto shadow-lg bg-white rounded-2xl p-6 ">
                  <div>I am currently pursuing a Bachelor degree in Software Engineering at the <span className="font-semibold">École de Technologie Supérieure</span>.</div>
                  <div>I have interests in working in <span className="font-semibold">AI/ML/DL, Full Stack development and IOT</span>.</div>
                  <div>On the side, I am developing a website and rendering system for cabinets for <a href="https://wondacabinetry.com" className="text-blue-700 font-semibold hover:underline">Wonda Cabinet Inc</a>. It uses NextJS and ThreeJS. In addition, I enjoy participating in Hackathons as it challenges my creativity in this robotic world. You can find my projects in the Projects section. </div>
                  <div>Feel free to contact me! My contact info can be found on my profile card.</div>
                </div>
                
                <div className="flex flex-col items-start h-full w-full space-y-4">
                  <p className="text-4xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full">Skills</p>
                  <div className="flex flex-row flex-wrap justify-normal items-start font-exo-2 text-lg w-full h-full shadow-lg bg-white rounded-2xl p-6 space-x-1 space-y-1 md:space-y-0">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-[#e9e9e9] rounded-lg py-1 px-2 text-neutral-700 font-semibold md:text-lg text-sm"> {/* Apply specific style to each skill */}
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>  
          </div>
        </div>

        <div id="projects" className="snap-start relative bg-blue-50 w-full min-h-screen md:h-full flex flex-col items-start justify-start px-4 lg:px-[20%] py-32 font-open-sans space-y-8">
            <p className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full z-20">Projects</p>

            <Project></Project>
        </div>
        
        
        <div id="contactme" className="snap-start relative bg-blue-50 w-full h-full flex flex-row items-start justify-center px-[20%] py-32 font-open-sans">
          <div className="flex flex-row w-full h-3/4 absolute bottom-0 left-0 bg-gradient-to-t from-green-200">
              
          </div>

          <div className='flex flex-col md:flex-row items-center justify-around w-full h-full z-20'>
            <p className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full z-20">Find Me</p>
              <div className='flex flex-row items-center justify-around w-full h-full z-20'>
                <a href="https://www.linkedin.com/in/lawrence-liang-b19a3b199/" className='hover:scale-[110%] ease-in-out duration-200 w-1/3 h-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg>
                </a>

                <a href="https://github.com/LawrenceLiang02" className='hover:scale-[110%] ease-in-out duration-200 w-1/3 h-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                    </svg>
                </a>

                <a href="mailto:lawrencekaiwei@gmail.com" className='hover:scale-[110%] ease-in-out duration-200 w-1/3 h-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                </a>
              </div>
              
                </div>
        </div>

    </div>
    
  );
}

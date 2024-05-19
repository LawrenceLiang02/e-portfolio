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
    <div className="md:snap-y snap-none md:snap-mandatory h-screen w-full overflow-y-scroll z-20">

        <div id="home" className="snap-center w-full h-full relative flex items-center z-10 justify-center font-exo-2 ">
        <div className="flex flex-row w-full h-full absolute top-0 left-0 bg-[#434b8f] text-[#FFD700] ">
          <div className="stars">
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
          </div>
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

        <div id="aboutme" className="z-6 snap-start bg-blue-200 relative w-full h-auto md:h-full  min-h-screen flex flex-row items-start justify-center pt-20 p-4 md:px-[20%] md:py-32 font-open-sans">
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

        <div id="projects" className="snap-start relative bg-blue-50 w-full min-h-screen md:h-full flex flex-col items-start justify-start px-4 md:px-[20%] py-32 font-open-sans space-y-8">
            <p className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-neutral-500 font-roboto w-full z-20">Projects</p>

            <Project></Project>
        </div>
        
        
        <div id="contactme" className="snap-start relative bg-blue-50 w-full h-full flex flex-row items-start justify-center px-[20%] py-32 font-open-sans">
          <div className="flex flex-row w-full h-3/4 absolute bottom-0 left-0 bg-gradient-to-t from-green-200"></div>
        </div>

    </div>
    
  );
}

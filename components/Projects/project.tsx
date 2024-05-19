import React from 'react';
import { promises as fs } from 'fs';
import Image from "next/image";

interface Project {
    id: number;
    name: string;
    description: string;
    github: string;
    otherLinks: string[];
    stacks:string[];
    image: string;
}

interface ProjectPageProps {
    projects: Project[];
}

export default async function ProjectPage() {
    const file = await fs.readFile(process.cwd() + '/data/projects.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div className="snap-x snap-mandatory experiences h-full flex w-full overflow-x-scroll space-x-12 p-4">
            {data.map((project:Project) => (
                <div key={project.id} className="snap-center w-full flex-shrink-0 h-full md:p-2">
                    <div className='relative w-full h-auto md:h-full flex flex-col items-center justify-center'>
                        <div className="flex flex-row w-auto h-full bottom-0 left-0 bg-black/10 ">
                            <Image
                                className='w-full h-full ease-in-out duration-200 shadow-lg bg-white'
                                src={`/Projects/${project.image}`}
                                alt="Project"
                                width={2000}
                                height={2000}>
                            </Image>
                        </div>
                        
                        <div className='group perspective hover:cursor-pointer md:absolute bottom-0 right-0 h-full w-full md:h-56 md:m-8 md:w-2/5 font-exo-2 text-black md:text-white'>
                            <div className='relative md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000'>
                                <div className='md:absolute md:[backface-visibility:hidden] h-full w-full md:bg-[#484848]/80 z-10 drop-shadow-lg  p-6 '>
                                    <p className='text-center w-full text-2xl'>{project.name}</p>
                                    <p>{project.description}</p>
                                </div>
                                
                                <div className='md:absolute md:[backface-visibility:hidden] md:[transform:rotateY(180deg)] h-full w-full md:bg-[#484848]/80 z-10 drop-shadow-lg p-6 flex flex-col items-center justify-center space-y-2 '>
                                    <p className='text-center text-2xl'>Links</p>
                                    <div className='flex flex-row items-center justify-center space-x-2 '>
                                        <a href={project.github} className='hover:scale-[110%] ease-in-out duration-200 w-12 h-12 text-white flex flex-col justify-around items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                            </svg>
                                            <p className='text-black md:text-white'>Github</p>
                                        </a>

                                        {project.otherLinks.map((link:any) => (
                                        <a href={link} className='hover:scale-[110%] ease-in-out duration-200 w-12 h-12 text-black flex flex-col justify-around items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                        <p className='text-black md:text-white'>Link</p>
                                        </a>
                                        ))}

                                    </div>

                                    <p className='text-center text-2xl'>Stacks</p>
                                    <div className='flex flex-row items-start justify-center space-x-2 w-full h-full '>
                                        {project.stacks.map((stack:any) => (
                                            <div className='bg-[#d0d0d0] rounded-lg py-1 px-2 text-neutral-700 font-semibold'>
                                                {stack}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        </div>
    );
}



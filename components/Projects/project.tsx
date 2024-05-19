// pages/projects.tsx
import { getAllProjects } from '@/utils/projects';
import React from 'react';

interface Project {
    id: number;
    name: string;
    description: string;
    github: string;
    otherLinks: string[];
    image: string;
}

interface ProjectPageProps {
    projects: Project[];
}

export async function getStaticProps() {
    const projects = await getAllProjects();

    return {
        props: {
            projects,
        },
    };
}

function ProjectPage({ projects }: ProjectPageProps) {
    console.log("Length: " + projects.length)
    return (
        <div className="snap-x snap-mandatory h-full flex w-full overflow-x-scroll space-x-12 p-2">
            {projects.map((project) => (
                <div key={project.id} className="project-item">
                    <div className="project-inner-item">
                        <div className="project-inner-inner-item">
                            <p>Name: {project.name}</p>
                            <p>Description: {project.description}</p>
                            <p>Github: {project.github}</p>
                            <p>Other Links: {project.otherLinks.join(', ')}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectPage;

// utils/projects.ts
import fs from 'fs';
import path from 'path';

const fsPromises = fs.promises;
const filename = 'data/projects.json';

interface Project {
    id: number;
    name: string;
    description: string;
    github: string;
    otherLinks: string[];
    image: string;
}

export async function getAllProjects(): Promise<Project[]> {
    const filePath = path.join(process.cwd(), filename);
    console.log("Path:" + filePath)
    const jsonDataBuffer = await fsPromises.readFile(filePath);
    const jsonData = jsonDataBuffer.toString('utf-8');
    const objectData: Project[] = JSON.parse(jsonData);
    console.log("Test" + jsonData)
    return objectData;
}

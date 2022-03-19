import { Project as ProjectType } from "../types"
import data from "../data";

const Project = (project: ProjectType) => {
    return <div className="project" onClick={() => window.open(project.url, "_blank")}>
        {project.image && <figure><img src={project.image} alt="preview" /></figure>}
        <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p className="my-2">{project.description}</p>
        <div className="card-actions justify-end">
            {project.frameworks?.map((framework: string, i: number) => <div key={i} className="badge badge-outline badge-accent">{framework}</div> )}
        </div>
        </div>
    </div>
}

const Projects = ({ scrollRef }: any) => {

    const projects: ProjectType[] = data.projects; 

    return <div className="hero min-h-screen" ref={scrollRef}>
        <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="py-6 text-xl max-w-sm text-center">Those are the project I am most proud of. Click on any of the cards to learn more</p>
            <div className="projects">
                {projects.map((project: ProjectType) => Project(project))}
            </div>
        </div>
    </div>
}

export default Projects
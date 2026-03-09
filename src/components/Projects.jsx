
import kanbanImage from '../assets/kanban-image.png';
import podcastsImage from '../assets/podcasts-image.png';


export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Kanban Tasks Management App",
            description: "A web application that allows users to manage their tasks using a Kanban board. Users can create, edit, and delete tasks, as well as move them between different columns (e.g., To Do, In Progress, Done).",
            technologies: ["Javascript", "HTML", "CSS"],
            githubLink: "https://github.com/MmakgadiLetsela/MMALET25583_FTO2506_Group-B_Mmakgadi-Letsela_JSLPP.git",
            image: kanbanImage,

        },

        {
            id: 2,
            title: "React Podcast Landing Page",
            description: "A responsive landing page for a podcast, built using React. The page includes sections for the podcast's description, episodes, and the image.",
            technologies: ["React", "HTML", "CSS"],
            githubLink: "https://github.com/MmakgadiLetsela/MMALET25583_PTO2505_Group_A_Mmakgadi-Letsela_DJS03.git",
            image: podcastsImage,
        }
    ]
 

 return(
    <section id="projects" className="projects">
        <div className="container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={`${project.title}-image`} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
 )
}
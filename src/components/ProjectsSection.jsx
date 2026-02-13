import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
       id: 1,
       title: "Traineeship App",
       description: "Reengineering of a traineeship application using Java and Spring Boot",
       image: "/projects/project_1.png",
       tags: ["Java", "Thymeleaf", "Spring Boot"],
       githubUrl: "https://github.com/AristosDragatis/TraineeshipApp.git"  
    },
    {
       id: 1,
       title: "Instruction Computer in C",
       description: "A terminal-based instruction simulator in C with registers, memory, and command parsing",
       image: "/projects/project_2.png",
       tags: ["C"],
       githubUrl: "https://github.com/AristosDragatis/Instruction-Based_Computer_in_C.git" 
    },
]

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> 
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border text-secondary-foreground">
                                    {tag}
                                   </span> 
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href= {project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:bg-primary/10 border border-primary" href="https://github.com/AristosDragatis" target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};
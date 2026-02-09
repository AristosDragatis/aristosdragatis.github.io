import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/*  Left hand side of the about me section  */}
                <div className="space-y-6">
                    <p className="text-muted-foreground">
                        I am a Software Engineer with a solid academic foundation, having successfully completed my Bachelor’s degree and currently pursuing a Master’s degree to further specialize in advanced computing systems. My academic journey has equipped me with a meticulous approach to problem-solving and a deep understanding of the theoretical principles that drive efficient software development.
                    </p>

                    <p className="text-muted-foreground">
                        Beyond standard backend development, I have a strong interest in high-performance computing and have actively worked with Parallel Programming to optimize resource management and concurrency using C programming language.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="" className="cosmic-button px-6 bg-primary/80 py-2 rounded-full border border-primary text-foreground hover:bg-primary/10 transition-colors duration-300">
                            View Full CV
                        </a>

                    </div>
                </div>

                {/*  cards right hand side of the about me section */}
                {/* 
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Engineering</h4>
                                <p className="text-muted-foreground">Developing systems to improve maintainability and extensibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/> 
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/> 
                            </div>
                        </div>
                    </div>
                </div>
                */}

                {/* Right Side - Photo Section */}
                <div className="flex justify-center items-center h-full w-full">
                    {/* Image Wrapper Container */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                        
                        {/* 1. Gradient Glow Effect (Back Layer) */}
                        {/* Αυτό δημιουργεί τη λάμψη πίσω από την εικόνα που δυναμώνει στο hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-80 transition duration-500 group-hover:duration-200"></div>
                        
                        {/* 2. Main Image Container */}
                        <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/20 bg-background shadow-2xl">
                            <img 
                                src="/path-to-your-image.jpg"  /* <--- ΒΑΛΕ ΕΔΩ ΤΟ PATH ΤΗΣ ΦΩΤΟΓΡΑΦΙΑΣ ΣΟΥ */
                                alt="Profile" 
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2"
                            />
                            
                            {/* Optional: Overlay (αν θες να σκουραίνει λίγο στο hover για να φαίνονται γράμματα αν βάλεις) */}
                            {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" /> */}
                        </div>

                        {/* 3. Decorative Elements (Optional - Dots or Squares behind) */}
                        <div className="absolute -z-10 -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
                        <div className="absolute -z-10 -top-6 -left-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl"></div>

                    </div>
                </div>

            </div>
        </div>
    </section>
}
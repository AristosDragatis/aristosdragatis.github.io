

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">BSc Degree</h3>

                    <p className="text-muted-foreground">
                        I got my BSc degree in Informatics & Telecommunications at University of Ioannina based in Arta,Greece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                           Download CV 
                        </a>

                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    </section>
}
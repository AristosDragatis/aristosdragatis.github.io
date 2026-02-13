import React from "react";

const experiences = [
  {
    year: "2025 - present",
    title: "MSc in Computer Science & Engineering",
    description: "Currently pursuing a Master's degree in Computer Science & Engineering at University of Ioannina.",
  },
  {
    year: "2025",
    title: "BSc in Informatics & Telecommunications",
    description: "Graduated with a degree in Informatics & Telecommunications at University of Ioannina.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-16 container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-primary">Experience</h2>
    <div className="relative border-l-2 border-primary/30 pl-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-10 relative">
          <div className="absolute -left-5 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
          <span className="text-sm text-primary font-semibold">{exp.year}</span>
          <h3 className="text-xl font-bold mt-1 mb-2 text-foreground">{exp.title}</h3>
          <p className="text-foreground/80">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;

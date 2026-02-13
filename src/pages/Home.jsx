import { Navbar } from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const Home = () => {
    /*  we use styling from tailwind */
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/*  Theme Toggle  */ }
        <ThemeToggle/>
    {/*  Background  Effects*/ }

    {/*  Navbar */ }
        <Navbar/>
        <SocialLinks/>

    {/*  Main content*/ }
    <main>
        <HeroSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectsSection/>
    </main>

    {/*  Footer*/ }
        <Footer/>
        <ScrollToTop/>
    </div>
    );
}
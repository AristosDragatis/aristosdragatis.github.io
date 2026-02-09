import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    /*  we use styling from tailwind */
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/*  Theme Toggle  */ }
        <ThemeToggle/>
    {/*  Background  Effects*/ }
       <StarBackground/> 

    {/*  Navbar */ }
        <Navbar/>

    {/*  Main content*/ }
    <main>
        <HeroSection/>
        <AboutSection/>
    </main>

    {/*  Footer*/ }
    </div>
    );
}
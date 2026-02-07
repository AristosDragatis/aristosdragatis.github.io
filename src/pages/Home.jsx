import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle"

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


    {/*  Footer*/ }
    </div>
    );
}
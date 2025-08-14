import { Header } from "../../components/Header";
import { Home } from "../../components/Home";
import { SimpleProjects } from "../../components/SimpleProjects";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import { Career } from "../../components/Career";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export function Portifolio() {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            {/* <Experiences/> */}
            <SimpleProjects/>
            <Skills/>
            <Career/>
            <Contact/>
            {/* <Recommendations/> */}
            <Footer/>
        </div>
    )
}
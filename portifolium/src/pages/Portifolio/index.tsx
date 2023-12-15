import { Experiences } from "../../components/Experiences";
import { Header } from "../../components/Header";
import { Home } from "../../components/Home";
import { Projects } from "../../components/Projects";
import { About } from "../../components/About";

export function Portifolio() {
    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Experiences/>
            <Projects/>
        </div>
    )
}
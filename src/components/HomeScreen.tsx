import "../sass/homeScreen.scss"
import About from "./minor-components/About"
import ContactMe from "./minor-components/ContactMe";
import Projects from "./minor-components/Projects";

const HomeScreen = ()=>{
    
    return(
        <div id="container">
            <About/>
            <Projects/>
            <ContactMe/>
        </div>
    )
}

export default HomeScreen
import "../sass/homeScreen.scss"
import About from "./minor-components/About"
import Projects from "./minor-components/Projects";

const HomeScreen = ()=>{
    
    return(
        <div id="container">
            <About/>
            <Projects/>
        </div>
    )
}

export default HomeScreen
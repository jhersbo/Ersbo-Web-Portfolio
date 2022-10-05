import "../sass/homeScreen.scss"
import About from "./minor-components/About"
import ContactMe from "./minor-components/ContactMe";
import Projects from "./minor-components/Projects";
import HomeScreenNav from './minor-components/HomeScreenNav'

interface HomeScreenProps{
    thinScreenBool: boolean
}

const HomeScreen = ({ thinScreenBool }: HomeScreenProps)=>{
    
    return(
        <div id="container">
            <HomeScreenNav/>
            <About/>
            <Projects/>
            <ContactMe/>
        </div>
    )
}

export default HomeScreen
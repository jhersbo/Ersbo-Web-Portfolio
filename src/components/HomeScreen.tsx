import "../sass/homeScreen.scss"
import HomeScreenNav from './minor-components/HomeScreenNav'
import GenAbout from "./minor-components/GenAbout";
import GenContactMe from "./minor-components/GenContactMe";
import GenProjects from "./minor-components/GenProjects";

interface HomeScreenProps{
    thinScreenBool: boolean
}

const HomeScreen = ({ thinScreenBool }: HomeScreenProps)=>{
    
    return(
        <div id="container">
            <HomeScreenNav/>
            <GenAbout/>
            <GenProjects/>
            <GenContactMe/>
        </div>
    )
}

export default HomeScreen
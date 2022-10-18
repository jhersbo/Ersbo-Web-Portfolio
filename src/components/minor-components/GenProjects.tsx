import GeneralBubbleComponent from "./GeneralBubbleComponent"
import ProjectsContent from "./micro-components/ProjectsContent"

interface ProjectsProps{
    thinScreenBool: boolean
}

const GenProjects = ({ thinScreenBool }: ProjectsProps)=>{
    return(
        <GeneralBubbleComponent thinScreenBool={thinScreenBool} startingCoords={{x: 0, y: 350}} title={"My Projects"} expandedY={"14vh"} internalJSX={<ProjectsContent thinScreenBool={thinScreenBool}/>}/>
    )
}

export default GenProjects
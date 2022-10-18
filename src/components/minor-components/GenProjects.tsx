import GeneralBubbleComponent from "./GeneralBubbleComponent"
import ProjectsContent from "./micro-components/ProjectsContent"

const GenProjects = ()=>{
    return(
        <GeneralBubbleComponent startingCoords={{x: 0, y: 350}} title={"My Projects"} expandedY={"14vh"} internalJSX={<ProjectsContent/>}/>
    )
}

export default GenProjects
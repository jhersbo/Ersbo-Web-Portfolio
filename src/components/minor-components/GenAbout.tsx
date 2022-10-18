import GeneralBubbleComponent from "./GeneralBubbleComponent"
import AboutContent from "./micro-components/AboutContent"

const GenAbout = ()=>{
    return(
        <GeneralBubbleComponent startingCoords={{x: 0, y: 100}} title={"About Me"} expandedY={"12vh"} internalJSX={<AboutContent/>}/>
    )
}

export default GenAbout
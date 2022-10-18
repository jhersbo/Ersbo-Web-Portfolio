import GeneralBubbleComponent from "./GeneralBubbleComponent"
import AboutContent from "./micro-components/AboutContent"

interface AboutProps{
    thinScreenBool: boolean
}

const GenAbout = ({ thinScreenBool }: AboutProps)=>{
    return(
        <GeneralBubbleComponent thinScreenBool={thinScreenBool} startingCoords={{x: 0, y: 100}} title={"About Me"} expandedY={"12vh"} internalJSX={<AboutContent thinScreenBool={thinScreenBool}/>}/>
    )
}

export default GenAbout
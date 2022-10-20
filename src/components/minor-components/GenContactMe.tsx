import GeneralBubbleComponent from "./GeneralBubbleComponent"
import ContactMeContent from "./micro-components/ContactMeContent"

interface ContactMeProps{
    thinScreenBool: boolean
}

const GenContactMe = ({ thinScreenBool }: ContactMeProps)=>{
    return(
        <GeneralBubbleComponent thinScreenBool={thinScreenBool} startingCoords={{x: thinScreenBool ? 0 : 0, y: thinScreenBool? 130 : 700}} title={"Get in touch"} expandedY={"18vh"} internalJSX={<ContactMeContent thinScreenBool={thinScreenBool}/>}/>
    )
}

export default GenContactMe
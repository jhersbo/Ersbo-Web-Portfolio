import GeneralBubbleComponent from "./GeneralBubbleComponent"
import ContactMeContent from "./micro-components/ContactMeContent"

interface ContactMeProps{
    thinScreenBool: boolean
}

const GenContactMe = ({ thinScreenBool }: ContactMeProps)=>{
    return(
        <GeneralBubbleComponent thinScreenBool={thinScreenBool} startingCoords={{x: 0, y: 600}} title={"Get in touch"} expandedY={"16vh"} internalJSX={<ContactMeContent thinScreenBool={thinScreenBool}/>}/>
    )
}

export default GenContactMe
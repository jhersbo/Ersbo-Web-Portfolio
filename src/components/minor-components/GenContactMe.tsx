import GeneralBubbleComponent from "./GeneralBubbleComponent"
import ContactMeContent from "./micro-components/ContactMeContent"

const GenContactMe = ()=>{
    return(
        <GeneralBubbleComponent startingCoords={{x: 0, y: 600}} title={"Get in touch"} expandedY={"16vh"} internalJSX={<ContactMeContent/>}/>
    )
}

export default GenContactMe
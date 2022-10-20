import GeneralBubbleComponent from "./GeneralBubbleComponent"
import GitHubFeedContent from './micro-components/GitHubFeedContent'

interface GenGitHubFeedProps{
    thinScreenBool: boolean
}

const GenGitHubFeed = ({ thinScreenBool }: GenGitHubFeedProps)=>{

    return(
        <GeneralBubbleComponent internalJSX={<GitHubFeedContent thinScreenBool={thinScreenBool}/>} startingCoords={{x: 0, y: thinScreenBool ? 120 : 500}} title={"GitHub Activity"} expandedY={"16vh"} thinScreenBool={thinScreenBool}/>
    )
}

export default GenGitHubFeed
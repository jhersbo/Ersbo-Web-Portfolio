import { useEffect } from "react"
import { Octokit } from "octokit"

interface GitHubFeedContentProps{
    thinScreenBool: boolean
}

const GitHubFeedContent = ({ thinScreenBool }: GitHubFeedContentProps)=>{
    
    useEffect(()=>{
        const retrieveGHData = async ()=>{
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GH_API_TOKEN
            })
            let response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
                owner: "jhersbo",
                repo: "Ersbo-Web-Portfolio",
                headers: {
                    "content-type": "application/json"
                }
            })
            console.log(response)
        }
        retrieveGHData()
    })
    
    return(
        <div></div>
    )
}

export default GitHubFeedContent
import './sass/GitHubFeedContent.scss'
import { useEffect, useState } from "react"
import { Octokit } from "octokit"

interface GitHubFeedContentProps{
    thinScreenBool: boolean
}


const GitHubFeedContent = ({ thinScreenBool }: GitHubFeedContentProps)=>{
    
    const [commits, setCommits] = useState([])


    useEffect(()=>{
        const retrieveGHCommitData = async ()=>{
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GH_API_TOKEN
            })
            let response = await octokit.request("GET /users/{user}/events", {
                user: "jhersbo",
                headers: {
                    "content-type": "application/json"
                }
            })
            setCommits(response.data)
        }
        retrieveGHCommitData()
        //can govern reload bc it lies in app.tsx componentDidMount lifecycle event
    },[thinScreenBool])

    const styles = {
        ul: {
            listStyleType: "none",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "1px 1px 10px black",
            padding: "0.5em",
            margin: "0em 0em 0.5em 0em",
            width: !thinScreenBool ? "auto" : "100%",
            fontSize: !thinScreenBool ? "18px" : "16px"
        },
        a: {
            textDecoration: "none",
            color: "black"
        }
    }

    const renderGHCommits = ()=>{
        if(!commits){
            return(
                <div>
                    <h4>Loading...</h4>
                </div>
            )
        }else{
            // eslint-disable-next-line array-callback-return
            let mapProduct = commits.map((item: any, index: number) => {
                while(index <= 7){
                    return(
                        <ul key={index} style={styles.ul}>
                            <li>
                                <b>Date:</b> &nbsp; {item.created_at.slice(0, item.created_at.indexOf("T"))}
                            </li>
                            <li>
                                <b>Type:</b> &nbsp; {item.type}
                            </li>
                            <li>
                                <a href={`https://github.com/${item.repo.name}`} style={styles.a}>
                                    <b>Repo:</b> &nbsp; <u>{item.repo.name}</u>
                                </a>
                            </li>
                        </ul>
                    )
                }
            })
            return mapProduct
        }
    }
    
    return(
        <div id="gh-feed-container">
            {renderGHCommits()}
        </div>
    )
}

export default GitHubFeedContent
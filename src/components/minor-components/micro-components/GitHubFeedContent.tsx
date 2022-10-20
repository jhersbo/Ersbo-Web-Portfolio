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
            console.log(response.data)
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
            padding: "0.5em",
            margin: "0em 0em 0.5em 0em"
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
                while(index <= 11){
                    return(
                        <ul key={index} style={styles.ul}>
                            <li>
                                <b>Type:</b> &nbsp; {item.type}
                            </li>
                            <li>
                                <b>Date:</b> &nbsp; {item.created_at.slice(0, item.created_at.indexOf("T"))}
                            </li>
                            <li>
                                <a href={`https://github.com/${item.repo.name}`} style={styles.a}>
                                    {item.repo.name}
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
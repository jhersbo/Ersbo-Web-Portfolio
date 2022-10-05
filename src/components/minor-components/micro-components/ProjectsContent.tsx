import './sass/ProjectsContent.scss'
import '../sass/bubbleMenus.scss'

import { useEffect, useState } from "react"

const ProjectsContent = ()=>{

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const cacheImages = async (srcArr: any)=>{
            const promises = await srcArr.map((src: string)=>{
                return new Promise<void>((resolve, reject)=>{
                    const img: any = new Image()
                    img.src = src
                    img.onload = resolve()
                    img.onerror = reject()
                })
            })
            await Promise.all(promises)
            setIsLoading(false)
        }
        const imgs = [
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Account.jpg`,
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
            `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/List.jpg`,
        ]
        cacheImages(imgs)
    }, [])

    const projectList = [
        {
            title: "Listr",
            thumbNailImg: `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
            alt: "Listr home screen",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            projectDescription: "A fully CRUD-enabled list making application. Click to learn more."
        },
        {
            title: "Parkspot"
        },
        {
            title: "Marshes' Melons"
        },
        {
            title: "The Social App"
        }
    ]

    const renderProjectList = ()=>{
        let mapProduct = projectList.map((element, index)=>{
            return(
                <div className='project-thumbnail' key={index} style={{
                    width: `${100 / projectList.length - 6}%`
                }}>
                    <h3>{element.title}</h3>
                    <h5>Tech Stack: {element.projectStack}</h5>
                    <p className='project-thumbnail-description'>{element.projectDescription}</p>
                </div>
            )
        })
        return mapProduct
    }

    return(
        <div id="projects-container">
            <div id='projects-header-content'>
                <div id="projects-header">
                    <h1>My Web Projects</h1>
                </div>
                <div id='project-thumbnail-container'>
                    {renderProjectList()}
                </div>
            </div>
        </div>
    )
}

export default ProjectsContent
import './sass/ProjectsContent.scss'
import '../sass/bubbleMenus.scss'

import Listr from './web-project-components/Listr'
import Parkspot from './web-project-components/Parkspot'
import MarshesMelons from './web-project-components/MarshesMelons'
import TheSocialApp from './web-project-components/TheSocialApp'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useState } from "react"

const ProjectsContent = ()=>{
    // -1 is the thumbnail state
    const [clickExpand, setClickExpand] = useState(-1)

    const projectList = [
        {
            title: "Listr",
            thumbNailImg: `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
            alt: "Listr home screen",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            projectDescription: "A fully CRUD-enabled list making application. Click to learn more.",
            jsxElement: <Listr/>
        },
        {
            title: "Parkspot",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            jsxElement: <Parkspot/>
        },
        {
            title: "The Social App",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            jsxElement: <TheSocialApp/>
        },
        {
            title: "Marshes' Melons",
            projectStack: "Node.js, jQuery, Phaser.js, Express.js, MongoDB",
            jsxElement: <MarshesMelons/>
        },
    ]

    const renderProjectList = ()=>{
        let mapProduct = projectList.map((element, index)=>{
            return(
                <div className='project-thumbnail' key={index} style={{
                    width: `${100 / projectList.length - 6}%`
                }}
                onClick={()=>{setClickExpand(index)}}>
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
                {clickExpand === -1 ?
                    <div id='project-thumbnail-container'>
                        {renderProjectList()}
                    </div>
                :
                    <div id='project-expanded-container'>
                        <button id='arrow-back' onClick={()=>{setClickExpand(-1)}}>
                            <ArrowBackRoundedIcon sx={{fontSize: "36px"}}/>
                        </button>
                        <div id='project-expanded-content'>
                            {projectList[clickExpand].jsxElement}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectsContent
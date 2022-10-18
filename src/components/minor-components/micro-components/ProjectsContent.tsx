import './sass/ProjectsContent.scss'
import '../sass/bubbleMenus.scss'

import GenParkspot from './web-project-components/GenParkspot'
import GenListr from './web-project-components/GenListr'
import GenMarshesMelons from './web-project-components/GenMarshesMelons'
import GenSocialApp from './web-project-components/GenSocialApp'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectsProps{
    thinScreenBool: boolean
}

const ProjectsContent = ({ thinScreenBool }: ProjectsProps)=>{
    // -1 is the thumbnail state
    const [clickExpandIndex, setClickExpandIndex] = useState(-1)

    const projectList = [
        {
            title: "Listr",
            thumbNailImg: `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
            alt: "Listr home screen",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            projectDescription: "A CRUD-enabled list making application with multiple dimensions of customization by users.",
            jsxElement: <GenListr/>
        },
        {
            title: "Parkspot",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            projectDescription: "An application for reserving parking spots from sellers on private or residential property.",
            jsxElement: <GenParkspot/>
        },
        {
            title: "The Social App",
            projectStack: "Node.js, React.js, PostgreSQL/Sequelize, Express.js",
            projectDescription: "A small-scale, functional blog application created by two other developers and myself.", 
            jsxElement: <GenSocialApp/>
        },
        {
            title: "Marshes' Melons",
            projectStack: "Node.js, jQuery, Phaser.js, Express.js, MongoDB",
            projectDescription: "A basic platformer game created with vanilla JavaScript, jQuery, and the Phaser.js engine.", 
            jsxElement: <GenMarshesMelons/>
        },
    ]

    const renderProjectList = ()=>{
        let mapProduct = projectList.map((element, index)=>{
            return(
                <motion.div className='project-thumbnail' key={index} style={{
                    width: `${100 / projectList.length - 6}%`
                }}
                onClick={()=>{setClickExpandIndex(index)}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <h2>{element.title}</h2>
                    <h4>{element.projectStack}</h4>
                    <hr id='thumbnail-hr'/>
                    <p className='project-thumbnail-description'>{element.projectDescription}</p>
                </motion.div>
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
                {clickExpandIndex === -1 ?
                    <div id='project-thumbnail-container'>
                        {renderProjectList()}
                    </div>
                :
                    <div id='project-expanded-container'>
                        <button id='arrow-back' onClick={()=>{setClickExpandIndex(-1)}} aria-label='Back'>
                            <ArrowBackRoundedIcon sx={{fontSize: "36px"}}/>
                        </button>
                        <div id='project-expanded-content'>
                            {projectList[clickExpandIndex].jsxElement}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectsContent
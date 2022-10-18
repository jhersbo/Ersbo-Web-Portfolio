import './sass/AboutContent.scss'
import '../sass/bubbleMenus.scss'

import { useEffect, useState } from 'react'

import useCache from './Custom_Hooks/useCache'

interface AboutContentProps{
    thinScreenBool: boolean
}

const AboutContent = ({ thinScreenBool }: AboutContentProps)=>{
    const imgs = [`${process.env.PUBLIC_URL}/images/me&millie.jpg`]
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCache(imgs, setIsLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='about-container'>
            <div id='about-header-content'>
                <div id="about-header">
                    <div id='name-title-about'>
                        <h1>Jack Ersbo</h1>
                        <h3>Full-Stack Software Developer</h3>
                    </div>
                </div>
                <div id='content-about'>
                    <p>
                        I am a motivated, curious, flexible individual with a passion for web development.
                    </p>
                    <p>
                        I graduated from the ThriveDX (formerly HackerU) web development bootcamp as part of the University of Wisconsin College of Engineering in June 2022. Since then, I have been honing my skills and understanding of creating and maintaining larger applications with relational and non-relational (NoSQL) databases.
                    </p>
                    <p>
                        I have experience and am proficient in <b>HTML, CSS, JavaScript/JSX/TypeScript, and Python</b> programming languages and experience with various libraries, such as <b>React, Redux, Express, MongoDB, Flask, and PostgreSQL/Sequelize ORM</b>.
                    </p>
                    <p>
                        I have deployed applications using Heroku, Netlify, and AWS. I also have experience with Docker and Kubernetes.
                    </p>
                </div>
            </div>
            {!isLoading ? 
                <img src={process.env.PUBLIC_URL + '/images/me&millie.jpg'} id='about-image' alt='Jack Ersbo and his cat, Millie.'></img>
            :
                null
            }
        </div>
    )
}

export default AboutContent
import './sass/AboutContent.scss'
import '../sass/bubbleMenus.scss'

import { useEffect, useState } from 'react'

import useCache from './Custom_Hooks/useCache'

interface AboutContentProps{
    thinScreenBool: boolean
}

const AboutContent = ({ thinScreenBool }: AboutContentProps)=>{
    const imgs = [`${process.env.PUBLIC_URL}/images/me&millie_resized.jpg`]
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
                        {
                            !thinScreenBool ?
                            <div>
                                <h1>Jack Ersbo</h1>
                                <h3>Web Developer</h3>
                            </div>
                            :
                            <div id='name-image'>
                                <div>
                                    <h2 className='descriptor'>Jack Ersbo</h2>
                                    <h4 className='descriptor'>Web Developer</h4>
                                </div>
                                {
                                    !isLoading && thinScreenBool ?
                                    <img src={process.env.PUBLIC_URL + '/images/me&millie_resized.jpg'} id='about-image' alt='Jack Ersbo and his cat, Millie.'></img>
                                    :
                                    null
                                }
                            </div>
                        }
                    </div>
                </div>
                <div id='content-about'>
                    <p>
                        I am a motivated, curious, flexible individual with a passion for web development.
                    </p>
                    <p>
                        I graduated from the ThriveDX web development bootcamp as part of the University of Wisconsin College of Engineering in June 2022. Since then, I have been honing my skills and understanding of creating and maintaining larger applications with relational and non-relational databases.
                    </p>
                    <p>
                        I have experience and am proficient in <b>HTML, CSS, JavaScript/JSX/TypeScript, and Python</b> programming languages and experience with various libraries, such as <b>React, Redux, Express, MongoDB, Flask, and PostgreSQL</b>.
                    </p>
                    <p>
                        I have deployed applications using AWS, Netlify, Heroku, and GitHub Pages. I also have some independent experience with Docker and Kubernetes.
                    </p>
                </div>
            </div>
            {!isLoading && !thinScreenBool? 
                <img src={process.env.PUBLIC_URL + '/images/me&millie.jpg'} id='about-image' alt='Jack Ersbo and his cat, Millie.'></img>
            :
                null
            }
        </div>
    )
}

export default AboutContent
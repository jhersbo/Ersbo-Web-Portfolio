import './sass/AboutContent.scss'
import '../sass/bubbleMenus.scss'

import { useEffect, useState } from 'react'

const AboutContent = ()=>{

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
        const imgs = [`${process.env.PUBLIC_URL}/images/me&millie.jpg`]
        cacheImages(imgs)
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
                        I have experience and am proficient in <b>HTML, CSS, JavaScript/JSX/TypeScript, Python, and Go</b> programming languages and experience with various libraries, such as <b>React, Redux, Express, MongoDB, and PostgreSQL/Sequelize ORM</b>.
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
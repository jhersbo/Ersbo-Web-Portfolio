import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import WebFont from 'webfontloader'

import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Listr = ()=>{

    const [isLoading, setIsLoading] = useState(true)

    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/List.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Account.jpg`
    ]

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
        cacheImages(imgs)

        WebFont.load({
            google: {
                families: ['Reem Kufi Ink']
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //have to use inline styling because of the conditional rendering below. I think regular css files would be ok too.
    const styles = {
        img_container:{
            display: "flex",
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "1em",
            boxShadow: "inset 1px 1px 50px black",
            borderRadius: "15px",
            backgroundColor: "inherit"
        },
        inner_container: {
            display: "flex",
            justifyContent: "space-between"
        },
        outer_container: {
            padding: "none"
        },
        desc_container: {
            width: "40%"
        },
        image: {
            width: "32%",
            height: "fit-content",
            margin: "0em 0.25em",
            borderRadius: "10px",
            boxShadow: "1px 1px 15px black",
        },
        h1: {
            width: "60%",
            margin: "0em 0em 0em 0.5em",
            fontFamily: 'Reem Kufi Ink'
        },
        gen: {
            margin: "3% 0%",
            fontFamily: "Reem Kufi Ink"
        }
    }

    return(
        <div style={styles.outer_container} className="exp-project-outer-container">
            {!isLoading ? 
                <div style={styles.inner_container}>
                    <div style={styles.desc_container}>
                        <h1 style={styles.h1}>Listr</h1>
                        <h3 style={styles.gen}>Node.js, React.js, PostgreSQL/Sequelize, Express.js</h3>
                        <h5 style={styles.gen}>Mobile-only</h5>
                        <hr/>
                        <p style={styles.gen}>
                            Listr is a list-making application that allows users to create, view, update, and delete various elements of a list. It has user authentication which allow users to view their lists across any device. 
                        </p>
                        <p style={styles.gen}>
                            When creating a list, users can create and name as many columns of a list as they like. From there, they can add any number of items to a column with the "+" button. They can also delete items from a list at any time.
                        </p>
                        <p style={styles.gen}>
                            The application is optimized to make only two API calls on load and only one when a user changes something about their list. Listr also uses browser cookies to store information about the list being viewed, so users don't have to re-navigate to their list if their device sleeps.
                        </p>
                    </div>
                    <div style={styles.img_container}>
                        {
                            imgs.map((element, index)=>{
                                return(
                                    <motion.img style={styles.image} src={element} key={index} whileHover={{scale: 1.3}}/>
                                )
                            })
                        }
                    </div>
                </div>
            :
                <div style={styles.img_container}>
                    <h1 style={styles.h1}>Listr</h1>
                    <HourglassBottomIcon/>
                </div>
            }
        </div>
    )
}

export default Listr
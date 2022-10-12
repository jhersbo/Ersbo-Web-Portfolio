import { useState, useEffect } from "react"

import WebFont from "webfontloader"
import { motion } from 'framer-motion'

import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"

const Parkspot = ()=>{
    
    const [isLoading, setIsLoading] = useState(true)

    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/main-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/account-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/login-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/list-page.jpg`,
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

    const openInNewTab = (url: string): void=>{
        window.open(url, '_blank', "noopener,noreferrer")
    }
    
    const styles: any = {
        img_container:{
            display: "flex",
            width: "55%",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "1em",
            boxShadow: "inset 1px 1px 50px black",
            borderRadius: "15px",
            border: "5px solid #242F40",
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
            width: "45%",
            height: "fit-content",
            margin: "0.25em 0.5em",
            borderRadius: "10px",
            boxShadow: "1px 1px 15px black",
        },
        h1: {
            width: "60%",
            margin: "0em 0em 0em 0.5em",
            fontFamily: 'Reem Kufi Ink'
        },
        btn: {
            cursor: "pointer",
            height: "auto",
            color: "#EDEFFF",
            backgroundColor: "#242F40",
            border: "3px inset #EDEFFF",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px black",
            fontFamily: "Reem Kufi Ink",
            fontSize: "24px",
            fontWeight: 500
        },
        gen: {
            margin: "3% 0%",
            fontFamily: "Reem Kufi Ink",
            fontSize: '20px'
        }
    }

    return(
        <div style={styles.outer_container} className="exp-project-outer-container">
            {!isLoading ? 
                <div style={styles.inner_container}>
                    <div style={styles.desc_container}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <h1 style={styles.h1}>Parkspot</h1>
                            <motion.button 
                            onClick={()=>{
                                openInNewTab("https://parkspot-client.herokuapp.com/")}
                            }
                            whileHover={{scale: 1.1}} 
                            style={styles.btn} 
                            aria-label="Visit the app."
                            >Click to Visit!</motion.button>
                        </div>
                        <h3 style={styles.gen}>Node.js, React.js, PostgreSQL/Sequelize, Express.js</h3>
                        <hr/>
                        <p style={styles.gen}>
                            
                        </p>
                        <p style={styles.gen}>
                            
                        </p>
                        <p style={styles.gen}>
                            
                        </p>
                    </div>
                    <div style={styles.img_container}>
                        {
                            imgs.map((element, index)=>{
                                return(
                                    <motion.img style={styles.image} src={element} key={index} alt="View of Parkspot" whileHover={{scale: 1.5}}/>
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

export default Parkspot
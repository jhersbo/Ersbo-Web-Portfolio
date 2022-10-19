import { useState, useEffect, useReducer } from "react"

import { motion } from 'framer-motion'

import useCache from "../Custom_Hooks/useCache"

import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface GenProjectComponentProps{
    thinScreenBool: boolean,
    mobileBool: boolean,
    styles: any,
    imageArr: string[],
    title: string,
    projectURL: string,
    techStack: string,
    platforms: string,
    paragraph1: string,
    paragraph2: string,
    paragraph3: string,
}

const GeneralProjectComponent = ({ thinScreenBool, mobileBool, styles, imageArr, title, projectURL, techStack, platforms, paragraph1, paragraph2, paragraph3 }: GenProjectComponentProps )=>{
    
    const [isLoading, setIsLoading] = useState(true)

    const imgs = imageArr
    //initial image state
    const initialState: {index: any} = {index: 0};
    //reducer logic for incrementation
    const reducer = (state: any, action: any) => {
        switch(action.type){
            case 'increment':
                if(state.index === imgs.length - 1){
                    return {index: 0}
                }else{
                    return {index: state.index + 1}
                }
            case 'decrement':
                if(state.index === 0){
                    return {index: imgs.length - 1}
                }else{
                    return {index: state.index - 1}
                }
            default: 
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCache(imgs, setIsLoading, ['Reem Kufi Ink'])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const openInNewTab = (url: string): void => {
        window.open(url, '_blank', "noopener,noreferrer")
    }

    return(
        <div style={styles.outer_container} className="exp-project-outer-container">
            {!isLoading ? 
                <div style={styles.inner_container}>
                    <div style={styles.desc_container}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <h1 style={styles.h1}>{title}</h1>
                            <motion.button 
                            onClick={()=>{
                                    openInNewTab(projectURL)
                                }
                            }
                            whileHover={{scale: 1.1}} 
                            style={styles.btn} 
                            aria-label="Visit the app."
                            >Click to Visit!</motion.button>
                        </div>
                        <h3 style={styles.gen}>
                            {techStack}
                        </h3>
                        <h4 style={styles.gen}>
                            {platforms}
                        </h4>
                        <hr/>
                        <p style={styles.gen}>
                            {paragraph1} 
                        </p>
                        <p style={styles.gen}>
                            {paragraph2} 
                        </p>
                        <p style={styles.gen}>
                            {paragraph3}  
                        </p>
                    </div>
                    {
                        !mobileBool ? 
                        <div style={styles.img_container}>
                            <motion.button onClick={() => dispatch({type: 'decrement'})} style={styles.switchBtn} whileHover={{scale: 1.2}} aria-label="previous image">
                                <ArrowBackIcon sx={styles.icon}/>
                            </motion.button>
                                <img style={styles.image} src={imgs[state.index]} alt={`View of ${title}`}/>
                            <motion.button onClick={() => dispatch({type: 'increment'})} style={styles.switchBtn} whileHover={{scale: 1.2}} aria-label="next image">
                                <ArrowForwardIcon sx={styles.icon}/>
                            </motion.button>
                        </div>
                        :
                        <div style={styles.img_container}>
                        {
                            imgs.map((element: any, index: any)=>{
                                return(
                                    <motion.img style={styles.image} src={element} key={index} whileHover={{scale: 1.1}}/>
                                )
                            })
                        }
                        </div>
                    }
                </div>
            :
                <div style={styles.img_container}>
                    <h1 style={styles.h1}>{title}</h1>
                    <HourglassBottomIcon/>
                </div>
            }
        </div>
    )
}

export default GeneralProjectComponent
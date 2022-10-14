import { useState, useEffect, useReducer } from "react"

import { motion } from 'framer-motion'

import useCache from "../Custom_Hooks/useCache"

import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Parkspot = ()=>{
    
    const [isLoading, setIsLoading] = useState(true)

    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/main-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/account-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/login-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/list-page.jpg`,
    ]
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
                    return {index: 3}
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
    
    const styles: any = {
        img_container:{
            display: "flex",
            width: "55%",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
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
            width: "90%",
            height: "fit-content",
            margin: "0em",
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
        switchBtn:{
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            height: "fit-content",
            padding: "0em",
            margin: "0em"
        },
        gen: {
            margin: "3% 0%",
            fontFamily: "Reem Kufi Ink",
            fontSize: '20px'
        },
        icon: {
            margin: "0px",
            fontSize: "42px",
            color: "#242F40"
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
                        <h3 style={styles.gen}>
                            Node.js, React.js, PostgreSQL/Sequelize, Express.js
                        </h3>
                        <h4 style={styles.gen}>
                            Mobile & Desktop!
                        </h4>
                        <hr/>
                        <p style={styles.gen}>
                            
                        </p>
                        <p style={styles.gen}>
                            
                        </p>
                        <p style={styles.gen}>
                            
                        </p>
                    </div>
                    <div style={styles.img_container}>
                        <motion.button onClick={() => dispatch({type: 'decrement'})} style={styles.switchBtn} whileHover={{scale: 1.2}} aria-label="previous image">
                            <ArrowBackIcon sx={styles.icon}/>
                        </motion.button>
                            <img style={styles.image} src={imgs[state.index]} alt="View of Parkspot"/>
                        <motion.button onClick={() => dispatch({type: 'increment'})} style={styles.switchBtn} whileHover={{scale: 1.2}} aria-label="next image">
                            <ArrowForwardIcon sx={styles.icon}/>
                        </motion.button>
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
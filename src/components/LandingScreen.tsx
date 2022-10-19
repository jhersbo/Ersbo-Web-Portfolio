import React from "react"
import { useState } from "react";
import { motion } from "framer-motion";
import '../sass/landingScreen.scss'

interface LandingScreenProps{
    setPage: React.Dispatch<React.SetStateAction<string>>,
    thinScreenBool: boolean
}

const LandingScreen = ({ setPage, thinScreenBool }: LandingScreenProps)=>{
    const [clicked, setClicked] = useState(false)

    const variantsLeft = {
        clicked: { x: "-200% ", y: "-40%"},
        unclicked: { x: 0 }
    }
    const variantsRight = {
        clicked: { x: "200% ", y: "-100%"},
        unclicked: { x: 0 }
    }
    const variantsBottom = {
        clicked: {x: '0%', y: "500%"},
        unclicked: {x:0, y: 0}
    }

    //lil timer function
    function wait(ms:number){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const setView = (page: string)=>{
        wait(150).then(()=>{
            setPage(page)
        })
    }
    
    return(
        <div onClick={()=>{setClicked(true)}} onMouseUp={()=>{setView('home')}}>
            <header id="top-landing-panels">
                <motion.div id="landing-name-div" className="top-landing-panels" 
                animate={clicked ? "clicked" : "unclicked"} 
                variants={variantsLeft}
                transition={{ type: "spring", stiffness: 100 }}>
                    <motion.h1 id="landing-name"
                    whileHover={{scale: 1.1,}}
                    transition={{ type: "spring", stiffness: 400, damping: 8}}>Jack<br></br>Ersbo</motion.h1>
                </motion.div>
                <motion.div id="landing-role-div" className="top-landing-panels"
                animate={clicked ? "clicked" : "unclicked"} 
                variants={variantsRight}
                transition={{ type: "spring", stiffness: 100 }}>
                    <motion.h1 id="landing-role"
                    whileHover={{scale: 1.1,}}
                    transition={{ type: "spring", stiffness: 400, damping: 8 }}>Full-Stack Software Developer</motion.h1>
                </motion.div>
            </header>
            <motion.footer id="landing-footer" className="bottom-landing-panel"
            animate={clicked ? "clicked" : "unclicked"} 
            variants={variantsBottom}
            transition={{ type: "spring", stiffness: 100 }}>
                <h2>Thank you for checking out my site!</h2>
                {
                    !thinScreenBool ? 
                    <h4 id="landing-click-prompt">*Click anywhere to continue*</h4>
                    :
                    <h4 id="landing-click-prompt">*Tap anywhere to continue*</h4>
                }
            </motion.footer>
        </div>
    )
}
export default LandingScreen
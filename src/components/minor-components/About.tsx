import './sass/bubbleMenus.scss'
import { motion } from "framer-motion";
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";
import { useEffect, useRef, useState } from "react";

import AboutContent from "./micro-components/AboutContent";

import CloseIcon from '@mui/icons-material/Close';

const About = ()=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    const [hover, setHover] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef()

    const handleClick = ()=>{
        previousRef.current = coords
        setClicked(!clicked)
    }

    useEffect(()=>{
        if(!expand){
            setHover(false)
        }
    }, [expand])

    if(!expand){
        return(
            <motion.div
            ref={ref}
            className="box"
            animate={clicked ? coords : previousRef.current}
            style={{width: "150px", height: "150px"}}
            whileHover={{scale: 1.1,}}
            whileTap={{scale: 0.8}}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 40,
                restDelta: 0.001
            }}>
                <h3 onClick={()=>{handleClick()}}>About Me</h3>
                <button onClick={()=>{setExpand(!expand)}}>Button</button>
            </motion.div>
        )
    }else{
        return(
            <motion.div
            ref={ref}
            className="expanded-box"
            animate={{x: "0vw", y: "-3vh",  width: "75vw"}}
            style={{height: "fit-content",}}
            transition={{
                type: "spring",
                damping: 15,
                stiffness: 80,
                restDelta: 0.001
            }}>
                <div className='expanded-container'>
                    <button 
                    onMouseEnter={()=>{setHover(true)}} 
                    onMouseLeave={()=>{setHover(false)}} 
                    onClick={()=>{setExpand(!expand)}} 
                    style={{
                        border: "5px solid white",
                        boxShadow: hover ? "none" : "2px 2px 15px black",  
                        borderRadius: "50%",
                        height: "60px",
                        width: "68px",
                        marginLeft: "1em",
                        marginTop: "1em", 
                        background: hover ? "#161d27" : "#242F40"
                        // background: hover ? "black" : "none", 
                    }}>
                            <CloseIcon sx={{fontSize: "36px", color: "white"}}/>
                    </button>
                    <div className='content-container'>
                        <AboutContent/>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default About
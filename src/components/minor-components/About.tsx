import './sass/bubbleMenus.scss'
import { motion } from "framer-motion";
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";
import { useRef, useState } from "react";

import AboutContent from "./micro-components/AboutContent";

import CloseIcon from '@mui/icons-material/Close';

const About = ()=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef({x: 0, y: 100})

    const handleClick = ()=>{
        previousRef.current = coords
        setClicked(!clicked)
    }

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
            }}
            onClick={()=>{handleClick()}}>
                <h3 >About Me</h3>
                <button onClick={()=>{setExpand(!expand)}}>Expand</button>
            </motion.div>
        )
    }else{
        return(
            <motion.div
            ref={ref}
            className="expanded-box"
            animate={{x: "0vw", y: "12vh",  width: "75vw"}}
            style={{height: "fit-content",}}
            transition={{
                type: "spring",
                damping: 15,
                stiffness: 80,
                restDelta: 0.001
            }}>
                <div className='expanded-container'>
                    <button 
                    onClick={()=>{setExpand(!expand); setClicked(false)}} 
                    style={{
                        
                    }} className='close-button'>
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
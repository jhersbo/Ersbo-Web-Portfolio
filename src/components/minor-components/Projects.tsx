import './sass/bubbleMenus.scss'
import { motion } from "framer-motion";
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";
import { useRef, useState, useEffect } from "react";

import ProjectsContent from "./micro-components/ProjectsContent";

import CloseIcon from '@mui/icons-material/Close';

const Projects = ()=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    const [hover, setHover] = useState(false)

    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef({x: 0, y: 600})

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
                <h3 onClick={()=>{handleClick()}}>My Projects</h3>
                <button onClick={()=>{setExpand(!expand)}}>Button</button>
            </motion.div>
        )
    }else{
        return(
            <motion.div
            ref={ref}
            className="expanded-box"
            animate={{x: "8vw", y: "0vh", height: "fit-content", width: "75vw"}}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 40,
                restDelta: 0.001
            }}>
                <div className='content-container'>
                    <button 
                    onMouseEnter={()=>{setHover(true)}} 
                    onMouseLeave={()=>{setHover(false)}} 
                    onClick={()=>{setExpand(!expand)}} 
                    style={{
                        border: "10px outset grey", 
                        borderRadius: "50%", 
                        background: hover ? "rgba(111,27,27)" : "none", 
                    }}>
                        <CloseIcon sx={{fontSize: "36px"}}/>
                    </button>
                    <ProjectsContent/>
                </div>
            </motion.div>
        )
    }
}

export default Projects
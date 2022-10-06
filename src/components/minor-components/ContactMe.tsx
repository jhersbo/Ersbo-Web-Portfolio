import './sass/bubbleMenus.scss'

import { motion } from "framer-motion";
import { useState, useRef } from 'react'
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";

import ContactMeContent from "./micro-components/ContactMeContent";
import CloseIcon from '@mui/icons-material/Close';

const ContactMe = ()=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef({x: 0, y: 500})

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
            onClick={()=>{handleClick()}}
            >
                <h3>Get in touch</h3>
                <button className='expand' onClick={()=>{setExpand(!expand)}}>Expand</button>
            </motion.div>
        )
    }else{
        return(
            <motion.div
            ref={ref}
            className="expanded-box"
            animate={{x: "0vw", y: "16vh", height: "fit-content", width: "75vw"}}
            style={{height: "fit-content",}}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 40,
                restDelta: 0.001
            }}>
                <div className='expanded-container'>
                    <button 
                    onClick={()=>{setExpand(!expand); setClicked(false)}}
                    className='close-button' 
                    >
                        <CloseIcon sx={{fontSize: "36px", color: "white"}}/>
                    </button>
                    <ContactMeContent/>
                </div>
            </motion.div>
        )
    }
}

export default ContactMe
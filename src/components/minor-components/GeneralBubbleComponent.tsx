import './sass/bubbleMenus.scss'

import { motion } from "framer-motion";
import { useState, useRef } from 'react'
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";

import CloseIcon from '@mui/icons-material/Close';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

interface GenBubbleProps{
    startingCoords: {x: number, y: number},
    title: string, 
    expandedY: string, 
    internalJSX: JSX.Element
}

const GeneralBubbleComponent = ({ startingCoords, title, expandedY, internalJSX }: GenBubbleProps)=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef(startingCoords)

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
                <h3 style={{margin: "1em, 0em"}}>{title}</h3>
                <h5 style={{margin: "0em", fontWeight: 200}}>*Click Me*</h5>
                <button className='expand' onClick={()=>{setExpand(!expand)}} aria-label='Expand'>
                    <OpenInFullRoundedIcon sx={{color: "white", fontSize: "30px"}}/>
                </button>
            </motion.div>
        )
    }else{
        return(
            <motion.div
            ref={ref}
            className="expanded-box"
            animate={{x: "1.5vw", y: expandedY,  width: "87vw"}}
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
                    className='close-button' aria-label='Close'>
                            <CloseIcon sx={{fontSize: "36px", color: "white"}}/>
                    </button>
                    <div className='content-container'>
                        {internalJSX}
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default GeneralBubbleComponent
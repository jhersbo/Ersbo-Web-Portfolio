import './sass/bubbleMenus.scss'

import { motion } from "framer-motion";
import { useState, useRef } from 'react'
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";

import CloseIcon from '@mui/icons-material/Close';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface GenBubbleProps{
    thinScreenBool: boolean,
    startingCoords: {x: number, y: number},
    title: string, 
    expandedY: string, 
    internalJSX: JSX.Element
}

const GeneralBubbleComponent = ({ thinScreenBool, startingCoords, title, expandedY, internalJSX }: GenBubbleProps)=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef(startingCoords)

    const handleClick = ()=>{
        previousRef.current = coords
        setClicked(!clicked)
    }

    if(!thinScreenBool){
        if(!expand){
            return(
                <motion.div
                ref={ref}
                className="box"
                animate={clicked ? coords : previousRef.current}
                style={{width: "175px", height: "175px"}}
                whileHover={{scale: 1.1,}}
                whileTap={{scale: 0.8}}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 40,
                    restDelta: 0.001
                }}
                onClick={()=>{handleClick()}}>
                    <h3 style={{margin: "1em 0em 0.5em 0em"}}>{title}</h3>
                    <h5 style={{margin: "0.5em 0em 1em 0em", fontWeight: 200}}>{clicked ? "Drag Me!" : "Click Me!"}</h5>
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
    }else{
        return(
            <motion.div 
            className='box'
            animate={startingCoords}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 40,
                restDelta: 0.001
            }}
            >
                <div className='box-title'>
                    <h3>{title}</h3>
                    <button className='expand' onClick={()=>{setExpand(!expand)}}>
                        {
                            !expand ?
                            <ExpandMoreIcon sx={{
                                color: "white",
                                fontSize: "32px"
                            }}/>
                            : 
                            <ExpandLessIcon sx={{
                                color: "white",
                                fontSize: "32px"
                            }}/>
                        }
                    </button>
                </div>
                {
                    !expand ?
                    null
                    :
                    <div className='content-container'>
                        {internalJSX}
                    </div>
                }
            </motion.div>
        )
    }
}

export default GeneralBubbleComponent
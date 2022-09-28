import { motion } from "framer-motion";
import { useFollowPointer } from "../Function_Modules/useFollowPointer";

import { useEffect, useRef, useState } from "react";

const Projects = ()=>{
    const [clicked, setClicked] = useState(false)
    const ref = useRef(null);
    const coords = useFollowPointer(ref, clicked);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef()

    const handleClick = ()=>{
        // setPoint({ x: coords?.x, y: coords?.y })
        // previous.current = { x, y }
        previousRef.current = coords
        setClicked(!clicked)
    }

    return(
        <motion.div
        ref={ref}
        className="box"
        animate={clicked ? coords : previousRef.current}
        // style={clicked ? coords : previousRef.current}
        transition={{
            type: "spring",
            damping: 10,
            stiffness: 40,
            restDelta: 0.001
        }}>
            <h1 onClick={()=>{handleClick()}}>My Projects</h1>
            <button onClick={()=>{console.log('clicked')}}>Yo</button>
        </motion.div>
    )
}

export default Projects
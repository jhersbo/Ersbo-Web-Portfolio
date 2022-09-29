import { motion } from "framer-motion";
import { useFollowPointer } from "../Custom_Hooks/useFollowPointer";

import { useRef, useState } from "react";
import AboutContent from "./micro-components/AboutContent";

const About = ()=>{
    const [clicked, setClicked] = useState(false)
    const [expand, setExpand] = useState(false)
    
    const ref = useRef(null);
    const coords = useFollowPointer(ref);
    const previousRef: React.MutableRefObject<{x:number, y:number} | undefined> = useRef()

    const handleClick = ()=>{
        previousRef.current = coords
        setClicked(!clicked)
    }

    return(
        <motion.div
        ref={ref}
        className="box"
        animate={clicked ? coords : previousRef.current}
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
            {expand ? <AboutContent/> : null}
        </motion.div>
    )
}

export default About
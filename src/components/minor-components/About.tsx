import { motion } from "framer-motion";
import { useFollowPointer } from "../Function_Modules/useFollowPointer";

import { useEffect, useRef, useState } from "react";

const About = ()=>{
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    const previous = useRef({x, y})
    let [point, setPoint] = useState(useFollowPointer(ref))

    const [clicked, setClicked] = useState(false)
    
    let variants = {
        clicked:{
            x, y
        },
        unClicked:{
            x: x,
            y: y
        }
    }

    const handleClick = ()=>{
        setPoint({ x, y })
        previous.current = { x, y }
        setClicked(!clicked)
    }
    return(
        <motion.div
        ref={ref}
        className="box"
        animate={clicked? "clicked": "unclicked"}
        style={clicked? undefined: previous.current}
        variants={variants}
        transition={{
            type: "spring",
            damping: 10,
            stiffness: 40,
            restDelta: 0.001
        }}>
            <h1 onClick={()=>{handleClick()}}>About Me</h1>
            <button onClick={()=>{console.log('clicked')}}>Yo</button>
        </motion.div>
    )
}

export default About
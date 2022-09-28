import "../sass/homeScreen.scss"
import About from "./minor-components/About"
import HeroNav from "./minor-components/HeroNav"
import { useFollowPointer } from "./Function_Modules/use-follow-pointer";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HomeScreen = ()=>{
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    
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
        setClicked(!clicked)
    }

    return(
        <motion.div
        onTap={()=>{handleClick()}}
        ref={ref}
        className="box"
        animate={clicked? "clicked": "unclicked"}
        style={clicked? undefined: point}
        variants={variants}
        transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001
        }}>
            <h1>About Me</h1>
        </motion.div>
    )
}

export default HomeScreen
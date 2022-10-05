import './sass/homeScreenNav.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion'

const HomeScreenNav = ()=>{

    const linkArr = [
        {
            icon: <LinkedInIcon sx={{fontSize: "50px"}}/>,
            label: "LinkedIn",
            hyperlink: "https://www.linkedin.com/in/jack-henry-ersbo/"
        },
        {
            icon: <GitHubIcon sx={{fontSize: "50px"}}/>,
            label: "Github",
            hyperlink: "https://github.com/jhersbo"
        }
    ]

    const openInNewTab = (url: string): void=>{
        window.open(url, '_blank', "noopener,noreferrer")
    }

    const renderNav = (): any =>{
        let mapProduct = linkArr.map((element: any, index: number)=>{
            return(
                <motion.li 
                key={index} 
                id={element.label} 
                className='nav-icon'
                onClick={()=>{openInNewTab(element.hyperlink)}}
                whileHover={{scale: 1.1,}}
                whileTap={{scale: 0.8}}
                >
                    {element.icon}
                </motion.li>
            )
        })
        return mapProduct
    }

    return(
        <div id='homescreen-nav'>
            <ul style={{listStyleType: "none"}}>
                {renderNav()}
            </ul>
        </div>
    )
}

export default HomeScreenNav
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

    const languageArr = [
        {
            element: <i className="devicon-javascript-plain colored" style={{
                fontSize: "50px",
                backgroundColor: "black",
                padding: "1px"
            }}></i>
        },
        {
            element: <i className="devicon-html5-plain-wordmark colored" style={{
                fontSize: "50px",
                padding: "1px"
            }}></i>
        },
        {
            element: <i className="devicon-css3-plain-wordmark colored" style={{
                fontSize: "50px",
                padding: "1px"
            }}></i> 
        },
        {
            element: <i className="devicon-react-original-wordmark colored" 
            style={{
                fontSize: "50px",
                padding: "1px"
            }}></i>
        },
        {
            element: <i className="devicon-postgresql-plain-wordmark colored" 
            style={{
                fontSize: "50px",
                padding: "1px"
            }}></i>
        },
        {
            element: <i className="devicon-python-plain-wordmark colored" 
            style={{
                fontSize: "50px",
                padding: "1px",
                color: "#386F9F"
            }}></i>
        },
        {
            element: <i className="devicon-flask-original-wordmark colored"
            style={{
                fontSize: "50px",
                padding: "1px"
            }}></i>
          
        }
    ]

    const openInNewTab = (url: string): void=>{
        window.open(url, '_blank', "noopener,noreferrer")
    }

    const renderNav = (): any =>{
        let mapProduct = linkArr.map((item: any, index: number)=>{
            return(
                <motion.li 
                key={index} 
                id={item.label} 
                className='nav-icon'
                onClick={()=>{openInNewTab(item.hyperlink)}}
                whileHover={{scale: 1.1,}}
                whileTap={{scale: 0.8}}
                >
                    {item.icon}
                </motion.li>
            )
        })
        return mapProduct
    }

    const renderLanguages = ()=>{
        let mapProduct = languageArr.map((item: any, index: number)=>{
            return(
                <li key={index}>
                    {item.element}
                </li>
            )
        })
        return mapProduct
    }

    return(
        <nav id='homescreen-nav'>
            <ul id="languages">
                {renderLanguages()}
            </ul>
            <ul id="socials">
                {renderNav()}
            </ul>
        </nav>
    )
}

export default HomeScreenNav
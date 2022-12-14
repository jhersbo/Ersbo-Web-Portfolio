import './sass/ContactMeContent.scss'
import '../sass/bubbleMenus.scss'

import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

interface ContactMeProps{
    thinScreenBool: boolean
}

const ContactMeContent = ({ thinScreenBool }: ContactMeProps)=>{

    const handleDownloadClick = ()=>{
        fetch(`${process.env.PUBLIC_URL}/Portfolio-materials/Jack_Ersbo_Resume_12.13.2022.pdf`)
        .then(response => {
            response.blob()
            .then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = `JackErsboResume.pdf`
                alink.click()
            })
        })
    }

    const openInNewTab = (url: string): void=>{
        window.open(url, '_blank', "noopener,noreferrer")
    }

    return(
        <div id='contact-content-container'>
            <div id='contact-content'>
                <div id='contact-info-container'>
                    <h3>My Contact Information:</h3>
                    <hr></hr>
                    <ul style={{listStyleType: "none"}}>
                        <li 
                        className='contact-list-item'
                        id='contact-list-link'
                        onClick={()=>{
                            openInNewTab("mailto:jhersbo@gmail.com")
                        }}
                        >
                            <EmailIcon/> 
                            <h3>
                                <u>jhersbo@gmail.com</u>
                                (preferred)
                            </h3>
                        </li>
                        <li className='contact-list-item'>
                            <ContactPhoneIcon/> <h3>(262)441-3564</h3>
                        </li>
                    </ul>
                </div>
                <div id='download-container'>
                    <button className="contact-btn" id='resume-download-btn' onClick={()=>{handleDownloadClick()}}>Download my resume!</button>
                    <button className='contact-btn' onClick={()=>{
                        openInNewTab("mailto:jhersbo@gmail.com")
                    }}>Send me an email!</button>
                </div>
            </div>
        </div>
    )
}

export default ContactMeContent
import './sass/ContactMeContent.scss'
import '../sass/bubbleMenus.scss'

const ContactMeContent = ()=>{

    const handleDownloadClick = ()=>{
        fetch(`${process.env.PUBLIC_URL}/Portfolio-materials/Resume_mk2.pdf`)
        .then(response => {
            response.blob()
            .then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = `Resume_mk2.pdf`
                alink.click()
            })
        })
    }

    return(
        <div id='contact-content-container'>
            <div id='contact-header'>
                <h1>Get in touch with me!</h1>
            </div>
            <div id='contact-content'>
                <div>
                    <h3>My Contact Information</h3>
                </div>
                <div id='download-container'>
                    {/* <h3>Download my resume below:</h3> */}
                    <button id='resume-download-btn' onClick={()=>{handleDownloadClick()}}>Download my resume!</button>
                </div>
            </div>
        </div>
    )
}

export default ContactMeContent
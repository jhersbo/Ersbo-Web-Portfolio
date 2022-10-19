import GeneralProjectComponent from "./GeneralProjectComponent"

interface Props{
    thinScreenBool: boolean
}

const GenSocialApp = ({ thinScreenBool }: Props)=>{
    
    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/SocialApp/home.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/SocialApp/friendsposts.jpg`
    ]

    const styles: any = {
        img_container:{
            display: "flex",
            width: "55%",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
            boxShadow: "inset 1px 1px 50px black",
            borderRadius: "15px",
            border: "5px solid #242F40",
            backgroundColor: "inherit"
        },
        inner_container: {
            display: "flex",
            justifyContent: "space-between"
        },
        outer_container: {
            padding: "none"
        },
        desc_container: {
            width: "40%"
        },
        image: {
            width: "90%",
            height: "fit-content",
            margin: "0em",
            borderRadius: "10px",
            boxShadow: "1px 1px 15px black",
        },
        h1: {
            width: "60%",
            margin: "0em 0em 0em 0.5em",
            fontFamily: 'Reem Kufi Ink'
        },
        btn: {
            cursor: "pointer",
            height: "auto",
            color: "#EDEFFF",
            backgroundColor: "#242F40",
            border: "3px inset #EDEFFF",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px black",
            fontFamily: "Reem Kufi Ink",
            fontSize: "24px",
            fontWeight: 500
        },
        switchBtn:{
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            height: "fit-content",
            padding: "0em",
            margin: "0em"
        },
        gen: {
            margin: "3% 0%",
            fontFamily: "Reem Kufi Ink",
            fontSize: '20px'
        },
        icon: {
            margin: "0px",
            fontSize: "42px",
            color: "#242F40"
        }
    }

    const paragraphs = {
        1: "This is a small social networking blog created by two other developers and myself. I built the backend. We worked to incorporate Agile methodologies in our workflow.",
        2: "The app features user authentication, full CRUD functionality, and the ability to send friend requests and filter posts based on the user's friends.",
        3: ""
    }

    return(
        <GeneralProjectComponent thinScreenBool={thinScreenBool} mobileBool={false} styles={styles} imageArr={imgs} title={"The Social App"} projectURL={"https://social-app-client.herokuapp.com/"} techStack={"Node.js, React.js, PostgreSQL/Sequelize, Express.js"} platforms={"Desktop only"} paragraph1={paragraphs[1]} paragraph2={paragraphs[2]} paragraph3={paragraphs[3]}/>
    )
}

export default GenSocialApp
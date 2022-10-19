import GeneralProjectComponent from "./GeneralProjectComponent"

interface Props{
    thinScreenBool: boolean
}

const GenParkspot = ({ thinScreenBool }: Props)=>{

    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/main-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/account-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/login-page.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Parkspot/list-page.jpg`,
    ]

    const paragraphs = {
        1: "Parkspot is an application that connects buyers and sellers of short-term event parking on the seller's private property.",
        2: "It allows users to list and reserve parking spots. It also features user authentication and full CRUD functionality.",
        3: "Note: This is a concept site and is not an actual service."
    }

    const styles: any = {
        img_container:{
            display: "flex",
            width: !thinScreenBool ? "55%" : "85%",
            height: "auto",
            justifyContent: !thinScreenBool ? "flex-end" : "center",
            alignItems: "center",
            padding: "1em",
            boxShadow: "inset 1px 1px 50px black",
            borderRadius: "15px",
            border: "5px solid #242F40",
            backgroundColor: "inherit"
        },
        inner_container: {
            display: "flex",
            flexDirection: !thinScreenBool ? "row" : "column",
            justifyContent: "space-between"
        },
        outer_container: {
            padding: !thinScreenBool ? "none" : "0em 0.5em 0.5em 0.5em",
            borderRadius: "15px"
        },
        desc_container: {
            display: !thinScreenBool ? "block" : "flex",
            width: !thinScreenBool ? "40%" : "100%",
            flexDirection: !thinScreenBool ? "inherit" : "column",
            padding: !thinScreenBool ? "inherit" : "1%"
        },
        image: {
            width: "90%",
            height: "auto",
            margin: "0em",
            borderRadius: "10px",
            boxShadow: "1px 1px 15px black",
        },
        h1: {
            width: !thinScreenBool ? "100%" : "60%",
            margin: !thinScreenBool ? "0em 0em 0em 0.5em" : "0em",
            fontFamily: 'Reem Kufi Ink'
        },
        btn: {
            cursor: "pointer",
            height: "fit-content",
            width: !thinScreenBool ? "auto" : "30%",
            color: "#EDEFFF",
            backgroundColor: "#242F40",
            border: "3px inset #EDEFFF",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px black",
            fontFamily: "Reem Kufi Ink",
            fontSize: "18px",
            fontWeight: 300
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

    return(
        <GeneralProjectComponent thinScreenBool={thinScreenBool} mobileBool={false} styles={styles} imageArr={imgs} title={"Parkspot"} projectURL={"https://parkspot-client.herokuapp.com/"} techStack={"Node.js, React.js, PostgreSQL/Sequelize, Express.js"} platforms={"Mobile and Desktop supported!"} paragraph1={paragraphs[1]} paragraph2={paragraphs[2]} paragraph3={paragraphs[3]}/>
    )
}

export default GenParkspot
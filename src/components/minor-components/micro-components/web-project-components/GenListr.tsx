import GeneralProjectComponent from "./GeneralProjectComponent"

interface Props{
    thinScreenBool: boolean
}

const GenListr = ({ thinScreenBool }: Props)=>{

    const imgs = [
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Home.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/List.jpg`,
        `${process.env.PUBLIC_URL}/images/project_screenshots/Listr/Account.jpg`
    ]

    const styles = {
        img_container:{
            display: "flex",
            width: "55%",
            justifyContent: "flex-end",
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
            width: "32%",
            height: "fit-content",
            margin: "0em 0.25em",
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
        gen: {
            margin: "3% 0%",
            fontFamily: "Reem Kufi Ink",
            fontSize: '20px'
        }
    }

    const paragraphs = {
        1: "Listr is a list-making application that allows users to create, view, update, and delete various elements of a list. It has user authentication which allow users to view their lists across any device.",
        2: "When creating a list, users can create and name as many columns of a list as they like. From there, they can add any number of items to a column with the '+' button. They can also delete items from a list at any time.",
        3: "The application is optimized to make only two API calls on load and only one when a user changes something about their list. Listr also uses browser cookies to store information about the list being viewed, so users don't have to re-navigate to their list if their device sleeps."
    }

    return(
        <GeneralProjectComponent thinScreenBool={thinScreenBool} mobileBool={true} styles={styles} imageArr={imgs} title={"Listr"} projectURL={"https://listr-ersbo.herokuapp.com/"} techStack={"Node.js, React.js, PostgreSQL/Sequelize, Express.js"} platforms={"Mobile only. View in dev tools for best experience."} paragraph1={paragraphs[1]} paragraph2={paragraphs[2]} paragraph3={paragraphs[3]}/>
    )
}

export default GenListr
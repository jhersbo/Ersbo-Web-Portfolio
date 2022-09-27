import React from "react"

class LandingScreen extends React.Component<any>{
    render(): React.ReactNode {
        return(
            <div onClick={()=>{this.props.viewChange('home')}}>
                <h1>Jack Ersbo</h1>
                <h3>Full-Stack Software Developer</h3>
                <hr></hr>
                <p>*Click anywhere to continue.*</p>
            </div>
        )
    }
}

export default LandingScreen
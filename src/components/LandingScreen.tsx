import React from "react"
import '../sass/landingScreen.scss'

class LandingScreen extends React.Component<any>{
    render(): React.ReactNode {
        return(
            <div onClick={()=>{this.props.viewChange('home')}}>
                <header id="top-landing-panels">
                    <div id="landing-name-div" className="top-landing-panels">
                        <h1 id="landing-name">Jack Ersbo</h1>
                    </div>
                    <div id="landing-role-div" className="top-landing-panels">
                        <h1 id="landing-role">Full-Stack Software Developer</h1>
                    </div>
                </header>
                <footer id="landing-footer" className="bottom-landing-panel">
                    <h3 id="landing-click-prompt">*Click anywhere to continue.*</h3>
                </footer>
            </div>
        )
    }
}

export default LandingScreen
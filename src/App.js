import React from 'react';
import './App.css';
import Links from './links/Links'
import Logo from './logo/Logo'
import './modeSlider.css'
import './langSlider.css'

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mode: 'day',
            lang: 'en'
        }
    }

    componentDidMount(){};

    changeMode = () => {
        if (this.state.mode === 'day' || ""){
            this.setState({mode: "night"});
            document.body.style = "background-color: black;"
        }
        else if (this.state.mode === 'night'){
            this.setState({mode: "day"});
            document.body.style = "background-color: white;"
        }
    }
    changeLang = () => {
        if (this.state.lang === 'en' || ""){
            this.setState({lang: "fr"});
        }
        else if (this.state.lang === 'fr'){
            this.setState({lang: "en"});
        }
    }

    render() {


        return (

            <div className={this.state.mode === "day" ? "inverse pageMax app" : "core pageMax app"}>
                <div className='header'>
                   <div className='inline logo'>
                    <Logo mode={this.state.mode}/>
                </div>

                <Links className = 'link inline' mode={this.state.mode}/>

                    <div className='toggle'>
                        <label className="switch">
                            <input type="checkbox" onChange={this.changeMode}/>
                            <span className="slider round"> </span>
                        </label>
                        <label className="langSwitch ">
                            <input type="checkbox" onChange={this.changeLang}/>
                            <span className="langSlider round "> </span>
                        </label>
                    </div>


                </div>



            </div>
        )
            ;
    }
}

export default App;
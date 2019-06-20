import React from 'react';
import './App.css';
import './langSlider.css'
import paperplane from './assets/icons/new.svg'
import gh from './assets/icons/icons8-github.svg'
import li from './assets/icons/icons8-linkedin.svg'
import roles from './assets/roles.json';
import work from './assets/work.json'
import gb from './assets/icons/gb-flag.svg'
import fr from './assets/icons/fr-flag.svg'
import 'mapbox-gl/dist/mapbox-gl.css';

import code from './assets/workIcons/icons8-code-file-50.png'
import data_icon from './assets/workIcons/icons8-data-configuration-50.png'
import doc from './assets/workIcons/icons8-empty-document-50.png'
import slides from './assets/workIcons/icons8-presentation-50.png'
import excel from './assets/workIcons/icons8-spreadsheet-50.png'
import strategy from './assets/workIcons/icons8-strategy-50.png'
import arrow from './assets/workIcons/icons8-down-button-100.png'
import Globe from "./globe/Globe";

const en_prename = `Hi, I'm `
const fr_premane = `Salut, je m'appelle `
const en_prebio = "And I'm a"
const fr_prebio = "Et je suis un"
const en_contact ="Contact me"
const fr_contact = "Contactez"
const en_travel=" Where I've Been "
const fr_travel = "Mes Voyages"
const en_work = "What I've Done"
const fr_work="Mes Travailles"

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./assets/photos/', false, /\.(png|jpe?g|svg)$/));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'day',
            lang: 'en',
            index: 0,
            BGI: 0,
            mapVisible: 0,
        }
    }
    makeRoleArray(){
       return this.state.lang === 'en' ? roles.roles.en : roles.roles.fr
    }
    determineLogo(T){
        switch (T){
            case "code":
                return code;
                break
            case "excel":
                return excel
            case "doc":
                return doc
            case "strategy":
                return strategy
            case "data":
                return data_icon
            case "presentation":
                return slides
            default:
                return excel
        }
    }
    makeWorkArray(){
        let arr = this.state.lang === 'en' ? work.work.en : work.work.fr
        let inner = []
        for(let i in arr){
            inner.push(<div key={`${i}work`} className='workListItem'><img src={this.determineLogo(arr[i].type)}/>{arr[i].title}</div>)
        }
        return <div className='workListContainer'>{inner}</div>
    }

    componentDidMount() {
        this.Words = setInterval(
            () => this.changeWords(),
            3000
        )
        this.Photos = setInterval(
            () => this.changePhotos(),
            4000
        )
    };

    changeWords(){
        this.state.index +1 === this.makeRoleArray().length ? this.setState({index: 0}) : this.setState({index: this.state.index +1})
    }
    changePhotos(){
        this.state.BGI + 1 === images.length ? this.setState({BGI: 0}) : this.setState({BGI: this.state.BGI +1})
    }
    componentWillUnmount(){
        this.Words.clear()
        this.Photos.clear()
    }
    changeLang = () => {
        this.state.lang === 'en' || "" ? this.setState({lang: "fr"}) : this.setState({lang: "en"});
    };
    toggleMap = () => {
        console.log(this.state.mapVisible)
        this.state.mapVisible === 0 ? this.setState({mapVisible: 1}) : this.setState({mapVisible: 0})
    }
    testToggle = {
        color: 'white',
        gridArea: 'toggle',
        display: 'inline-block',
        height: '4vh',
        margin: '0',
        padding: '0',
        verticalAlign: 'text-bottom',
        alignSelf: 'center'
    }
    globeStyle = {
        gridColumn: '1 / end',
        gridRow: '2 / last-line',
    }
    render() {
        return (

            <div className='pageMax '>


                <div className='header'>
                    <div className='inline logo'>
                        <p className='minor'>{this.state.lang === 'en' ? en_prename : fr_premane}</p>
                        <p className='logoText'>
                            Alex
                        </p>

                    </div>
                    <div className='bio'>
                        <p className='minor'>{this.state.lang === 'en' ? `${en_prebio}${roles.roles.en[this.state.index].extraLetter} ` : `${fr_prebio}${roles.roles.fr[this.state.index].extraLetter} `}</p>
                        <p className='bioText'>
                            {this.state.lang === 'en' ? `${roles.roles.en[this.state.index].header}`: `${roles.roles.fr[this.state.index].header}`}
                        </p>
                    </div>
                    <div className='accentBox'> </div>

                    <div className='toggle'>

                        <div style={this.testToggle} onClick={this.changeLang}>
                            <div style={this.testToggle}>
                                <img src={gb} style={{...this.testToggle, ...this.state.lang === 'en' ? {transform: 'scale(1.1)'} : {transform: 'scale(0.9)'}}}/>
                                <b style={{fontSize: '4vh'}}>|</b>
                                <img src={fr} style={{...this.testToggle, ...this.state.lang === 'fr' ? {transform: 'scale(1.1)'} : {transform: 'scale(0.9)'}}}/>
                            </div>
                        </div>

                    </div>
                    <a href="mailto:me@am.xyz?" className='contact'>
                        <span className="contact">
                            <div className="cl">
                                {this.state.lang === 'en' ? `${en_contact}` : `${fr_contact}`}
                            </div>
                            <div className="cr">
                                <img src={paperplane}/>
                            </div>

                        </span>
                    </a>

                </div>

                <div className="boxes">


                    <a className ='travel' href='#' onClick={this.toggleMap}>
                        <div className="feature travel" style={{background: `url(${images[this.state.BGI]}) no-repeat center`}}>
                            <mark>{this.state.lang === 'en' ? en_travel : fr_travel}</mark>
                        </div>

                    </a>

                    <a className='github' href="https://github.com/amyer3" style={this.state.mapVisible === 0 ? {} : {display: 'none'}}>
                        <div className="github feature">
                            <div>
                                <img src={gh}/>
                            </div>

                        </div>
                    </a>

                    <a className='linkedin' href="https://www.linkedin.com/in/alexjmyers/" style={this.state.mapVisible === 0 ? {} : {display: 'none'}}>
                        <div className="linkedin feature">
                            <div>
                                <img src={li}/>
                            </div>
                        </div>

                    </a>

                        <div className='work' style={this.state.mapVisible === 0 ? {} : {display: 'none'}}>
                            <div className='upperWork'><p>{this.state.lang === 'en' ? en_work : fr_work}</p>
                            <img src={arrow}/>
                            </div>

                            <div className="list">
                                {this.makeWorkArray()}
                            </div>
                        </div>

                    <div style={{...this.globeStyle, ...this.state.mapVisible === 1 ? {} : {display: 'none'}}}>
                        <Globe/>
                    </div>



                </div>
            </div>
        );
    }
}

export default App;
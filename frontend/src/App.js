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
import styled from 'styled-components'

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

export function App(){
    const [en, changeLang] = useState(0)

    changeLang = () => {
        this.state.lang === 'en' || "" ? this.setState({lang: "fr"}) : this.setState({lang: "en"});
    };
    toggleMap = () => {
        console.log(this.state.mapVisible)
        this.state.mapVisible === 0 ? this.setState({mapVisible: 1}) : this.setState({mapVisible: 0})
    }
    
    return(
        <div>

        </div>
    )
}

export default App;
import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import cut from './cut.svg'

/*
Use this to pull all photos from a folder, and make an array from them
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./assets/photos/', false, /\.(png|jpe?g|svg)$/));
*/

const BackgroundDiv = styled.div`
    background-color: #0D1836;
    width: 100vw;
    height: 100vh;
`
const CutImage = styled.img`
    height: 100vh;
    width: auto;
    float: right;
`
const LangToggle = styled.div`
    color: white;
    font-family: 'ABeeZee', Serif;
    padding: 0;
    width: 10vw;
    text-align: left;
    grid-area: toggle;
    cursor: pointer;
    display: flex;
    align-self: center;
`

const LangP = styled.div`
    font-size: ${props => props.size}pt;
    padding: 0;
    margin: 0;
    transition: font-size 0.5s;
    width: 1.5vw
    text-align: center;
`

const Words = styled.div`
    font-size: 22pt;
    line-height: 100%;
    padding: 0;
    width: 50vw;
    display: inline-block;
    grid-area: words;
`

const InlinePara = styled.p`
    font-size: 42pt;
    padding: 0;
    color: white;
    font-family: 'ABeeZee', Serif;
`
const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: 10vw 45vw ;
    grid-template-rows: 10vh 10vh 55vh 25vh;
    grid-template-areas: 
    "cs toggle"
    "cs space"
    "cs words"
    "cs buttons"
`
const LinkButton = styled.a`
    border: 3px solid white;
    border-radius: 10px;
    display: inline-block;
    color: white;
    background-color: transparent;
    max-width: 200px;
    max-height: 50px;
    font-size: 26pt;
    font-family: 'ABeeZee', Serif;
    grid-area: ${props => props.area}
    width: 100%;
    text-align: center;
    text-decoration: none;
    outline: 0;
    vertical-align: middle;
    line-height: 50px;
`
const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 5% 30% 5% 30%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "li s1 gh s2 ct"
    "map map map map map";
    grid-area: buttons;
    margin: 0;
    padding: 0;
`

export function App() {
    const [en, changeLang] = useState(1)
    /*
    changeLang = () => {
        this.state.lang === 'en' || "" ? this.setState({lang: "fr"}) : this.setState({lang: "en"});
    };
    toggleMap = () => {
        console.log(this.state.mapVisible)
        this.state.mapVisible === 0 ? this.setState({mapVisible: 1}) : this.setState({mapVisible: 0})
    }
    */
    var handleChange = () => changeLang(!en) && console.log(en)

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    return (
        <BackgroundDiv>
            <Grid>
                <LangToggle onClick={handleChange}>
                    <LangP size={en ? 14 : 12}>EN</LangP> 
                    <LangP size={14}>|</LangP>
                    <LangP size={en ? 12 : 14}>FR</LangP>
                </LangToggle>
                <Words>
                    <InlinePara><u>Alex</u></InlinePara>
                    <InlinePara>{en ? "Engineering" : "Ingénierie"}.</InlinePara>
                    <InlinePara>{en ? "Strategy" : "Stratégie"}.</InlinePara>
                    <InlinePara>{en ? "Mostly edible baking" : "Presque comestible pain"}.</InlinePara>
                </Words>
                <ButtonGrid>
                    <LinkButton href={'https://linkedin.com/'} area={'li'}>Linkedin</LinkButton>
                    <LinkButton href={'https://github.com/amyer3'} area={'gh'}>Github</LinkButton>
                    <LinkButton href={'mailto:me@am.xyz?'} area={'ct'}>{en ? "Contact" : "Contactez"}</LinkButton>
                </ButtonGrid>
            </Grid>
            <CutImage src={cut} />
        </BackgroundDiv>
    )
}

export default App;
import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import cut from './assets/cut.svg'

/* import assets for use later on */

/*
Use this to pull all photos from a folder, and make an array from them
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./assets/photos/', false, /\.(png|jpe?g|svg)$/));

    @media  ${widthRule} {
        background-color: red;
    }

*/
const widthRule = '(max-width: 768px)';

const BackgroundDiv = styled.div`
    background-color: #0D1836;
    width: 100vw;
    height: 100vh;

    @media ${widthRule} {
        background-color: red;
    }
`
const CutImage = styled.img`
    height: 100vh;
    width: auto;
    float: right;
    @media ${widthRule} {
        display: none;
    }

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
    width: 1.5vw;
    text-align: center;
`

const Words = styled.div`
    line-height: 100%;
    padding: 0;
    width: 50vw;
    display: inline-block;
    grid-area: words;
    @media ${widthRule} {
        width: auto;
    }
`

const InlinePara = styled.p`
    font-size: 42pt;
    padding: 0;
    color: white;
    font-family: 'ABeeZee', Serif;
    @media ${widthRule} {
        font-size: 26pt;
    }
`
const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: 8vw 52vw ;
    grid-template-rows: 10vh 10vh 55vh 25vh;
    grid-template-areas: 
    "cs toggle"
    "cs space"
    "cs words"
    "cs buttons";
    @media ${widthRule} {
        grid-template-columns: 8vw 92vw ;
        grid-template-rows: 10vh 10vh 45vh 35vh;
    }
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
    grid-area: ${props => props.area};
    width: 100%;
    text-align: center;
    text-decoration: none;
    outline: 0;
    vertical-align: middle;
    line-height: 50px;
    @media ${widthRule} {
        max-height: 80px;
    }
`
const ButtonGrid = styled.div`
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: 30% 5% 30% 5% 30%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "li s1 gh s2 ct"
    "map map map map map";
    grid-area: buttons;

    @media ${widthRule} {
        grid-template-columns: 40% 10% 40% 10%;
        grid-template-rows: 50% 50%;
        grid-template-areas: 
        "li cs gh rs"
        "ct cs wa rs";

    }
`

export default function App() {
    const initState = window.navigator.language.includes('en') ? 1 : 0
    const [en, changeLang] = useState(initState)

    var handleChange = () => changeLang(!en) && console.log(en)

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || 
        (navigator.userAgent.indexOf('IEMobile') !== -1)   ||
        window.innerWidth <= 768
    };
    console.log(isMobileDevice())

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
                    <InlinePara>{en ? "Nearly edible baking" : "Presque comestible pain"}.</InlinePara>
                </Words>
                <ButtonGrid>
                    <LinkButton href={'https://linkedin.com/'} area={'li'}>Linkedin</LinkButton>
                    <LinkButton href={'https://github.com/amyer3'} area={'gh'}>Github</LinkButton>
                    <LinkButton href={`mailto:${process.env.REACT_APP_EMAIL}`} area={'ct'}>{en ? "Contact" : "Contactez"}</LinkButton>
                    <LinkButton href={process.env.REACT_APP_PHONE} area={'wa'}></LinkButton>
                </ButtonGrid>
            </Grid>
            <CutImage src={cut} />
        </BackgroundDiv>
    )
}
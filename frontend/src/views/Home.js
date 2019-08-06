import React, { useState } from "react";
import styled from "styled-components";
import cut from "../assets/svg/cut.svg";
import { Link } from "react-router-dom";

/* import assets for use later on */
import whatsapp from "../assets/svg/004-whatsapp.svg";
import github from "../assets/svg/001-github.svg";
import linkedin from "../assets/svg/002-linkedin.svg";
import email from "../assets/svg/003-telegram.svg";

const widthRule = "(max-width: 768px)";
const notWidthRule = "(min-width: 769px)";

const BackgroundDiv = styled.div`
  background-color: #0d1836;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const CutImage = styled.img`
  height: 100vh;
  width: auto;
  float: right;
  @media ${widthRule} {
    display: none;
  }
`;
const LangToggle = styled.div`
  color: white;
  font-family: "ABeeZee", Serif;
  padding: 0;
  width: 10vw;
  text-align: left;
  grid-area: toggle;
  cursor: pointer;
  display: flex;
  align-self: center;
`;

const LangP = styled.div`
  font-size: ${props => props.size}pt;
  padding: 0;
  margin: 0;
  transition: font-size 0.5s;
  width: 1.5vw;
  text-align: center;
  @media ${widthRule} {
    width: 6.5vw;
  }
`;

const Words = styled.div`
  line-height: 100%;
  padding: 0;
  width: 50vw;
  display: inline-block;
  grid-area: words;
  @media ${widthRule} {
    width: auto;
    align-self: center;
  }
`;

const InlinePara = styled.p`
  font-size: 42pt;
  padding: 0;
  color: white;
  font-family: "ABeeZee", Serif;
  @media ${widthRule} {
    font-size: 22pt;
  }
`;
const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 8vw 52vw;
  grid-template-rows: 5vh 10vh 55vh 35vh;
  grid-template-areas:
    "cs toggle"
    "cs space"
    "cs words"
    "cs buttons";
  @media ${widthRule} {
    grid-template-columns: 8vw 92vw;
    grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas:
      "cs toggle"
      "cs words"
      "cs buttons";
  }
`;
// add max-width: 200px;
const LinkButton = styled(Link)`
    border: 3px solid white;
    border-radius: 10px;
    display: {props => props.hide ? "none" : "inline-block"};
    color: white;
    background-color: transparent;
    font-size: 26pt;
    font-family: 'ABeeZee', Serif;
    grid-area: ${props => props.area};
    width: 100%;
    text-align: center;
    text-decoration: none;
    outline: 0;
    vertical-align: middle;
    display: flex;
    }

    @media ${notWidthRule}{
        :before{
        content: '${props => (props.buttonText ? props.buttonText : false)}';
        max-height: 50px;
        margin: auto;
    }
    @media ${widthRule} {
        max-height: 100rem;
        line-height: 100%;
        display: flex;
    }
`;

const ButtonGrid = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 30% 5% 30% 5% 30%;
  grid-template-rows: 25% 25%;
  grid-row-gap: 10%;
  grid-template-areas:
    "li s1 gh s2 ct"
    "photo photo photo s2 map";
  grid-area: buttons;
  justify-items: center;

  @media ${widthRule} {
    grid-template-columns: 40% 10% 40% 10%;
    grid-template-rows: 35% 35%;
    grid-template-areas:
      "li cs gh rs"
      "ct cs wa rs";
    grid-row-gap: 10%;
  }
`;
const ButtonImg = styled.img`
  display: none;
  @media ${widthRule} {
    height: 80%;
    margin: auto;
    display: flex;
  }
`;


export default function Home() {
  const initState = window.navigator.language.includes("en") ? 1 : 0;
  const [en, changeLang] = useState(initState);

  var handleChange = () => changeLang(!en);

  var isMobileDevice = () =>
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    window.innerWidth <= 768;

    var ButtonBody = [
    <LinkButton
            to={"https://linkedin.com"}
            area={"li"}
            buttonText={"LinkedIn"}
          >
            <ButtonImg src={linkedin} />
          </LinkButton>,

          <LinkButton
            to={"https://github.com/amyer3"}
            area={"gh"}
            buttonText={"Github"}
          >
            <ButtonImg src={github} />
          </LinkButton>,

          <LinkButton
            to={`mailto:${process.env.REACT_APP_EMAIL}`}
            area={"ct"}
            buttonText={en ? "Contact" : "Contactez"}
          >
            <ButtonImg src={email} />
        </LinkButton>,

        <LinkButton 
            to={'/p'}
            area={"photo"} 
            buttonText={"Photography"} 
        />,

          <LinkButton 
            to={"/m"}
            area={"map"} 
            buttonText={"Travel"} 
        />
]

        var WhatsAppButton = <LinkButton
                        to={process.env.REACT_APP_PHONE_NUMB}
                        area={"wa"}
                        hide={isMobileDevice() ? "" : true}
                        >
                        <ButtonImg src={whatsapp} />
                    </LinkButton>

if(isMobileDevice()){ ButtonBody.push(WhatsAppButton) }


  return (
    <BackgroundDiv>
      <Grid>
        <LangToggle onClick={handleChange}>
          <LangP size={en ? 14 : 12}>EN</LangP>
          <LangP size={14}>|</LangP>
          <LangP size={en ? 12 : 14}>FR</LangP>
        </LangToggle>

        <Words>
          <InlinePara>
            <u>Alex</u>
          </InlinePara>
          <InlinePara>{en ? "Strategy" : "Stratégie"}.</InlinePara>
          <InlinePara>{en ? "Engineering" : "Ingénierie"}.</InlinePara>
          <InlinePara>
            {en ? "Nearly edible baking" : "Presque comestible pain"}.
          </InlinePara>
        </Words>

        <ButtonGrid>
        {ButtonBody}



          

        </ButtonGrid>
      </Grid>

      <CutImage src={cut} />
    </BackgroundDiv>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

import cut from "../assets/svg/cut.svg";
import mcut from "../assets/svg/mobileCut.svg";

/* import assets for use later on */
import whatsapp from "../assets/svg/004-whatsapp.svg";
import github from "../assets/svg/001-github.svg";
import linkedin from "../assets/svg/002-linkedin.svg";
import email from "../assets/svg/003-telegram.svg";

const widthRule = "(max-width: 768px)";

const BackgroundDiv = styled.div`
  background-color: #0d1836;
  width: 100vw;
  height: 100vh;
`;
const CutImage = styled.img`
  position: fixed;
  z-index: 2;
  @media ${widthRule} {
    height: auto;
    position: fixed;
    max-height: 25vh;
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

  var WhatsAppButton = (
    <a
      href={process.env.REACT_APP_PHONE_NUMB}
      hide={isMobileDevice() ? "" : true}
      className="btn btn-xl btn-block btn-outline-light border-10"
    >
      <ButtonImg src={whatsapp} />
    </a>
  );

  // if (isMobileDevice()) {
  //   ButtonBody.push(WhatsAppButton);
  // }

  return (
    <BackgroundDiv>
      <div className="container-fluid abz">
        <div className="row pl-3">
          <div className="col-sm-8 text-light">
            <div className="row mb-4 pl-3 pt-3">
              <a onClick={handleChange} className="align-middle point">
                <p className={en ? "" : "small"}>EN</p>
                <p>|</p>
                <p className={en ? "small" : ""}>FR</p>
              </a>
            </div>
            <div className="row mb-0">
              <h1 className='display-3 pl-3 mb-0'>
                <u>Alex</u>
              </h1>
            </div>

            <div className="row mb-0">
              <h1 className='display-3 pl-3 mb-0'>{en ? "Strategy" : "Stratégie"}.</h1>
            </div>
            
            <div className="row mb-0">
              <h1 className='display-3 pl-3 mb-0'>{en ? "Engineering" : "Ingénierie"}.</h1>
            </div>

            <div className="row mb-5">
              <h1 className='display-3 pl-3 mb-0'>
                {en ? "Nearly edible baking" : "Presque comestible pain"}.
              </h1>
            </div>

            <div className="row mb-4">
              <div className="col-sm-3 d-flex justify-content-center text-center">
                <a href={"https://www.linkedin.com/in/alexjmyers/"} 
                className = "btn btn-xl btn-block btn-outline-light border-10"
                >
                  <h2 className="mb-0">LinkedIn</h2>
                  <ButtonImg src={linkedin} />
                </a>
              </div>

              <div className="col-sm-3 d-flex justify-content-center text-center">
                <a href={"https://github.com/amyer3"}
                  className = "btn btn-xl btn-block btn-outline-light border-10"
                >
                  <ButtonImg src={github}  className="d-md-none"/>
                  <h2 className="mb-0">Github</h2>
                </a>
              </div>

              <div className="col-sm-3 d-flex justify-content-center text-center">
                <a className = "btn btn-xl btn-block btn-outline-light border-10"
                  href={`mailto:${process.env.REACT_APP_EMAIL}`}
                  area={"ct"}
                >
                  <ButtonImg src={email} />
                  <h2 className="mb-0">{en ? "Contact" : "Contactez"}</h2>
                </a>
              </div>
              <div className="col-sm-3" />
            </div>

            <div className="row mt-4 d-flex justify-content-center text-center">
              <div className="col-md-6 justify-content-center">
                <a href="/p" type="button" className="btn btn-xl btn-block btn-outline-light border-10">
                  <h2 className="mb-0">Photography</h2>
                </a>
              </div>

              <div className="col-sm-3 d-flex justify-content-center text-center">
                <a href="/m" type="button" className="btn btn-xl btn-block btn-outline-light border-10">
                  <h2 className="mb-0">{en ? "Travel" : "Voyages"}</h2>
                </a>
              </div>
              <div className="col-sm-3" />
            </div>
          </div>
          <div className="col-sm-4">
            <CutImage className="h-100" src={isMobileDevice() ? mcut : cut} />
          </div>
        </div>
      </div>
    </BackgroundDiv>
  );
}

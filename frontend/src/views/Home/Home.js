import React, { useState } from "react";
import Globe from '../../components/globe/three-globe'

import cut from "../../assets/svg/cut.svg";
import mcut from "../../assets/svg/mobileCut.svg";

/* import assets */
import github from "../../assets/svg/gh.svg";
import linkedin from "../../assets/svg/li.svg";
import email from "../../assets/svg/pa.svg";
import cam from '../../assets/svg/ca.svg'

// todo buttons: linkedin, contact, photography, github

export default function Home() {
    const initState = window.navigator.language.slice(0, 2) == "en" ? "en" : "fr";
    const [language, changeLang] = useState(initState);

    var handleChange = () => changeLang(language == "en" ? "fr" : "en");

    return (
        <div className='bg-div'>
            <div className="container-fluid">
                    <div className="flex flex-col sm:w-8/12 h-screen">

                        <div className=" mb-4 pl-3 pt-3">
                            <a onClick={handleChange} className="align-middlecursor-pointer">
                                <p className={language == "en" ? "" : "small"}>EN</p>
                                <p>|</p>
                                <p className={language == "en" ? "small" : ""}>FR</p>
                            </a>
                        </div>

                        <div id="text" className="mb-0 md:pt-12 flex justify-center">
                            <h1 className='pl-3 mb-0 text-xl'>{language == "en" ? "Strategy" : "Stratégie"}.</h1>
                        </div>
                    </div>
                    <Globe />

            </div>
        </div>
    );
}

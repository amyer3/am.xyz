import React, { useState } from "react";

import cut from "../../assets/svg/cut.svg";
import mcut from "../../assets/svg/mobileCut.svg";

/* import assets */
import github from "../../assets/svg/gh.svg";
import linkedin from "../../assets/svg/li.svg";
import email from "../../assets/svg/pa.svg";
import cam from '../../assets/svg/ca.svg'

export default function Home() {
    const initState = window.navigator.language.slice(0, 2) == "en" ? "en" : "fr";
    const [language, changeLang] = useState(initState);

    var handleChange = () => changeLang(language == "en" ? "fr" : "en");

    return (
        <div className='bg-div'>
            <div className="container-fluid abz">
                <div className="flex flex-col sm:w-4/12">
                    <img className="h-100 cut-img d-none d-md-block p-0" src={cut} />
                    <img className="cut-img d-block d-md-none p-0" src={mcut} />
                </div>
                <div className="row">
                    <div className="flex flex-col sm:w-8/12 text-light">
                        <div className="row mb-4 pl-3 pt-3">
                            <a onClick={handleChange} className="align-middle point">
                                <p className={language == "en" ? "" : "small"}>EN</p>
                                <p>|</p>
                                <p className={language == "en" ? "small" : ""}>FR</p>
                            </a>
                        </div>
                        <div className="row mb-0">
                            <h1 className='pl-3 mb-0 font-resp'>
                                <u>Alex</u>
                            </h1>
                        </div>

                        <div className="row mb-0">
                            <h1 className='pl-3 mb-0 font-resp'>{language == "en" ? "Strategy" : "Stratégie"}.</h1>
                        </div>

                        <div className="row mb-0">
                            <h1 className='pl-3 mb-0 font-resp'>{language == "en" ? "Engineering" : "Ingénierie"}.</h1>
                        </div>

                        <div className="row mb-5">
                            <h1 className='pl-3 mb-0 font-resp'>
                                {language == "en" ? "Nearly edible baking" : "Presque comestible pain"}.
              </h1>
                        </div>

                        <div className="row mb-4">
                            <div className="flex flex-col w-6/12flex flex-col md:w-3/12 d-flex justify-content-center text-center">
                                <a href={"https://www.linkedin.com/in/alexjmyers/"}
                                    className="btn btn-xl btn-block btn-outline-light border-10"
                                >
                                    <h2 className="mb-0 d-none d-md-block">LinkedIn</h2>
                                    <img className="d-sm-block d-md-none" src={linkedin} />
                                </a>
                            </div>

                            <div className="flex flex-col w-6/12flex flex-col md:w-3/12 d-flex justify-content-center text-center">
                                <a href={"https://github.com/amyer3"}
                                    className="btn btn-xl btn-block btn-outline-light border-10"
                                >
                                    <h2 className="mb-0 d-none d-md-block">Github</h2>
                                    <img className="d-sm-block d-md-none" src={github} className="d-md-none" />

                                </a>
                            </div>

                            <div className="flex flex-col w-6/12flex flex-col md:w-3/12 d-flex justify-content-center text-center m-pad">
                                <a className="btn btn-xl btn-block btn-outline-light border-10"
                                    href={`mailto:${process.env.REACT_APP_EMAIL}`}
                                    area={"ct"}
                                >
                                    <h2 className="mb-0 d-none d-md-block">{language == "en" ? "Contact" : "Contactez"}</h2>
                                    <img className="d-sm-block d-md-none" src={email} />
                                </a>
                            </div>

                            <div className="flex flex-col w-6/12flex flex-col md:w-3/12 d-sm-flex d-md-none justify-content-center text-center m-pad">
                                <a href="/p" className="btn btn-xl btn-block btn-outline-light border-10">
                                    <img className="d-sm-block d-md-none" src={cam} className="d-md-none" />
                                </a>
                            </div>
                        </div>

                        <div className="row mt-4 d-md-flex justify-content-center text-center d-none">
                            <div className="flex flex-col w-6/12justify-content-center">
                                <a href="/photo" className="btn btn-xl btn-block btn-outline-light border-10">
                                    <h2 className="mb-0 d-none d-md-block">Photography</h2>
                                </a>
                            </div>

                            <div className="flex flex-col sm:w-3/12 d-flex justify-content-center text-center d-none d-md-block">
                                <a href="/data" className="btn btn-xl btn-block btn-outline-light border-10">
                                    <h2 className="mb-0 d-none d-md-block">Data</h2>
                                </a>
                            </div>
                            <div className="flex flex-col sm:w-3/12" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

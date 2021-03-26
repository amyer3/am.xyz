import React, { useEffect, useState } from "react";

/** Import Components */
import Globe from '../../components/globe/three-globe'
import Links from '../../components/links/Links'
import Lang_Toggle from '../../components/language-toggle/language-toggle'
import make_globe from "../../components/globe/three-globe";



export default function Home() {
    const initState = window.navigator.language.slice(0, 2) == "en" ? "en" : "fr";
    const [language, changeLang] = useState(initState);
    const [needs_rerender, toggle_render] = useState(false)

    var handleChange = () => changeLang(language == "en" ? "fr" : "en");

    useEffect(() => {
        make_globe()
        toggle_render(!needs_rerender)
    }, [])

    // oxford blue hex 03012C
    return (
        <div className='bg-div'>
            <div className="container-fluid flex">
                    <div className="flex sm:w-6/12 h-screen">

                    <Lang_Toggle />

                    <div id="text" className="mb-0 flex flex-col text-white self-center font-extrabold w-full">
                        <div>
                            <h1 className='pl-3 mb-0 text-5xl'>{language == "en" ? "Strategy" : "Stratégie"}.</h1>
                        </div>
                        
                        <Links />
                    </div>
                    
                </div>
                <div id="globe_container" className="md:w-6/12 md:h-screen md:px-8 flex">
                    <div id="globe_viewbox" className="md:my-auto w-full h-full">
                        <canvas id="globe_canvas" className="w-full h-full">

                        </canvas>

                    </div>
                </div>

            </div>
        </div>
    );
}

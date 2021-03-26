import React from 'react'
import github from "../../assets/svg/gh.svg";
import linkedin from "../../assets/svg/li.svg";
import email from "../../assets/svg/pa.svg";
import cam from '../../assets/svg/ca.svg'
/**
 * @todo
 * buttons:
 * linkedin
 * github
 * photography
 * writing
 * contact
 */

const LINK_DATA = [
     {
        name: "linkedin",
        link_to: "https://www.linkedin.com/in/alexjmyers/",
        text_en: "Linkedin",
        text_fr: "Linkedin",
        icon: ""
    },
    {
        name: "github",
        link_to: "https://github.com/amyer3/",
        text_en: "Github",
        text_fr: "Github",
        icon: ""
    },
    {
        name: "photography",
        link_to: "/photos",
        text_en: "Photos",
        text_fr: "Photos",
        icon: ""
    },
    {
        name: "writing",
        link_to: "/blog",
        text_en: "Writing",
        text_fr: "Writing",
        icon: ""
    },
    {
        name: "contact",
        link_to: "mailto:me@am.xyz",
        text_en: "Contact", 
        text_fr: "Photos",
        icon: ""
    },
    ]
export default function Links(props) {

    
    const Link_Buttons = LINK_DATA.map((v) => {
        return <div className="w-1/5 px-2 z-40">
            <a className="rounded-full border-white border inline-block h-full w-full cursor-pointer hover:border-purple-800 hover:border z-50 relative"
                href={v.link_to}
                key={v.name}
            >
                <p className="inline-block text-center w-full h-full font-extralight text-sm m-auto">
                    {v.text_en}
                </p>

            </a>
            </div>
        

    })

    return (
        <div className="flex flex-row w-full px-3 mt-4">
           {Link_Buttons}
        </div>
    )
}
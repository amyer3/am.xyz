import React, { useEffect, useState } from "react";
import '../style/Home.css'

import PushPin from '../assets/push_pin_black_24dp'
import World_JS from '../assets/world'

/** Import Components */
import SEO from '../components/seo'
import CTA_Button from '../components/CTA_button'

import photo from '../assets/images/IMG_0711.jpg'
import Boarding_Pass from "../components/Boarding_Pass";

function play_on_visible(e, class_to_add) {
    if (typeof document != `undefined`) {
        //check if at least 1/2 of element is visible
        // apply classs_to_add to e.target
    }
}
let placeholder_data = {
    bio:"",
    middle_content: [
        {
            id: "contact",
            header:"You can send me an email.",
            icon: "",
            content: "Always happy to ",
            link: "",
            button_content:"Email me"
        },
        {
            id: "blog",
            header: "I write things, occasionally.",
            icon: "",
            content: "I like to write about where I've been, what I've eaten, and air my petty greviances in written form.",
            link: "",
            button_content: "I wanna see"
        },
        {
            id: "photos",
            header: "I take photos!",
            icon: "",
            content: "They're ok.",
            link: "",
            button_content: ""
        }
    ],
    header_terms: [
        "Alex.",
        "Alex.",
        "Alex.",
        "Alex."
    ],
    places: [
        {
            lat: 48.8566,
            long: 2.3522,
            code: "CDG",
            photo: ""
        },
        {
            lat: 51.5074,
            long: -0.1278,
            code: "LHR",
            photo: ""
        },
        {
            lat: 21.1619,
            long: -86.8515,
            code: "CUN",
            photo: ""
        },
        {
            lat: 40.7128,
            long: -73.935242,
            code: "NYC",
            photo: ""
        },
        {
            lat: 34.0522,
            long: -118.2437,
            code: "LA"
        },
        {
            lat: -37.8136,
            long: 144.9631,
            code: "MEL",
            photo: ""
        },
        {
            lat: -33.8688,
            long: 151.2093,
            code: "SYD",
            photo: ""
        },
        {
            lat: 22.3193,
            long: 114.1694,
            code: "HKG",
            photo: ""
        },
        {
            lat: 41.8781,
            long: -87.6298,
            code: "CHI",
            photo: ""
        },
        {
            lat: 57.0531,
            long: -135.3300,
            code: "SIT",
            photo: ""
        },
        {
            lat: 47.6062,
            long: -122.3321,
            code: "SEA",
            photo: ""
        },
        {
            lat: 36.1699,
            long: -115.1398,
            code: "LAS",
            photo: ""
        },
        {
            lat: 36.1627,
            long: -86.7816,
            code: "BNA",
            photo: ""
        }

    ]

}

const Content_row = (content_array) => {
    var this_row = []
    var return_arr = []
    placeholder_data.middle_content.forEach(function (v, i) {
        if (this_row.length == 2) {
            return_arr.push(
                <div className="flex flex-row w-6/12 mx-auto justify-between py-6">
                    {this_row}
                </div>
            )
            this_row = []
        }
        let this_elem = (
            <div id={v.id} className="md:w-4/12">
                <div className="border-l-2 pl-3 border-black">

                    <p className="font-bold text-sm">{v.header}</p>
                    <p className="text-xs">{v.content}</p>
                    
                </div>
                <CTA_Button text={v.button_content}/>
                

            </div>
        )
        
        if (i == placeholder_data.middle_content.length-1) {
            this_row.push(this_elem)
            return_arr.push(
                <div className="flex flex-row w-6/12 mx-auto justify-between py-6">
                    {this_row}
                </div>
            )
            
        }
        else {
            this_row.push(this_elem)
        }
    })
    return return_arr
}

export default function Home() {

    // oxford blue hex 03012C
    return (
        <div className='w-screen h-screen overflow-scroll snappy-scroll'>
            <SEO title={"Alex."} />

            <div className="fixed bg-black w-screen h-screen md:p-20">
                <div className="flex flex-row h-full">
                    <div className="flex flex-col h-100 w-6/12 relative my-auto">
                        {
                            placeholder_data.header_terms.map((v, i) => {
                                return (
                                    <div className="relative w-full h-28" kry={i}>
                                        <h3 className="text-white font-black text-8xl text-dropin" style={{ "--order": i }}>{v}</h3>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="flex flex-col h-100 w-6/12 bg-green-400 p-4 content-center items-center rounded-3xl relative">
                        <div className="my-auto mx-auto" >
                            <div className="w-full h-full relative" id="map-container">
                                {
                                    placeholder_data.places.map((v, i) => {
                                        return <PushPin className="absolute"
                                            lat={v.lat}
                                            style={{ "--order": i }}
                                            long={v.long}
                                            key={i + 30}
                                            order={i}
                                            code={v.code}
                                            photo={v.photo}
                                        />
                                    })
                                }
                                <World_JS className="my-auto mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-screen h-screen container-fluid inset-y-full absolute gray-gradient">
                <div className="w-full flex flex-row items-center justify-center pb-12 pt-4 relative">
                    
                    <svg viewBox="0 0 500 80"
                        className="w-full text-5xl top-0 font-bold"
                    >
                        <linearGradient id="gr-overlay" x1="0" y1="0" x2="90%" y2="100%">
                            <stop stop-color="#FEAC5E" offset="10%" />
                            <stop stop-color="#C779D0" offset="50%" />
                            <stop stop-color="#4BC0C8" offset="90%" />
                            
                        </linearGradient>
                        <text text-anchor="middle"
                            x="50%"
                            y="50%"
                            dy=".35em"
                            class="gradient-layer"
                            style={{ fill:" url(#gr - overlay);"}}
                        >
                            Hello
    </text>
                    </svg>
                    
                </div>
                <div>
                    <p>{placeholder_data.bio}</p>
                </div>

                <div className="flex flex-col w-full">
                    <Content_row content_array={placeholder_data.middle_content} />
                </div>

            </div>
        </div>
    );
}

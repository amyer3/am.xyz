import React from 'react'
import PushPin from '../assets/push_pin_black_24dp'
import World_JS from '../assets/world'

export default function MapLocations(props) {
    

    return (
        <div className="flex flex-col h-100 w-6/12 bg-green-400 p-4 content-center items-center rounded-3xl relative">
            <div className="my-auto mx-auto" >
                <div className="w-full h-full relative" id="map-container">
                    {
                        props.places.map((v, i) => {
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
    )
}
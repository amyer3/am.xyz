import React from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
} from "react-simple-maps"
import paths from './topo110m.json.js'
import places from './places.json.js'


const wrapperStyles = {
    width: "100%",
    margin: "0 auto",
    textDecoration: 'none',
    backgroundColor: '#78D2FA'
}


export default class Globe extends React.Component {
    render() {
        return (
            <div style={wrapperStyles}>
                <ComposableMap
                    projectionConfig={{
                        scale: 180,
                        rotation: [-11, 0, 0],
                    }}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <ZoomableGroup center={[10, 15]} disablePanning>
                        <Geographies geography={paths}>
                            {(geographies, projection) =>
                                geographies.map((geography, i) =>
                                    geography.id !== "ATA" && (
                                        <Geography key={i} geography={geography} projection={projection} style={
                                            {
                                                default: {
                                                    fill: "#56bd5c",
                                                    stroke: "#39752b",
                                                    strokeWidth: 2,
                                                    outline: "none"
                                                },
                                                hover: {
                                                    fill: "#56bd5c",
                                                    stroke: "#39752b",
                                                    strokeWidth: 2,
                                                    outline: "none"
                                                },
                                                pressed: {
                                                    fill: "#56bd5c",
                                                    stroke: "#39752b",
                                                    strokeWidth: 2,
                                                    outline: "none"
                                                },
                                            }
                                        }/>
                                    ))}
                        </Geographies>
                        <Markers>
                            {places.map((marker, i) => (
                                <Marker
                                    key={i}
                                    marker={marker}
                                    style={
                                        {
                                            default: {
                                                stroke: "#455A64"
                                            },
                                            hover: {
                                                fill: "#56bd5c",
                                                stroke: "#39752b",
                                                strokeWidth: 2,
                                                outline: "none"
                                            }
                                        }
                                    }
                                >
                                    <g transform="translate(-12, -24)">
                                        <path
                                            fill="red"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeMiterlimit="10"
                                            strokeLinejoin="miter"
                                            d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                                        />
                                    </g>

                                </Marker>
                            ))}
                        </Markers>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        )
    }
}
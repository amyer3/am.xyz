import React, {useState} from 'react'
import Pin from '../../assets/svg/pin.svg'
import './PhotoBox.css'
const IMAGE_STATES = {
    LOADING: 1, 
    SUCCESS: 2, 
    ERROR: 3
}

export default function PhotoBox(props) {
    var start_time = new Date()
    const [status, setStatus] = useState(IMAGE_STATES.LOADING)
    
    function handleImageLoaded() {
        var end_time = new Date()
        var time = end_time - start_time
        console.log(`Finished loading ${props.photoSRC} in ${time / 1000}s`)
        window.setTimeout(function ()
           { setStatus(IMAGE_STATES.SUCCESS)},
            Math.random() * 500)
    }
    var handleImageError = () => {}
    
    // backgroundImage: `url(${props.photoSRC})` 
    return (
            
        <div className="photocard" style={{}}>
            <div className="loader" style={{ visibility: status == IMAGE_STATES.LOADING ? "visible" : "hidden" }}>
                <svg className="loading-spinner" xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128">
                    <g>
                        <path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" fill="#000000" />
                        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur={`${Math.random() * 1000}ms`} repeatCount="indefinite">
                        </animateTransform>
                    </g>
                </svg>
            </div>
            <div className={props.name == ("" || null || undefined) ? "d-none" : "geo"}>
                <p style={{ margin: 0 }}>{props.name}</p>
            </div>

            <img
                src={props.photoSRC}
                onLoad={handleImageLoaded}
                onError={handleImageError}
                className="photo"
                alt={props.name || "Photo"}
            />
            
        </div>
        
    )
}
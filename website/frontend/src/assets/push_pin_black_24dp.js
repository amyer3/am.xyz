import React from 'react'
import Boarding_Pass from '../components/Boarding_Pass'

export default function PushPin(props) {
    (size_correction())
    function size_correction() {
        if (typeof document != `undefined` && document.readyState == 'complete') {

            let map_elem = document.getElementById('world')
            let this_pin = document.getElementById(props.code)
            
            var vertical_error = 74 / 391.2 * map_elem.clientHeight
            var HORIZONTAL_ERROR = .03
            console.log(vertical_error)

            var lat = props.lat * Math.PI / 180
            var yy = Math.log(Math.tan((lat / 2) + (Math.PI / 4)));
            var yyy = (map_elem.clientHeight / 2) - (map_elem.clientWidth * yy / (2 * Math.PI)) + (vertical_error - this_pin.clientHeight + 5)
            var x = (map_elem.clientWidth * (180 + props.long) / 360) % map_elem.clientWidth + (map_elem.clientWidth * (1+ HORIZONTAL_ERROR)) - this_pin.clientWidth;
            

            console.log(props.id + " " + x)
            //this_pin.style.top = yyy + "px"
            this_pin.style.setProperty("--top", yyy+"px")
            this_pin.classList.add('fade-in')
        }
    }
    


    function convert_lat_long() {
        var lat = 0
        var long = 0
        lat = ((-1 * props.lat) + 90) / 180
        long = (props.long + 180) / 360

        return [lat, long]
        
    }
    const coords = convert_lat_long()
    
        
    
    return (
        <div
            className="geo-pin"
            style={{ "--lat": props.lat, "--long": props.long, "--x": coords[1], "--y": coords[0], "--order": props.order }}
            id={props.code}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                
            >
                <defs>
                    <linearGradient id="gradient" >
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="darkred" />
                    </linearGradient>
                </defs>
                <g>
                    <rect fill="none" height="24" width="24" />
                </g>
                <g>
                    <g>
                        <path d="M14,4h-4v5c0,1.1-0.35,2.14-1,3h6c-0.63-0.84-1-1.88-1-3V4z" fill="url(#gradient)" />
                        <path d="M19,12c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1s-0.45-1-1-1H7C6.45,2,6,2.45,6,3s0.45,1,1,1c0,0,0,0,0,0 l1,0v5c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19L19,12C19,12,19,12,19,12z M9,12c0.65-0.86,1-1.9,1-3V4h4v5c0,1.12,0.37,2.16,1,3 H9z" />
                    </g>
                </g>
            </svg>
            <Boarding_Pass code={props.code} />
            

        </div>
            
        
        
    )
}
/**
 
 <svg 
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className="geo-pin"
    style={{ "--lat": props.lat, "--long": props.long, "--x": coords[1], "--y": coords[0] }}
    id={props.id}
    
>
 <path d="M34.5,47l6.6,6.6a4.1,4.1,0,0,1,.7,1.1l5.7,17.5L72.2,47.5,54.7,41.8a4.1,4.1,0,0,1-1.1-.7L47,34.5l-.4-.5L41,24.4,24.4,41,34,46.6Z" style="" fill="none"/>
 <path d="M18.6,43.9l12.3,7.2L36.8,57l6.9,21.1a2.7,2.7,0,0,0,1.9,1.8h.7a2.7,2.7,0,0,0,1.9-.8L61.6,65.8,77.9,82.1a3,3,0,0,0,4.2-4.2L65.8,61.6,79.2,48.2a3.1,3.1,0,0,0,.7-2.6,2.7,2.7,0,0,0-1.8-1.9L57,36.8l-5.9-5.9L43.9,18.6a2.6,2.6,0,0,0-2-1.3,2.7,2.7,0,0,0-2.2.8L18.1,39.7a2.7,2.7,0,0,0-.8,2.2A2.6,2.6,0,0,0,18.6,43.9ZM41,24.4,46.6,34l.4.5,6.6,6.6a4.1,4.1,0,0,0,1.1.7l17.5,5.7L47.5,72.2,41.8,54.7a4.1,4.1,0,0,0-.7-1.1L34.5,47l-.5-.4L24.4,41Z"/>
 </svg>



 <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="geo-pin"
                style={{ "--lat": props.lat, "--long": props.long, "--x": coords[1], "--y": coords[0] }}
                id={props.id}
            >
                <g>
                    <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <path
                    fill-rule="even-odd"
                    d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z" />
                </g>
            </svg>


            <svg xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="geo-pin"
            style={{ "--lat": props.lat, "--long": props.long, "--x": coords[1], "--y": coords[0], "--order": props.order}}
            id={props.id}
        >
            <g>
            <rect fill="none" height="24" width="24"/></g><g><g><path d="M14,4h-4v5c0,1.1-0.35,2.14-1,3h6c-0.63-0.84-1-1.88-1-3V4z" opacity=".3"/>
            <path d="M19,12c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1s-0.45-1-1-1H7C6.45,2,6,2.45,6,3s0.45,1,1,1c0,0,0,0,0,0 l1,0v5c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19L19,12C19,12,19,12,19,12z M9,12c0.65-0.86,1-1.9,1-3V4h4v5c0,1.12,0.37,2.16,1,3 H9z"/>
            </g></g></svg>
 */

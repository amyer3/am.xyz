import React from 'react'
import Pin from '../assets/svg/pin.svg'

export default function PhotoBox(props) {
    
    return (
            
        <div className="photocard" style={{ backgroundImage: `url(${props.photoSRC})` }}>
            <div className="geo">
                <p style={{margin:0}}>{props.name || "An Place"}</p>
            </div>
        </div>
        
    )
}
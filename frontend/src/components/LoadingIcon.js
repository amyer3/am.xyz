import React from 'react'

export default function Loading(props) {
    
    return (
        <div className = {props.loading === true ? "d-block" : "d-none"}>
            
        </div>
    )
}
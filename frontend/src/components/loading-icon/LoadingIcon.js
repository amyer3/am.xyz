import React from 'react'

export default function Loading(props) {
    
    return (
        <div className = {props.loading === true ? "block" : "d-none"}>
            
        </div>
    )
}
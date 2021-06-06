import React from 'react'

export default function CTA_Button(props) {
    


    return (
        <div>
            <button
                      className={`chunky-button `}
                      data-acceptable="false"
                    >
                      <span className="back"></span>
                      <span className="shadow"></span>
                      <span className="front text-sm">
                        {props.text || "Button!"}
                      </span>
                    </button>
        </div>
    )
}
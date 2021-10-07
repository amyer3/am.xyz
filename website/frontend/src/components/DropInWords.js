import React from 'react'


function DropInWords(props) {
    

    return (
        <div className="flex flex-col h-100 w-6/12 relative my-auto">
            {
                props.words.map((v, i) => {
                    return (
                        <div className="relative w-full h-28" kry={i}>
                            <h3 className="text-white font-black text-8xl text-dropin" style={{ "--order": i }}>{v}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default DropInWords
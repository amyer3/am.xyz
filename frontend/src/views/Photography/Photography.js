import React, { useState } from "react";
import PhotoBox from '../../components/photo-box/PhotoBox'
import axios from 'axios'

// //Use this to pull all photos from a folder, and make an array from them
// function importAll(r) {return r.keys().map(r);}


//{"success": T/F, "count": N, list:[{/"geo": location of photo/, "loc": complete url to photo}]}

var photoURL = process.env.ENV_STATUS === "production" ? 'https://www.am.xyz/api/i/list' : 'http://localhost:3001/api/i/list'
export default function PhotoDisplay(props) {
    var loading_metrics = []
    const [src_list, update_list] = useState([])
    const [did_load, update_load] = useState(false)

    var PhotoArray = async () => {
        if (did_load) {return}
        try {
            var {data} = await axios.get(photoURL)
            const res = await Promise.resolve(data)
            update_list(res.list.map((v, i) => {return  <PhotoBox photoSRC={v.loc} key={i} />}))
            update_load(true)
            return
        } catch (error) {
            console.log(error)
        }
        
    }
    PhotoArray()

    return (
        <>
            <div className="navbar fixed-top navbar-light bg-white justify-content-center abz p-0">
                <a className=" nav-item nav-link w-100 justify-content-center" href="/">
                    <h4 className="text-black text-center text-xl">Alex</h4>
                </a>
            </div>

            <div className="photogrid">
                {did_load && src_list}
            </div>

        </>
    );
}

/*
Lazy load the photo grid w/ a timeout?
*/

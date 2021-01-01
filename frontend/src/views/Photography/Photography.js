import React from "react";
import PhotoBox from '../../components/photo-box/PhotoBox'
import axios from 'axios'

// //Use this to pull all photos from a folder, and make an array from them
// function importAll(r) {return r.keys().map(r);}

// const images = importAll(require.context("../assets/photos/", false, /\.(png|jpe?g)$/));
// async function getDogs() {
//   const resp = await fetch("https://dog.ceo/api/breeds/image/random");
//   const json = await resp.json();
//   return json.message;
// }

//{"success": T/F, "count": N, list:[{/"geo": location of photo/, "loc": complete url to photo}]}

var photoURL = process.env.ENV_STATUS === "TEST" ? 'http://localhost:3001/api/i/list' : 'https://www.am.xyz/api/i/list'
export default function PhotoDisplay(props) {
    var loading_metrics = []

    function update_loadtimes(time, metric){}

    var PhotoArray = async () => {
        try {
            var {data} = await axios.get(photoURL)
            const res = await Promise.resolve(data)
            console.log(res)
            var arr =  res.list.map((v, i) => {
                    console.log(v)
                return  <PhotoBox photoSRC={v.loc} key={i} />
            })
            return arr
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            <div className="navbar fixed-top navbar-light bg-white justify-content-center abz p-0">
                <a className=" nav-item nav-link w-100 justify-content-center" href="/">
                    <h4 className="text-dark text-center">Alex</h4>
                </a>
            </div>

            <div className="photogrid">
                {PhotoArray()}
            </div>

        </>
    );
}

/*
Lazy load the photo grid w/ a timeout?
*/

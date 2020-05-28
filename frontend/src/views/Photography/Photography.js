import React from "react";
import PhotoBox from '../../components/PhotoBox'

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
    const [loading, toggleLoading] = React.useState(true);
    const [PA, updatePA] = React.useState([]);

    function GetArray() {
        fetch(photoURL)
            .then(resp => resp.json())
            .then(json => json.list.forEach(async function (v, index) {
                var location = await v.loc
                var photo = <PhotoBox photoSRC={location} key={index}/>
                updatePA(PA => [...PA, photo])
            }
        ))
    }

    if (loading === true) {
        GetArray()
        toggleLoading(loading => !loading);
    }

    return (
        <>
            <div className="navbar fixed-top navbar-light bgw justify-content-center abz p-0">
                <a className=" nav-item nav-link w-100 justify-content-center" href="/">
                    <h4 className="text-dark text-center">Alex</h4>
                </a>
            </div>

            <div className="photogrid">
                {PA}
            </div>

        </>
    );
}

/*
Lazy load the photo grid w/ a timeout?
*/

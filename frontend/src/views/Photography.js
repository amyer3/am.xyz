import React from "react";


//Use this to pull all photos from a folder, and make an array from them
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/photos/", false, /\.(png|jpe?g)$/)
);


// TODO add in location popover ?
/*

  border-radius: 50%;
`;


const LocationPop = styled.div`
  border-radius: 50px;
  background: darkgrey;
  color: white;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  padding-bottom: 1%;
  margin: auto;
  text-align: center;
`;
background-image: url(${s => s.imgURL});
*/

let PhotoArray = images.map(imgSRC => <div className="photocard border-10" style={{backgroundImage: 'url('+imgSRC+')'}} />);

export default function PhotoDisplay(props) {
  var isMobileDevice = () =>
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    window.innerWidth <= 768;


  return (
    <React.Suspense fallback={<span>Content Loading</span>}>
      <div className="container">
        {PhotoArray}
      </div>
    </React.Suspense>
  );
}

/*
Lazy load the photo grid w/ a timeout?
*/

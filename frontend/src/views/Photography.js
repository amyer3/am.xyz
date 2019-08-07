import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const widthRule = "(max-width: 768px)";
const notWidthRule = "(min-width: 767px)";

//Use this to pull all photos from a folder, and make an array from them
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/photos/", false, /\.(png|jpe?g)$/)
);

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  margin-bottom: 10%;

  grid-row-gap: 5%;

  @media ${widthRule} {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2%;
    margin-top: 20%;
    margin-bottom: 25%;
  }
`;
const PhotoCard = styled.div`
  width: 100rem;
  height: 100rem;
  max-width: 400px;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.imgURL});

  @media ${widthRule} {
    display: grid;
    max-width: 90vw;
  }
`;

const Header = styled(Link)`
  margin-left: 5%;
  font-size: 12pt;
  text-decoration: none;
  underline: none;
  position: static;
  background: white;
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

let PhotoArray = images.map(imgSRC => <PhotoCard imgURL={imgSRC} />);

export default function PhotoDisplay(props) {
  var isMobileDevice = () =>
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    window.innerWidth <= 768;

  return (
    <React.Suspense fallback={<span>Content Loading</span>}>
      <Header to="/">Back</Header>
      <PhotoGrid>
        {PhotoArray}
      </PhotoGrid>
      
    </React.Suspense>
  );
}

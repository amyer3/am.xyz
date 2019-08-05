import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const widthRule = "(max-width: 768px)";
const notWidthRule = "(min-width: 767px)";

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: repeat();

    @media ${widthRule} {
        display: grid;
    }
`;
const PhotoCard = styled.div``;
const Photo = styled.img``;
const Header = styled.div``;
var PhotoArray = () => {
  var arr = [];
  fetch("x")
    .then(data => {})
    .catch(err => {
      console.log(err);
      arr.push(<div>No photos at the moment.</div>);
    });
  return arr;
};

export default function PhotoDisplay(props) {
  return (
    <Header>
      <React.Suspense fallback={<div>No Photos</div>}>
        <PhotoGrid>
        {PhotoArray()}
        </PhotoGrid>
      </React.Suspense>
    </Header>
  );
}

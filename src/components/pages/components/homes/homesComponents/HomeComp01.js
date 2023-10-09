import React from "react";
import styled from 'styled-components';
import car1 from '../homesImages/car1.jpg';

const Home = styled.div`
   background-image: url(${car1}) 50% 50% !important;
   background-position: center;
   background-repeat: no-repeat;
   height: 100vh;
   width: 100%;
   background-size: cover;
   display: table; 
`;
const Land = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;
const Head = styled.h1`
    font-family: 'Monserrat', sans-serif;
    font-size: 700%;
    color: #fff;
    line-height: .9;
    font-weight: 500;
    @media(max-width: 768px){
      font-size: 350%;
    }
`;
const Head3 = styled.h3`
    font-size: 260%;
    font-weight: 500;
    line-height: 1.2;
    color: #fff;
    @media (max-width: 768px){
          font-size: 150%;
      }
`;
const A = styled.a`
    background-color: #fff;
    color: #36342f;
    font-size: 160%;
    &:hover {
      background-color: #055ffa;
      color: #fff;
    }
    @media (max-width: 768px){
        font-size: 120%;
      }
`;

function HomeComp01() {
  return (
    <>
    <Home id="homecomp1">
      <Land className="landing-text">
        <Head>BOOTSTRAP</Head>
        <Head3>Full screen landing Page</Head3>
        <br />
        <A className="btn btn-default btn-lg" href="/">
          Get Started
        </A>
      </Land>
    </Home>
    </>
  );
}

export default HomeComp01;

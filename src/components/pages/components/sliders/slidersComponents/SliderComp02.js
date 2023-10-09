import React from 'react'
import capi from '../slidersImages/capi.jpeg';
import nac from '../slidersImages/nac.jpeg';
import morr from '../slidersImages/morr.jpeg';
import styled from 'styled-components';

const CarI = styled.div`
    height: 100vh;
	min-height: 300px;
`;
const CarC = styled.div`
    bottom: 330px;
    z-index: 2;
    @media (max-width: 1280px) {
        bottom: 250px;
    }
    @media (max-width: 1024px) {
        bottom: 160px;
    }
    @media (max-width: 992px) {
        bottom: 500px;
    }
    @media (max-width: 768px) {
        bottom: 350px;
    }
    @media (max-width: 576px) {
        bottom: 200px;
    }
`;
const Head = styled.h5`
    font-size: 85px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: 'Moon Dance', cursive;
    @media (max-width: 1280px) {
        font-size: 40px; 
    }
    @media (max-width: 992px) {
        font-size: 50px; 
    }
    @media (max-width: 767px) {
        font-size: 25px; 
    }
`;
const Imag1 = styled.img`
    height: 100vh;
`;
const Imag2 = styled.img`
    height: 70px;
`;
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 18px;
    line-height: 1.9;
    @media (max-width: 767px) {
        font-size: 10px; 
    }
`;
const A = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    padding: 5px 20px;
    display: inline-block;
    color: #fff;
    margin-top: 15px;
    border-radius: 5px;
    @media (max-width: 576px) {
        font-size: 10px; 
        padding: 3px 14px;
    }
`;

const CarInd = styled.div`
   bottom: 65px;
`;
const CarBut = styled.button`
   width: 100px !important;
`;

function SliderComp02() {
  return (
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <CarI className="carousel-item active bg-1">   
      <Imag1 alt="First slide" className="d-block w-100" src={capi} />   
      <CarC className="carousel-caption">
        <Head>The most Beautiful <span className="text-warning">Land</span></Head>
        <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
        <A href="/" className="bg-warning text-white">Learn More</A>
      </CarC> 
    </CarI>
    <CarI className="carousel-item bg-2">  
      <Imag1 alt="Second slide" className="d-block w-100" src={nac} />
      <CarC className="carousel-caption">
        <Head>The pearl of the  <span className="text-warning">Antilles</span></Head>
        <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
        <A href="/" className="bg-warning text-white">Learn More</A>
      </CarC>
    </CarI>
    <CarI className="carousel-item bg-3">   
      <Imag1 alt="Third slide" className="d-block w-100" src={morr} />   
      <CarC className="carousel-caption">
        <Head>A Paradise for <span className="text-warning">Tourism</span></Head>
        <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
        <A href="/" className="bg-warning text-white">Learn More</A>
      </CarC>
    </CarI>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <CarInd className="carousel-indicators">
    <CarBut type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
        <Imag2 className="d-block w-100 img-fluid" src={capi} alt=""/>
    </CarBut>
    <CarBut type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
        <Imag2 className="d-block w-100 img-fluid" src={nac} alt=""/>
    </CarBut>
    <CarBut type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
        <Imag2 className="d-block w-100 img-fluid" src={morr} alt=""/>
    </CarBut>
  </CarInd>
</div>
  );
}

export default SliderComp02;
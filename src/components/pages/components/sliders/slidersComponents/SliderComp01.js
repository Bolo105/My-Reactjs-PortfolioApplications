import React from "react";
import imag1 from '../slidersImages/imag1.jpg'
import imag2 from '../slidersImages/imag2.jpg'
import imag3 from '../slidersImages/imag3.jpg'
import styled from 'styled-components';


const Imag = styled.img`
   height: 120vh;
   width: 100%;
`;
const CarC = styled.div`
    bottom: 380px;
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
        bottom: 250px;
    }
`;
const Head = styled.h5`
    font-size: 70px;
    color: #ddd;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: 'Roboto', sans-serif;
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
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 24px;
    line-height: 1.9;
    color: #f1f1f1;
    @media (max-width: 767px) {
        font-size: 12px; 
    }
`;
const A = styled.a`
  text-transform: uppercase;
  text-decoration: none;
	background: #365385;
	padding: 10px 30px;
	display: inline-block;
	color: #fff;
	margin-top: 15px;
  &:hover {
    color: #fff;
  }
`;


function SliderComp01() {
  return (
    <div id='gymhome'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Imag src={imag1} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Web Development</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. </Par>
             <p className="animated zoomIn"><A href="/">More Info</A></p>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={imag2} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Web design</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. </Par>
             <p className="animated zoomIn"><A href="/">More Info</A></p>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={imag3} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Digital Marketing</Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. </Par>
             <p className="animated zoomIn"><A href="/">More Info</A></p>
          </CarC> 
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default SliderComp01;
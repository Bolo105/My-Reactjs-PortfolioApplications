import React from "react";
import styled from 'styled-components';
import heroBg from '../homesImages/heroBg.jpg';
import device from '../homesImages/device.png';

const Hero = styled.section`
    background-image: linear-gradient(to right, rgba(0,172,217, 0.62), rgba(105,240,174, 0.52)), url(${heroBg});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 8rem;
    padding-bottom: 6rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      background-color: #ffffff;
      width: 100%;
      height: 15%;
      transform: skewY(-2deg);
      transform-origin: bottom right;
      bottom: 0;
      right: 0;
      left: 0;
    }
`;

const Head = styled.h1`
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .11rem;
    font-family: 'Raleway', sans-serif;
    font-size: 2.6rem;
    line-height: 4rem;
    font-weight: 800;
    @media (max-width: 768px) {
      text-align: center;
     }
`;
const Par = styled.p`
    color: #ffffff;
    margin-top: 2rem;
    margin-bottom: 3rem;
    line-height: 1.7rem;
    font-size: 1.2rem;
    @media (max-width: 768px) {
      text-align: center;
     }
`;
const Imag = styled.img`
    position: absolute;
    top: 7rem;
    z-index: 1;
    @media (max-width: 992px) {
      display: none;
     }
`;
const A = styled.a`
    border: 2px solid #ffffff;
    border-radius: 2rem;
    color: #ffffff;
    font-weight: 600;
    text-transform: lowercase;
    font-size: 18px;
    padding: 5px 30px;
    
    margin-right: 15px;
    &:hover {
      background-color: #fff;
      color: #03bad5;
      border: 2px solid #ffff;
    }
`;
const ImagBox = styled.div`
     @media (max-width: 768px) {
      display: none;
     }
`;
const HeroBut = styled.div`
     @media (max-width: 768px) {
        text-align: center;
        padding-bottom: 2rem;
     }
`;

function HomeComp03() {
  return (
    <Hero id="homecomp3">
      <div className="container">
        <div className="row main-hero-content">
          <div className="col-md-6 text">
            <Head>MAKE YOUR LIFE EASIER WITH APPER</Head>
            <Par>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              architecto facere asperiores praesentium cumque voluptatum, quod
              labore quas quo rem quos deserunt earum ipsum inventore,
              doloremque maiores? Recusandae, mollitia quis!
            </Par>
            <HeroBut className="hero-buttons">
              <A href="/" className="btn btn-outline-primary btn-white">
                buy now
              </A>
              <A href="/" className="btn btn-outline-primary btn-white">
                try now
              </A>
            </HeroBut>
          </div>
          <div className="col-md-6">
            <ImagBox className="image-box">
              <Imag src={device} className="img-fluid" alt="" />
            </ImagBox>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HomeComp03;

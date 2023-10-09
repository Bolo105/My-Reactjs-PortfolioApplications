import React from "react";
import { FaTabletAlt, FaDesktop, FaDigitalOcean, FaCamera } from 'react-icons/fa';
import fondo from '../servicesImages/fondo.jpg';
import styled from 'styled-components';

const Cont = styled.div`
   background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${fondo});
   background-size: cover;
   background-position: center center;
   color: #fff !important;
   padding-bottom: 80px;
   margin-top: 90px;
`;
const Serv = styled.div`
    margin: 50px;
    text-align: center;
`;
const Head = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    &:after {
      content: '';
      display: block;
      background: white;
      width: 150px;
      height: 3px;
      margin: 10px auto;
    }
`;
const Icon = styled.div`
    font-size: 40px;
    margin: 25px auto;
    height: 80px;
    width: 80px;
    border: 1px solid white;
    border-radius: 50%;
    padding: 8px;
`;
const Col = styled.div`
    &:hover {
      box-shadow: 5px 7px 9px -3px rgba(255, 255, 255, 0.5);
      cursor: pointer;
    }
`;

function Services01() {
  return (
   <Cont id='servicecomp1' className="pt-2">
    <div className="container">
      <Serv className="services">
        <Head>Our Services</Head>
      </Serv>
      <div className="row">
        <Col className="col-lg-3 col-md-6 col-sm-12 text-center">
          <Icon className="icon">
             <FaDesktop />
          </Icon>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col className="col-lg-3 col-md-6 col-sm-12 text-center">
          <Icon className="icon">
            <FaTabletAlt />
          </Icon>
          <h3>Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col className="col-lg-3 col-md-6 col-sm-12 text-center">
          <Icon className="icon">
            <FaDigitalOcean />
          </Icon>
          <h3>Digital Agency</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col className="col-lg-3 col-md-6 col-sm-12 text-center">
          <Icon className="icon">
            <FaCamera />
          </Icon>
          <h3>Potographer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </div>
    </div>
    </Cont>
  );
}

export default Services01;

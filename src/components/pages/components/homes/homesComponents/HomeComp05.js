import React from "react";
import styled from 'styled-components';
import doctors from '../homesImages/doctors.jpeg';

const Home = styled.section`
    width: 100%;
    height: 90vh;
    background: url(${doctors}) top center;
    background-size: cover;
    margin-bottom: 0px;
    @media (max-width: 1024px) {
       height: 700px;
       background-attachment: fixed;
    }
    @media (max-width: 992px) {
        margin-bottom: 0;
        height: 70vh;
    }
    @media (max-height: 600px) {
        height: 60vh;
    }
`;
const Cont = styled.div`
    position: relative;
    @media (max-width: 992px) {
      padding-bottom: 63px;
    }
`;
const Head = styled.h1`
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    text-transform: uppercase;
    color: #2c4964;
    @media (max-width: 992px) {
      font-size: 28px;
      line-height: 36px;
    }
`;
const Head2 = styled.h2`
    color: #2c4964;
    margin: 10px 0 0 0;
    font-size: 24px;
    @media (max-width: 992px) {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
`;
const A = styled.a`
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 35px;
    margin-top: 30px;
    border-radius: 50px;
    transition: 0.5s;
    color: #fff;
    background: #1977cc;
    &:hover {
      background: #3fbbc0;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
`;

function HomeComp05() {
  return (
    <Home id="homecomp5" className="d-flex align-items-center">
      <Cont className="container">
        <Head>Welcome to <br /> my Hospital</Head>
        <Head2>We are team of Specialized Doctors.<br />
          "Your devotion and care bring healing, comfort and hope."</Head2>
        <A href="/" className="btn-get-started scrollto">Learn More</A>
      </Cont>
    </Home>
  );
}

export default HomeComp05;

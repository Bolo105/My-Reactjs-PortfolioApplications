import React from "react";
import styled from 'styled-components';
import img2 from '../homesImages/img2.jpg';

const Hero = styled.div`
    background-image: url(${img2});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 2;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(21, 20, 51, 0.8);
      z-index: -1;
    }
`;
const A = styled.a`
   padding: 14px 18px;
   border-width: 2px;
   border-radius: 0;
`;

function HomeComp02() {
  return (
    <Hero className="hero vh-100 d-flex align-items-center" id="homecomp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="text-white">Build robust landing pages now</h1>
            <p className="text-white my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              quia sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel
              excepturi ipsa voluptate dicta!
            </p>
            <A href="/" className="btn me-2 btn-primary">
              Get Started
            </A>
            <A href="/" className="btn btn-outline-light">
              My Portfolio
            </A>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HomeComp02;

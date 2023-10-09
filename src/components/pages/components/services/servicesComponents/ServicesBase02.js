import React from "react";
import Brand from '../servicesImages/Brand.jpg';
import Seo from '../servicesImages/Seo.jpg';
import Mark1 from '../servicesImages/Mark1.jpg';
import ServicesComp02 from '../servicesComponents/ServicesComp02';
import styled from 'styled-components';


const Cont = styled.div`
   background: radial-gradient(#e5e5e5, #ffffff, #e5e5e5);
   margin-top: 20px auto;
   padding: 60px 0;
`;
const Par = styled.p`
    font-size: 16px;
    margin-top: 20px;
`;
const ContF = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

function ServicesBase02() {
  return (
  <Cont id='servicecomp2'>
    <div className="container mt-5">
      <h1 className="text-center">Our Services</h1>
      <Par className="text-center parr-heading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Par>
      <ContF className="Container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <ServicesComp02 imgsrc={Brand} title="Branding" text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua' />
          </div>
          <div className="col-md-4">
            <ServicesComp02 imgsrc={Seo} title="SEO" text=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
          </div>
          <div className="col-md-4">
            <ServicesComp02 imgsrc={Mark1} title="Digital Marketing" text=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
          </div>
        </div>
      </ContF>
    </div>
 </Cont>
  );
}

export default ServicesBase02;

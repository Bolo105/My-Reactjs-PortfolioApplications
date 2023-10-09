import React from "react";
import styled from "styled-components";
import PriceComp03 from "./PriceComp03";

const Sec = styled.section`
    background-color: #eff5f7;
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

function PriceBase03() {
  return (
    <Sec id='pricecopmp3'>
      <div className="container justify-content-center">
        <div className="row justify-content-md-center py-5">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="section-title text-center title-ex1">
              <h2>Pricing Tables</h2>
              <p>
                Inventore cillum soluta inceptos eos platea, soluta className
                laoreet repellendus imperdiet optio.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center g-4">
          <div className="col-md-12 col-lg-4 my-4">
            <PriceComp03 
            type='STANDARD' price='24.99' elementor='1 Page with Elementor' customize='Design Customize' figma='No Figma Design' widget='No basic Widget customize' responsive='Responsive Design'
            />
          </div>
          <div className="col-md-12 col-lg-4 my-4">
            <PriceComp03 
            type='BUSINESS' price='34.99' elementor='2 Page with Elementor' customize='Design Customize' figma='Figma Design' widget='No basic Widget customize' responsive='Responsive Design'
            />
          </div>
          <div className="col-md-12 col-lg-4 my-4">
            <PriceComp03 
            type='PREMIUM' price='44.99' elementor='3 Page with Elementor' customize='Design Customize' figma='Figma Design' widget='Basic Widget customize' responsive='Responsive Design'
            />
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default PriceBase03;

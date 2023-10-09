import React from "react";
import styled from 'styled-components';
import PriceComp02 from "./PriceComp02";

const PriA = styled.div`
  padding: 3% 0;
	text-align: center;
  margin-top: 70px;
`;

function PriceBase02() {
  return (
    <PriA id='pricecomp2' className="pricing-area">
      <div className="container">
        <div className="row justify-content-md-center">
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
        <div className="row">
          <div className="col-lg-4">
             <PriceComp02 
             type='Standard' price='19' space='50 GB Disk Space' email='50 Email Accounts' band='50 Monthly Bandwidth' domains='50 Domains'
             />
          </div>
          <div className="col-lg-4">
             <PriceComp02 
             type='Business' price='39' space='70 GB Disk Space' email='70 Email Accounts' band='70 Monthly Bandwidth' domains='70 Domains'
             />
          </div>
          <div className="col-lg-4">
             <PriceComp02 
             type='Premium' price='59' space='90 GB Disk Space' email='90 Email Accounts' band='90 Monthly Bandwidth' domains='90 Domains'
             />
          </div>
        </div>
      </div>
    </PriA>
  );
}

export default PriceBase02;

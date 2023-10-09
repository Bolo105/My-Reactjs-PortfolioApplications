import React from 'react'
import styled from 'styled-components';

const PriT = styled.section`
  background-color: #eee;
  font-family: 'Montserrat', sans-serif;
  padding: 50px 0;
`;
const BlockH = styled.div`
  padding-top: 50px;
  margin-bottom: 40px;
  text-align: center; 
`;
const BlockH2 = styled.h2`
  color: #3b99e0;
`;
const Par = styled.p`
  text-align: center;
  max-width: 420px;
  margin: auto;
  opacity: 0.7; 
`;
const Heading = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
`;
const Item = styled.div`
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  border-top: 2px solid #5ea4f3;
  padding: 30px;
  overflow: hidden;
  position: relative; 
`;
const But = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin: auto;
  font-weight: 600;
  padding: 5px 55px;  
`;
const Rib = styled.div`
  width: 160px;
  height: 32px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  box-shadow: 0px 2px 3px rgba(136, 136, 136, 0.25);
  background: #4dbe3b;
  transform: rotate(45deg);
  position: absolute;
  right: -42px;
  top: 20px;
  padding-top: 7px; 
`;
const ParP = styled.p`
  text-align: center;
  margin-top: 20px;
  opacity: 0.7; 
`;
const Feat = styled.span`
  font-weight: 600; 
`;
const FeatS = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 5px; 
`;
const FeatH4 = styled.h4`
  margin: 15px 0;
  font-size: 45px;
  text-align: center;
  color: #2288f9; 
`;

function Price01() {
  return (
    
  <PriT id='pricecomp1' className="pricing-table">
   <div className="container">
      <BlockH className="block-heading">
         <BlockH2>Pricing Table</BlockH2>
         <Par>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</Par>
      </BlockH>
      <div className="row justify-content-between">
         <div className="col-md-12 col-lg-4 my-2">
            <Item className="item">
               <Heading className="heading">
                  <h3>BASIC</h3>
               </Heading>
               <ParP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ParP>
               <div className="features">
                  <FeatS><Feat className="feature">Full Support</Feat> : <span className="value">No</span></FeatS>
                  <FeatS><Feat className="feature">Duration</Feat> : <span className="value">30 Days</span></FeatS>
                  <FeatS><Feat className="feature">Storage</Feat> : <span className="value">10GB</span></FeatS>
               </div>
               <div className="price">
                  <FeatH4>$25</FeatH4>
               </div>
               <But className="btn btn-outline-primary" type="submit">BUY NOW</But>
            </Item>
         </div>
         <div className="col-md-12 col-lg-4 my-2">
            <Item className="item">
               <Rib className="ribbon">Best Value</Rib>
               <Heading className="heading">
                  <h3>PRO</h3>
               </Heading>
               <ParP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ParP>
               <div className="features">
                  <FeatS><Feat className="feature">Full Support</Feat> : <span className="value">Yes</span></FeatS>
                  <FeatS><Feat className="feature">Duration</Feat> : <span className="value">60 Days</span></FeatS>
                  <FeatS><Feat className="feature">Storage</Feat> : <span className="value">50GB</span></FeatS>
               </div>
               <div className="price">
                  <FeatH4>$50</FeatH4>
               </div>
               <But className="btn btn-primary" type="submit">BUY NOW</But>
            </Item>
         </div>
         <div className="col-md-12 col-lg-4 my-2">
            <Item className="item">
               <Heading className="heading">
                  <h3>PREMIUM</h3>
               </Heading>
               <ParP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ParP>
               <div className="features">
                  <FeatS><Feat className="feature">Full Support</Feat> : <span className="value">Yes</span></FeatS>
                  <FeatS><Feat className="feature">Duration</Feat> : <span className="value">120 Days</span></FeatS>
                  <FeatS><Feat className="feature">Storage</Feat> : <span className="value">150GB</span></FeatS>
               </div>
               <div className="price">
                  <FeatH4>$150</FeatH4>
               </div>
               <But className="btn btn-outline-primary" type="submit">BUY NOW</But>
            </Item>
         </div>
      </div>
   </div>
</PriT>
  
  );
}

export default Price01;
import React from "react";
import TestiComp02 from "./TestiComp02";
import styled from "styled-components";

const TestiClean = styled.div`
   color:#313437;
   background-color:#eef4f7;
   margin-top: 70px;
   margin-bottom: -20px;
`; 
const Par = styled.p`
   color:#7d8285;
   margin-bottom:0;
`; 
const Head = styled.h2`
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
  @media (max-width:767px) {
      margin-bottom:25px;
      padding-top:25px;
      font-size:24px;
  }
`;
const Int = styled.div`
  font-size:16px;
  max-width:500px;
  margin:0 auto;
`; 
const Peo = styled.p`
  padding:50px 0 20px;
`; 
const Item = styled.p`
  margin-bottom:32px;
`; 


function TestiBase02() {
  return (
    <TestiClean id='testicomp2' className="testimonials-clean">
      <div className="container">
        <Int className="intro">
          <Head className="text-center">Testimonials </Head>
          <Par className="text-center">
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </Par>
        </Int>
        <Peo className="row people">
          <Item className="col-md-12 col-lg-4 item">
            <TestiComp02 
            desc='Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.' imagen='lebron' name='Lebron James' job='Warehouse Worker'
            />
          </Item>
          <Item className="col-md-12 col-lg-4 item">
            <TestiComp02 
            desc='Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.' imagen='djokovic' name='Novak Djokovic' job='Cleaning Staff'
            />
          </Item>
          <Item className="col-md-12 col-lg-4 item">
            <TestiComp02 
            desc='Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.' imagen='messi3' name='Leo Messi' job='Security Guard'
            />
          </Item>
        </Peo>
      </div>
    </TestiClean>
  );
}

export default TestiBase02;

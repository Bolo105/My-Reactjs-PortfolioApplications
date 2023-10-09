import React from 'react'
import TestiComp03 from './TestiComp03';
import styled from "styled-components";

const Wrapp = styled.div`
  margin: 30px;
  padding: 0;
  height: 70%;
  width: 100%;
  font-family: 'Cormorant', serif;
  background: #262626;
`;
const Cont = styled.div`
  margin-top: 0px !important;
`;
const HeadD = styled.h2`
    color: white;
	font-size: 28px;
	font-weight: 700;
`;
const TestP = styled.div`
  position: relative;
	top: 24px;
`;
const Head = styled.h3`
  color: orange;
	font-size: 14px;font-weight: 500;
	text-transform: uppercase;
`;

function TestiBase03() {
  return (
    <Wrapp id='testicomp3' className='wrapp pb-3'>
      <Cont className="container py-5  justify-content-center">
      <TestP className="row d-flex justify-content-center testimonial-pos">
				<div className="col-md-12 pt-4 d-flex justify-content-center">
					<Head>Testimonials</Head>
				</div>
				<div className="col-md-12 d-flex justify-content-center">
					<HeadD>What Others Say About Us</HeadD>
				</div>
			</TestP>
        <div className=" row justify-content-center ">
            <div className="col-lg-4 col-12 mt-5 ">
                <TestiComp03 
                ima1='quoteLeft' ima2='team10' text='Growth of data is exponential and our ability
                to get true insight that matter was challenging with classic, traditional Bi
                tools. Vertix allow us to unserstand what is driving exceptions so we can take
                action Growth of data our ability to get true insight that matter was
                challenging with classic.' name='Jhon Doe' job='Bank Teller'
                />
            </div>
            <div className="col-lg-4 col-12 mt-5 ">
                <TestiComp03 
                ima1='quoteLeft' ima2='team11' text='Growth of data is exponential and our ability
                to get true insight that matter was challenging with classic, traditional Bi
                tools. Vertix allow us to unserstand what is driving exceptions so we can take
                action Growth of data our ability to get true insight that matter was
                challenging with classic.' name='Kelvin Smit' job='Designer'
                />
            </div>
            <div className="col-lg-4 col-12 mt-5 ">
                <TestiComp03 
                ima1='quoteLeft' ima2='team12' text='Growth of data is exponential and our ability
                to get true insight that matter was challenging with classic, traditional Bi
                tools. Vertix allow us to unserstand what is driving exceptions so we can take
                action Growth of data our ability to get true insight that matter was
                challenging with classic.' name='David Carter' job='Journalist'
                />
            </div>
        </div>
    </Cont>
  </Wrapp>
  )
}

export default TestiBase03;

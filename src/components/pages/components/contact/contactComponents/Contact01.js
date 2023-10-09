import React from 'react'
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import matrix from '../contactImages/matrix.jpg';
import styled from "styled-components";

const Wrap = styled.div`
      background-image: url(${matrix});
      background-size: cover;
`;
const Head = styled.h1`
      font-weight: 700;
`;

function Contact01() {
  return (
  <Wrap id='contactcomp1' className="wrap py-5">
    <div className="container text-light">
      <div className="row">
        <div className="col-md-12">
          <Head className = "text-uppercase text-center pt-4">Contact Us</Head>
          <p className = "lead text-center pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-md-4">
          <BsGeoAlt size='40px' color='white'/>
          <h3>Location</h3>
          <p>Louisville, Kentucky, USA</p>
          <BsTelephone size='40px' color='white'/>
          <h3>Call Us</h3>
          <p>+1 123 456 7890</p>
          <BsEnvelope size='40px' color='white'/>
          <h3>E-mail</h3>
          <p>mybestmail@gmail.com</p>
        </div>
        <div className="col-md-8">
          <div className="contactform">
            <div className="row">
              <div className="col-md-8">
                <span id = "lblresponse" className = "tab-content"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="tbname" id="tbname" className = "form-control my-2" placeholder = "name" />
              </div>
              <br />
              <div className="col-md-6">
                <input type="text" name="tbe-mail" id="tbe-mail" className = "form-control my-2" placeholder = "e-mail" />
              </div>
              <br />
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" name="tbsubject" id="tbsubject" className = "form-control my-2" placeholder = "subject" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea name="tbmessage" rows = "10" cols="20" id = "tbmessage" className = "form-control" placeholder = "message" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center pt-2">
                <input type="submit" name="btnmessage" value="send message" id = "btnmessage" className = "btn btn-md btn-submit btn-outline-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrap>
  )
}

export default Contact01;

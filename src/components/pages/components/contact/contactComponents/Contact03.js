import React from "react";
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedin, FaYoutube,
  FaMapMarkerAlt, 
  FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import styled from "styled-components";

const Wrap = styled.div`
     font-family: monospace;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background-color: #fffcfc;
     color: rgb(255, 245, 245);
`;
const Header = styled.div`
     justify-content: center;
`;
const Head = styled.h2`
     padding-top: 5px;
     padding-bottom: 5px;
     text-align: center;
     font-size: 45px;
     border-bottom: 2px solid #fff;
`;
const Head2 = styled.h2`
     text-align: center;
`;
const Par = styled.p`
     text-align: center;
`;
const Cont = styled.div`
     background-color: #debebe;
     width: 80%;
     margin-top: 50px;
`;
const Btn = styled.button`
     width: 50%;
     color: #fff;
     letter-spacing: 3px;
     background: transparent;
     transition: all 0.5s ease-in-out;
     &:hover {
      transform: scale(1.05);
      background: info;
     }
`;
const Led = styled.li`
   color: #fff;
   line-height: 20px;
   font-size: 18px;
`;

const Hr = styled.hr`
     width: 100%;
`;
const A = styled.a`
     color: #fff;
     font-family: monospace;
     float: left;
     padding-left: 23px;
     padding-right: 15px;
     padding-bottom: 12px;
     font-size: 22px;
     transform: all 0.5s ease-in-out;
     &:hover {
       color: #999;
     }
`;

function Contact03() {
  return (
    <Wrap className="wrap pb-5">
      <br />
      <br />
      <Cont className="container">
        <Header className="row">
           <Head className="heading">Contact Us</Head>
           <Head2 className="pt-3">We are happy to help...</Head2>
           <Par>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
           </Par>
        </Header>
        <div className="row">
          <div className="col-md-6">
            <form>
              <br />
              <input
                type="text"
                name="text"
                required=""
                placeholder="your name"
                className="form-control"
              />
              <br />
              <input
                type="email"
                name="email"
                required=""
                placeholder="your email"
                className="form-control"
              />
              <br />
              <textarea
                rows="6"
                placeholder="Message"
                className="form-control"
                required=""
              ></textarea>
              <br />
              <center>
                <Btn style={{backgroundColor: 'info'}}className="bt btn-info">Submit</Btn>
              </center>
              <br />
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 py-4">
            <ul className="list-unstyled">
              <Led className = "my-3"><FaMapMarkerAlt />&nbsp; 5555 Jhon Smith Road Lv, USA</Led>
              <Led className = "my-3"><FaPhoneAlt />&nbsp; +1 888 888 8888</Led>
              <Led className = "my-3"><FaEnvelope />&nbsp; myemail@gmail.com</Led>
            </ul>
            <Hr />
            <div className="media">
              <ul className="list-unstyled">
                <li>
                  <A href="/">
                    <FaFacebookF />
                  </A>
                </li>
                <li>
                  <A href="/">
                    <FaTwitter />
                  </A>
                </li>
                <li>
                  <A href="/">
                    <FaInstagramSquare />
                  </A>
                </li>
                <li>
                  <A href="/">
                    <FaLinkedin />
                  </A>
                </li>
                <li>
                  <A href="/">
                    <FaYoutube />
                  </A>
                </li>
              </ul>
            </div>
            <Hr />
            <p>& copy Web Design by almostDone</p>
            <Hr />
          </div>
        </div>
      </Cont>
    </Wrap>
  );
}

export default Contact03;

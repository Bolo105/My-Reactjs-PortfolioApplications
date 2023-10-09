import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsGeoAlt, BsTelephone, BsClock } from "react-icons/bs";
import styled from "styled-components";

const Foot1 = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #1f1f24;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 70px;
`;
const Use = styled.div`
  margin-left: 12px;
`;
const Head = styled.h4`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 5px;
  color: #fff;
`;
const Links = styled.div`
  margin-bottom: 30px;
`;
const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 10px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;
const Copy = styled.div`
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
const Cre = styled.div`
    padding-top: 4px;
    text-align: center;
    font-size: 13px;    
`;
const A1 = styled.a`
    color: red;
    font-size: 14px;
    text-decoration: none;
    font-family: 'Kaushan Script', cursive;
    font-weight: bold;
`;

function Footer01() {
  return (
    <Foot1 id="footercomp1" className="footer1">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 d-flex">
            <BsGeoAlt size="24px" />
            <Use className="useful">
              <Head>Address</Head>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US
                <br />
              </p>
            </Use>
          </div>
          <Links className="col-lg-3 col-md-6 footer-links d-flex">
            <BsTelephone size="24px" />
            <Use className="useful">
              <Head>Reservations</Head>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </Use>
          </Links>
          <Links className="col-lg-3 col-md-6 footer-links d-flex">
            <BsClock size="24px" />
            <Use className="useful">
              <Head>Opening Hours</Head>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM
                <br />
                Sunday: Closed
              </p>
            </Use>
          </Links>
          <Links className="col-lg-3 col-md-6 footer-links">
            <Head>Follow Us</Head>
            <div className="social-links d-flex">
              <A href="#twi" className="twitter">
                <FaTwitter />
              </A>
              <A href="#face" className="facebook">
                <FaFacebookF />
              </A>
              <A href="#ins" className="instagram">
                <FaInstagram />
              </A>
              <A href="#link" className="linkedin">
                <FaLinkedinIn />
              </A>
            </div>
          </Links>
        </div>
      </div>
      <div className="container">
        <Copy className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>almostDone</span>
          </strong>
          . All Rights Reserved
        </Copy>
        <Cre className="credits">
          Designed by <A1 href="#boots">almostDone</A1>
        </Cre>
      </div>
    </Foot1>
  );
}

export default Footer01;

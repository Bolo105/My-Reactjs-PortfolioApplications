import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styled from 'styled-components';

const Foot3 = styled.footer`
    font-family: "Bai Jamjuree", sans-serif;
    color: #636383;
    line-height: 1.7;
    background-color: #303050;
    padding-top: 80px;
    margin-top: 70px;
`;
const FootT = styled.div`
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255, 0.1);
`;
const A = styled.a`
    text-decoration: none;
    color: rgba(255,255,255, 0.7);
    transition: all .4s cubic-bezier(.165, .84, .44, 1);
    &:hover {
      color: #42e73c;
    }
`;
const A1 = styled.a`
    font-family: 'Kaushan Script', cursive;
    transition: all 0.4s ease;
    text-decoration: none;
    color: #00ff8c;
    font-weight: bold;
    &:hover {
        color: #42e73c;
     }
`;
const A2 = styled.a`
    font-family: 'Kaushan Script', cursive;
    transition: all 0.4s ease;
    text-decoration: none;
    color: #00ff8c;
    font-weight: bold;
    &:hover {
        color: #42e73c;
     }
`;
const Head = styled.h4`
    color: white;
    margin-bottom: 24px;
`;
const Par = styled.p`
    color: rgba(255,255,255, 0.7);
`;
const Li = styled.p`
    color: rgba(255,255,255, 0.7);
    margin-top: 6px;
    
`;
const Ul = styled.ul`
    list-style: none;
    text-decoration: none;
    text-align: left;
    padding: 0;
`;
const SocI = styled.div`
  width: 36px;
  height: 36px;
  background-color: #00ff8c;
  color: #000;
  border: 2px solid #00ff8c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  &:hover {
    background-color: #42e73c;
    border: 2px solid #42e73c;
  }
`;
const FootB = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

function Footer03() {
  return (
    <Foot3 id='footercomp3' className='footer3'>
            <FootT className="footer-top">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-md-4">
                            <Head><A1 href="#har" className="">almostDone</A1></Head>
                            <Par>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam accusantium vero sunt!</Par>
                            <Ul className="navbar-nav flex-row">
                                <Li className="nav-item">
                                    <SocI className="social-icon" href="#dri">
                                        <FaTwitter />
                                    </SocI>
                                </Li>
                                <Li className="nav-item">
                                    <SocI className="social-icon" href="#git">
                                        <FaFacebookF />
                                    </SocI>
                                </Li>
                                <Li className="nav-item">
                                    <SocI className="social-icon" href="#ins">
                                        <FaInstagram />
                                    </SocI>
                                </Li>
                                <Li className="nav-item">
                                    <SocI className="social-icon" href="#you">
                                        <FaLinkedinIn />
                                    </SocI>
                                </Li>
                            </Ul>
                        </div>
                        <div className="col-md-3 ms-auto">
                            <Head>Quick Links</Head>
                            <Ul>
                                <Li><A href="#services">Services</A></Li>
                                <Li><A href="#blog">Blog</A></Li>
                                <Li><A href="#contact">Contact</A></Li>
                            </Ul>
                        </div>
                        <div className="col-md-3">
                            <Head>Contact</Head>
                            <Ul>
                                <Li>Email: mymail@thebest.com</Li>
                                <Li>Phone: (+123-456-789)</Li>
                                <Li>Address: 5691 Smith Road, NY, US</Li>
                            </Ul>
                        </div>
                    </div>
                </div>
            </FootT>
            <FootB className="footer-bottom3">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <Par className="mb-0">Copyright By © almostDone - 2023</Par>
                        </div>
                        <div className="col-auto">
                            <Par className="mb-0">Template designed by <A2 href="#sat">almostDone</A2></Par>
                        </div>
                    </div>
                </div>
            </FootB>
        </Foot3>
    
  )
}

export default Footer03;
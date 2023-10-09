import React from "react";
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import styled from "styled-components";

const Mem = styled.div`
    position: relative;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    padding: 30px;
    border-radius: 5px;
    background: #fff;
    transition: 0.5s;
    &:hover {
      transform: translateY(-10px);
    }
`;
const Pic = styled.div`
    overflow: hidden;
    width: 180px;
    border-radius: 50%;
`;
const Imag = styled.img`
    transition: ease-in-out 0.3s;
`;
const MemI = styled.div`
    padding-left: 30px;
`;
const Head = styled.h4`
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #37517e;
`;
const Span = styled.span`
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 1px;
    background: #cbd6e9;
    bottom: 0;
    left: 0;
  }
`;
const Par = styled.p`
    margin: 10px 0 0 0;
    font-size: 14px;
`;
const Soc = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const A = styled.a`
    transition: ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 32px;
    height: 32px;
    background: #eff2f8;
    margin: 0 5px;
    &:hover {
      background: #47b2e4;
    }
`;

function TeamComp01({imagen, name, profesion, text}) {
  return (
    <Mem
      className="member d-flex align-items-start"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <Pic className="pic">
        <Imag
          src={require(`../teamImages/${imagen}.jpg`)}
          className="img-fluid"
          alt="member"
        />
      </Pic>
      <MemI className="member-info">
        <Head>{name}</Head>
        <Span>{profesion}</Span>
        <Par>{text}</Par>
        <Soc className="social">
          <A href="#team">
            <FaTwitter color='#37517e;' size='16px'/>
          </A>
          <A href="#team">
            <FaFacebookF color='#37517e;' size='16px'/>
          </A>
          <A href="#team">
            <FaInstagramSquare color='#37517e;' size='16px'/>
          </A>
          <A href="#team">
            <FaLinkedin color='#37517e;' size='16px'/>
          </A>
        </Soc>
      </MemI>
    </Mem>
  );
}

export default TeamComp01;

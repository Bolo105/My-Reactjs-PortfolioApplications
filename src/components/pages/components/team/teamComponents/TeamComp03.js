import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import styled from 'styled-components';

const Mem = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  &:hover .social {
    opacity: 1;
    bottom: 15px;
  }
`;
const MemIm = styled.div`
  position: relative;
  overflow: hidden;
`;
const Soc = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
  opacity: 0;
  transition: ease-in-out 0.3s;
  text-align: center;
`;
const A = styled.a`
  transition: color 0.3s;
  color: #151515;
  margin: 0 3px;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.8);
  transition: ease-in-out 0.3s;
  color: #484848;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #151515;
    background: #0531b3;
  }
`;
const MemI = styled.div`
  padding: 25px 15px;
`;
const Head = styled.h4`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
  color: #151515;
`;
const Span = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #aaaaaa;
`;
const Imag = styled.img`
  height: 330px;
  width: 350px;
`;


function TeamComp03({imagen, name, job}) {
  return (
    <Mem className="member" data-aos="fade-up" data-aos-delay="100">
      <MemIm className="member-img">
        <Imag src={require(`../teamImages/${imagen}.jpg`)} className="img-fluid" alt="" />
        <Soc className="social">
          <A href="/">
             <FaTwitter size='18px' line-height='0' />
          </A>
          <A href="/">
             <FaFacebookF size='18px' line-height='0' />
          </A>
          <A href="/">
             <FaInstagramSquare size='18px' line-height='0' />
          </A>
          <A href="/">
             <FaLinkedin size='18px' line-height='0' />
          </A>
        </Soc>
      </MemIm>
      <MemI className="member-info">
        <Head>{name}</Head>
        <Span>{job}</Span>
      </MemI>
    </Mem>
  );
}

export default TeamComp03;
import React from "react";
import styled from "styled-components";
import { RiArrowRightCircleLine } from 'react-icons/ri';
import bg from '../homesImages/bg.jpg';

const Header = styled.div`
  position: relative;
  padding: 90px 0;
  margin-top: 90px;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background: #fafafa;
`;
const Cont = styled.div`
  width: 100%;
  text-align: left;
`;
const Head = styled.h2`
  font-family: 'Quicksand', sans-serif;
  color: #666;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Span = styled.span`
  color: #4f84c4;
`;
const Ul = styled.ul`
  margin-left: -30px;
  margin-bottom: 30px;
  
`;
const Li = styled.li`
  font-size: 22px;
  list-style: none;
`;
const A = styled.a`
    font-size: 22px;
    padding: 7px 20px;
    border: 2px solid #4f84c4;
    color: #4f84c4;
    &:hover {
        color: #fff;
        background: #4f84c4;
    }
`;
const HeadImg = styled.div`
    position: relative;
    overflow: hidden;
    text-align: right;
`;
const Imag = styled.img`
    width: 100%;
    height: auto;
`;
const Icon = styled.i`
    margin-right: 15px;
`;

function HomeComp04() {
  return (
    <Header id="homecomp4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <Cont className="header-content">
              <Head>
                <Span>Watch</Span> is the best<Span> Landing Page</Span> to
                shocause your product
              </Head>
              <Ul className="fa-ul">
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#4f84c4" size='26px'/>
                  </Icon>
                  Android and IOS Support
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#4f84c4" size='26px'/>
                  </Icon>
                  GPS & Health Tracker
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#4f84c4" size='26px'/>
                  </Icon>
                  Read & Replay to Message
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#4f84c4" size='26px'/>
                  </Icon>
                  Compatible with all Devices
                </Li>
              </Ul>
              <A className="btn" href="/">
                Buy Now
              </A>
            </Cont>
          </div>
          <div className="col-md-5">
            <HeadImg className="header-img">
              <Imag src={bg} alt="Product" />
            </HeadImg>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HomeComp04;

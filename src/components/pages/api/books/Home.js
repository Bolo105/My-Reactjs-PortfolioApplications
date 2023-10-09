import React from 'react'
import librohead from './images/librohead.png'
import bghome from './images/bghome.jpg'
import styled from 'styled-components'

const Main = styled.section`
  position: relative;
  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bghome});
  background-attachment: fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 400px 0px 200px;
`;
const Head1 = styled.h1`
  color: #4AC4F3;
`;
const Btn = styled.a`
  background-color: #4AC4F3;
  border-color: #4AC4F3;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #18b5f3;
    border-color: #18b5f3;
  }
`;
const HeadImg = styled.div`
    position: relative;
    overflow: hidden;
    text-align: right;
    z-index: 1;
`;
const Imag = styled.img`
    width: 110%;
    height: auto;
    padding-left: 80px;
    z-index: 1;
`;

export const Home = () => {
  return (

        <Main id='home' className="container-fluid pt-5 hero-header mb-5">
          <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-7 align-self-center text-center text-lg-start mb-lg-5">
                    <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">Google API Books</div>
                    <Head1 className="display-4 mb-4 animated slideInRight fw-bold">Explore our Google API  <br />and find what you want...</Head1>
                    <p className="text-white mb-4 animated slideInRight">Tempor rebum no at dolore lorem clita rebum rebum ipsum
                        rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit</p>
                    <Btn href="/" className="btn btn-light py-sm-3 px-sm-5 me-3 animated slideInRight">Read More</Btn>
                </div>
                <div className="col-md-5">
                   <HeadImg className="header-img">
                      <Imag src={librohead} alt="Product" />
                   </HeadImg>
                </div>
            </div>
          </div>
        </Main>
   
  )
}
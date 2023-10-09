import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { galleryApps } from '../../data/Data';

const Sec = styled.section`
  background-color: #f5fdff;
  padding: 110px 0px;
`;
const Box = styled.div`
  box-shadow: 0 5px 25px -2px rgb(0 0 0 / 6%);
  background-color: #fff;
  padding: 30px 20px;
  transition: 0.5s;
  text-align: center;
  height: 300px;
  &:hover {
    background-color: #d0f7f3;
    border-radius: 5px;
    a {
      color: #000 !important;
    }
  }
`;
const Img = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
  position: relative;
`;
const Im = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const A = styled.a`
  font-weight: 500;
  text-decoration: none;
  display: block;
  color: #010101;
  font-size: 20px;
  margin: 20px 0;
  line-height: 30px;
  cursor: pointer;
`;
const Spa = styled.span`
  background-color: #f8f8f8;
  padding: 5px 20px;
  font-weight: 500;
  font-size: 15px;
  color: #000;
  border-radius: 5px;
`;
const HeadH2 = styled.h2`
   font-size: 14px;
   font-weight: 500;
   padding: 0;
   line-height: 1px;
   margin: 0 0 5px 0;
   letter-spacing: 2px;
   color: #aaaaaa;
   font-family: "Poppins", sans-serif;
   &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #1acc8d;
    margin: 4px 10px;
   }
`;
const SecTitle = styled.div`
   padding-bottom: 30px;
   margin: 0;
`;
const ParTitle = styled.p`
   margin: 0;
   padding: 0;
   font-size: 30px;
   font-weight: bold !important;
   text-transform: uppercase;
   font-family: "Poppins", sans-serif;
   color: #010483;
`;

export const StartGalleryApps = () => {
  return (
    <>
      <Sec className='online'>
        <div className='container'>
          <SecTitle data-aos="fade-up">
            <HeadH2>Portfolio</HeadH2>
            <ParTitle>React/Apps</ParTitle>
          </SecTitle>
          <div className='row'>
            {galleryApps.map((item, i) => (
            <div className='col-lg-2 col-md-4 mb-4'>
              <Box className='box'>
                <Img className='img'>
                  <Im src={item.cover} alt='todo' />
                </Img>
                <Link to={item.url} key={i} className="nav-item" style={{textDecoration: 'none'}}>
                  <A href='/'>{item.courseName}</A>
                </Link>
                <Spa>{item.course}</Spa>
              </Box>
            </div>
            ))}
          </div>
        </div>
      </Sec>
    </>
  );
};




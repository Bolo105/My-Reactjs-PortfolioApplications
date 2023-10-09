import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { galleryApi } from '../../data/Data';

const Port = styled.div`
   padding-top: 100px;
   padding-bottom: 30px;
   background-color: #fff;
`;
const Card = styled.div`
   margin: 15px auto;
   overflow: hidden;
   &:hover{
    cursor: pointer;
   }
   &:hover img {
    transform: scale(1.5);
   }
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
   padding: 30px 0px;
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
const Cb = styled.div`
   padding-bottom: 30px;
`;
const Imag = styled.img`
    height: 250px;
    width: 530px;
    object-fit: cover;
    cursor: pointer;
    transition: all 1.5s ease;
`;
const A = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: #010101;
`;

export const StartGalleryApi = () => {
  return (
    <Port id='startgalleryapi'>
         <div className = "container">

         <SecTitle data-aos="fade-up">
            <HeadH2>Portfolio</HeadH2>
            <ParTitle>React/API</ParTitle>
         </SecTitle>

          <div className = "row">
          {galleryApi.map((val) => (
             <div className = "col-sm-12 col-md-4 col-lg-4" data-aos="fade-right"> 
                <Card className = "card">
                      <Imag src={val.cover} className = "img-fluid" alt=""/>
                </Card>
                <Cb className = "card-body text-center">
                     <Link to={val.link2} style={{textDecoration: 'none', color: ''}}>
                       <A href = "/">{val.title}</A>
                    </Link>
                </Cb>
             </div>
              ))}
           </div>
          </div>
       </Port>
  )
}

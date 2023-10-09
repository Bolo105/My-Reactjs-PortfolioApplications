import React from 'react'
import { Link } from 'react-router-dom'
import { gallery } from '../../data/Data';
import styled from 'styled-components';

const Sec = styled.section`
   
   padding-top: 100px;
`;
const SecTitle = styled.div`
   padding-bottom: 0px;
   margin: 0;
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
const ParTitle = styled.p`
   margin: 0;
   padding: 0;
   font-size: 30px;
   font-weight: bold !important;
   text-transform: uppercase;
   font-family: "Poppins", sans-serif;
   color: #010483;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const A = styled.a`
  margin: 5px !important;
  text-decoration: none !important;
  color: #010101;
`;

function StartGalleryBase3() {
  return (
<Sec id='startgallerybase3' className=''>
  <div className="container py-5">
      <SecTitle data-aos="fade-up">
          <HeadH2>Portfolio</HeadH2>
          <ParTitle>React/Components</ParTitle>
      </SecTitle>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {gallery.map((item, i) => (
        <div className="col">
          <div className="card h-100">
            <img src={item.cover} className="card-img-top" alt="..." height ="280px"/>
            <Body className="card-body">
              <h5 className="card-title text-center">{item.title}</h5>
              <Link to={item.url1} key={i} style={{textDecoration: 'none'}}>
                <A href="/" className="">{item.link1}</A>
              </Link>
              <Link to={item.url2} key={i} style={{textDecoration: 'none'}}>
                <A href="/" className="">{item.link2}</A>
              </Link>
              <Link to={item.url3} key={i} style={{textDecoration: 'none'}}>
                <A href="/" className="">{item.link3}</A>
              </Link>
            </Body>
          </div>
        </div>
           ))}
      </div>
  </div>
</Sec>
  );
}

export default StartGalleryBase3;
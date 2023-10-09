import React from 'react'
import styled from 'styled-components';


const Wrap  = styled.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`;
const Imag = styled.img`
  transition: 0.3s;
  position: relative;
  z-index: 1;
  width: 530px;
  height: 300px;
`;
const Info = styled.div`
  padding: 25px 20px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #f3f3f3;
  z-index: 2;
`;
const Head = styled.h4`
  font-size: 18px;
  font-weight: 600;
  padding-right: 50px;
`;
const A = styled.a`
  color: #222;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    color: #008374;
  }
`;
const Par = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 0;
  padding-right: 50px;
`;




function GalleryComp03({imagen1, imagen2,  title, text }) {
  return (
    
      <Wrap className="portfolio-wrap">
        <a
          href={require(`../galleriesImages/${imagen1}.jpg`)} 
          data-gallery="portfolio-gallery-app"
          className="glightbox"
        >
          <Imag
            src={require(`../galleriesImages/${imagen2}.jpg`)} 
            className="img-fluid"
            alt=""
          />
        </a>
        <Info className="portfolio-info">
          <Head>
            <A href="portfolio-details.html" title="More Details">
              {title}
            </A>
          </Head>
          <Par>{text}</Par>
        </Info>
      </Wrap>

  );
}

export default GalleryComp03;
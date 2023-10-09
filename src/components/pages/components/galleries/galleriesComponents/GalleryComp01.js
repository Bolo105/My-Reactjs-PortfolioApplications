import React from 'react'
import { BsArrowsAngleExpand } from 'react-icons/bs';
import styled from 'styled-components';

const GalI = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;   
  &:hover img {
    transform: scale(1.1);
  }
`;
const Imag = styled.img`
  transition: 0.3s;
  height: 300px;
  width: 450px;
  
`;
const GalL = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  &:hover {
    opacity: 1;
  }
`;
const A = styled.a`
  position: absolute;
  top: 30%;
  left: 45%;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  line-height: 1.2;
  margin: 30px 8px 0 8px;
  &:hover {
    color: #fff;
    padding-top: 0px;
  }
`;

function GalleryComp01({imagen, imagen1}) {
  return (
    <div>
      <GalI class="gallery-item h-100">
        <Imag 
        src={require(`../galleriesImages/${imagen}.jpg`)} 
        class="img-fluid" 
        alt="" 
        />
        <GalL class="gallery-links d-flex align-items-center justify-content-center">
          <A
            href={require(`../galleriesImages/${imagen1}.jpg`)}
            title="Gallery"
            class="glightbox preview-link"
          >
            <BsArrowsAngleExpand />
          </A>
        </GalL>
      </GalI>
    </div>
  );
}

export default GalleryComp01;

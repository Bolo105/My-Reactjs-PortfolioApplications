import React from 'react'
import GalleryComp01 from './GalleryComp01';
import styled from 'styled-components';

const Gall = styled.section`
   background: #edfaf9;
   padding-top: 100px;
   padding-bottom: 100px;
   margin-top: 70px;
`;
const Head = styled.h2`
   color: #000;
`;
const Par = styled.p`
   color: #000;
`;

function GalleryBase01() {
  return (
    <Gall id="gallerycomp1" className="gallery py-5">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center pb-5">
          <div className="col-lg-6 text-center">
            <Head>Look at my Photos...</Head>
            <Par>Odio et unde deleniti. Deserunt numquam exercitationem.</Par>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='uno' imagen1='uno'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='dos' imagen1='dos'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='tres' imagen1='tres'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='cuatro' imagen1='cuatro'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='cinco' imagen1='cinco'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='seis' imagen1='seis'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='siete' imagen1='siete'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='ocho' imagen1='ocho'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='nueve' imagen1='nueve'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='diez' imagen1='diez'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='once' imagen1='once'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='doce' imagen1='doce'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='trece' imagen1='trece'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='catorce' imagen1='catorce'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='quince' imagen1='quince'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='dieciseis' imagen1='dieciseis'
            />
          </div>
        </div>
      </div>
    </Gall>
  )
}

export default GalleryBase01;

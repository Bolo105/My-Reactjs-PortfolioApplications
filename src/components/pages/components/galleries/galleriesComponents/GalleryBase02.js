import React from 'react'
import GalleryComp02 from './GalleryComp02';
import styled from 'styled-components';

const GalC = styled.section`
   background-color: #fff;
   color: #35373a;
   min-height: 100vh;
   border-radius: 20px;
   margin-top: 90px;
`;
const Head = styled.h2`
    color: #000;
    text-align: center;
    margin-top: 70px;
    font-family: 'Droid Sans', sans-serif;
    font-weight: bold;
`;
const Par = styled.p`
   text-align: center;
   max-width: 800px;
   margin: 15px auto;
   color: #888;
   font-size: 18px;
`;
const Tz = styled.div`
   padding: 40px;
`;

function GalleryBase02() {
  return (
<GalC id='gallerycomp2' className="container gallery-container">
    <Head>Gallery Photos...</Head>
    <Par className="page-description text-center">Odio et unde deleniti. Deserunt numquam exercitationem.</Par>
    <Tz className="tz-gallery">
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='park' imagen1='park'
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='bridge' imagen1='bridge'
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='tunnel' imagen1='tunnel'
                />   
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='coast' imagen1='coast'
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='rails' imagen1='rails'
                /> 
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='traffic' imagen1='traffic'
                /> 
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='rocks' imagen1='rocks'
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='benches' imagen1='benches'
                />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <GalleryComp02 
                imagen='sky' imagen1='sky'
                /> 
            </div>
        </div>
    </Tz>
</GalC>
  )
}

export default GalleryBase02;

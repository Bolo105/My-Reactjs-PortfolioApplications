import React from 'react'
import GalleryComp03 from './GalleryComp03';
import  styled from 'styled-components';

const Sec = styled.section`
  padding: 60px 0;
  overflow: hidden;
  background-color: #f6f6f6;
  margin-top: 70px;
`;
const Header = styled.div`
  text-align: center;
  padding-bottom: 60px;
`;
const Head = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #008374;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;
const Par = styled.p`
  margin-bottom: 0;
  color: #6f6f6f;
`;



function GalleryBase03() {
  return (
    <Sec id="gallerycomp3" className="portfolio sections-bg">
      <div className="container" data-aos="fade-up">
        <Header className="section-header">
          <Head>Portfolio</Head>
          <Par>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </Par>
        </Header>
        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4 portfolio-container">
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
               <GalleryComp03 
               imagen1='rest1' imagen2='rest1' title='Restaurant 1' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
               <GalleryComp03 
               imagen1='ecomm1' imagen2='ecomm1' title='Ecommerce 1' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
               <GalleryComp03 
               imagen1='gym1' imagen2='gym1' title='Gym 1' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
               <GalleryComp03 
               imagen1='car1' imagen2='car1' title='Car Agency 1' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
               <GalleryComp03 
               imagen1='rest4' imagen2='rest4' title='Restaurante 2' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
               <GalleryComp03 
               imagen1='ecomm2' imagen2='ecomm2' title='Ecommerce 2' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
               <GalleryComp03 
               imagen1='gym2' imagen2='gym2' title='Gym 2' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
               <GalleryComp03 
               imagen1='rest3' imagen2='rest3' title='Restaurante 3' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
               <GalleryComp03 
               imagen1='car2' imagen2='car2' title='Car Agency 2' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
               <GalleryComp03 
               imagen1='car3' imagen2='car3' title='Car Agency 3' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
               <GalleryComp03 
               imagen1='ecomm3' imagen2='ecomm3' title='Ecommerce 3' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-books">
               <GalleryComp03 
               imagen1='gym3' imagen2='gym3' title='Gym 3' text='Lorem ipsum, dolor sit amet consectetur'
               />
            </div>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default GalleryBase03;
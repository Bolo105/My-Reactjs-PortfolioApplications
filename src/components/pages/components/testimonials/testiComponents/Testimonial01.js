import React from "react"
import Slider from "react-slick"
import { testimonials } from "./TestiData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"


const Testi = styled.section`
  padding-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #e6f7f3;
  
  .box {
    max-width: 60%;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid #7564e5;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      background-size: cover;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  label {
    color: #7564e5;
    display: block;
    margin-top: -10px;
    margin-bottom: 25px;
    font-style: italic;
  }
  .desc2 {
    font-size: 25px;
  }
`;
const Head2 = styled.h2`
  font-size: 30px;
  color: #707070;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 30px;
  padding-top: 60px;
`;
export const Testimonial01 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
  return (
    <Testi id='testimonial01' className='testimonials py-3 hero' >
        <div className='container'>
        <div className="row">
        <div className="enc text-center">
          <Head2 className="heading " data-aos="zoom-in-down">
          Testimonials
          </Head2>
          <p className="par pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
      </div>
          <Slider {...settings}>
            {testimonials.map((val) => (
             <div className="box">
                 <div class="img" data-aos='zoom-out-right'>
                   <img src={val.cover} alt="" className="img-fluid"/>
                 </div>
                 <p class="desc1" data-aos='zoom-out-down'>{val.desc1}</p>
                 <p class="desc2" data-aos='fade-left'><b>{val.desc2}</b></p> 
                 <label className="desc3" data-aos='zoom-out'>{val.desc3}</label>
            </div>
            ))}
          </Slider>
        </div>
      </Testi>
  )
}


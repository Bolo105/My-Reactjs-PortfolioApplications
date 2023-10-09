import React from 'react'
import slide4 from '../slidersImages/slide4.jpg';
import styled from 'styled-components';

const Home = styled.div`
    background: #fff;
`;
const CarIto = styled.div`
    padding-top: 160px;
    padding-left: 150px;
`;
const Head = styled.h1`
    font-family: 'Moon Dance', cursive;
    font-size: 50px;
    font-weight: bold;
`;
const Imag = styled.img`
    width: 680px;
    height: 650px;
    padding-top: 50px;
`;
const Btn1 = styled.button`
    Margin-right: 10px;
    color: #fff;
    &:hover {
        color: #000;
        font-weight: 500;
        transition: 1s all ease-out;
    }
`;
const Btn2 = styled.button`
    color: #fff;
    &:hover {
        color: #000;
        font-weight: 500;
        transition: 1s all ease-out;
    }
`;
const Span1 = styled.span`
   padding-top: 150px;
   &:before {
    content: "<";
    color: #000;
    font-size: 30px;
    font-weight: bold;
   }
`;
const Span2 = styled.span`
   padding-top: 150px;
   &:after {
    content: ">";
    color: #000;
    font-size: 30px;
    font-weight: bold;
   }
`;

function SliderComp04() {
  return (
    <Home className="home py-3">
		<div className="row px-2">
			<div className="col-sm-12 col-md-6 col-lg-6 col-12 pt-5">
				<div className="carousel slide pt-5" data-bs-ride="carousel" id="carouselExampleControls">
					<div className="carousel-inner">
						<CarIto className="carousel-item active">
							<Head className="animated fadeInDown">Website <span className="text-info">Development</span></Head>
							<p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, <br /> temporibus harum necessitatibus ipsum aut obcaecati.</p>
                            <Btn1 className="btn btn-info" type="button">Learn More</Btn1> 
                            <Btn2 className="btn btn-info" type="button">Contact Us</Btn2>
						</CarIto>
						<CarIto className="carousel-item">
							<Head className="animated fadeInDown">Graphics <span className="text-info">Design</span></Head>
							<p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, <br /> temporibus harum necessitatibus ipsum aut obcaecati.</p>
                            <Btn1 className="btn btn-info" type="button">Learn More</Btn1> 
                            <Btn2 className="btn btn-info" type="button">Contact Us</Btn2>
						</CarIto>
						<CarIto className="carousel-item">
							<Head className="animated fadeInDown">Digital <span className="text-info">Marketing</span></Head>
							<p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, <br /> temporibus harum necessitatibus ipsum aut obcaecati.</p>
                            <Btn1 className="btn btn-info" type="button">Learn More</Btn1> 
                            <Btn2 className="btn btn-info" type="button">Contact Us</Btn2>
						</CarIto>
					</div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <Span1 className="carousel-control-prev-icon" aria-hidden="true"></Span1>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <Span2 className="carousel-control-next-icon" aria-hidden="true"></Span2>
                      <span className="visually-hidden">Next</span>
                    </button>
				</div>
			</div>
			<div className="col-sm-12 col-md-6 col-lg-6 col-12">
                <Imag alt="" className="img-fluid" src={slide4} />
            </div>
		</div>
	</Home>
  )
}

export default SliderComp04;

import React from 'react'
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import pro4 from '../ecommCompImages/pro4.jpg';
import pro5 from '../ecommCompImages/pro5.jpg';
import pro7 from '../ecommCompImages/pro7.jpg';

const Wrap = styled.div`
    background: #ebe8e8;
    padding: 100px 0;
`;

const New = styled.p`
    background: green;
    width: 50px;
    color: white;
    font-size: 12px;
    font-weight: bold;
`;
const Head = styled.h2`
    color: #555;
`;
const Par1 = styled.p`
    color: #fe980f;
    font-weight: bold;
    font-size: 26px;
`;
const Inp = styled.input`
    border: 1px solid #ccc;
    font-weight: bold;
    height: 33px;
    width: 30px;
`;
const Btn = styled.button`
    background: #fe980f;
    color: #fff;
    font-size: 15px;
    margin-left: 20px;
    &:hover {
        background: #fe980f;
        color: #000;
        font-weight: bold;
    }
`;
const Imag = styled.img`
    width: 340px;
    height: 450px;
    background-color: #ddd;
`;

function EcommBase04() {
  return (
    <Wrap className='wrap'>
      <div id = "product" className = "product">
       <div className = "container">
           <div className = "row">
               <div className = "col-md-5">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Imag src={pro5} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <Imag src={pro4} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <Imag src={pro7} className="d-block w-100 img-fluid" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
               </div>
               <div className = "col-md-7">
                  <New className = "newarrival text-center">NEW</New>
                  <Head>Men's T Shirt V Neck Blue Color</Head>
                  <p>Product Code: ISRC2018</p>
                  <div class="rating ">
                    <FaStar size='18px' color='#008000'/>
                    <FaStar size='18px' color='#008000'/>
                    <FaStar size='18px' color='#008000'/>
                    <FaStar size='18px' color='#008000'/>
                    <FaStar size='18px' color='#008000'/>
                  </div>
                  <Par1 className = "price mt-3">USD $15.00</Par1>
                  <p><b>Availability:</b> In Stock</p>
                  <p><b>Condition:</b> New</p>
                  <p><b>Brand:</b> XYZ Company</p>
                  <label for="">Quantity:</label>
                  <Inp type="text" value = "1" />
                  <Btn type = "button" className = "btn btn-default cart">
                      Add to Cart
                  </Btn>
               </div>
           </div>
        </div>
      </div>
    </Wrap>
  )
}

export default EcommBase04;

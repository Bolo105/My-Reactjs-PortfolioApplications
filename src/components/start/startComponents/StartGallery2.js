import React from 'react'
import '../styles/StartGallery2.css';
import { Link } from 'react-router-dom'
import { GiFootTrip, GiSailboat, GiPriceTag } from 'react-icons/gi';
import { FaSlidersH, FaHome, FaQuestion, FaHandshake, FaShoppingCart } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import { CiFaceSmile } from 'react-icons/ci';
import { RiTeamFill } from 'react-icons/ri';
import { SlSpeech } from 'react-icons/sl';


function StartGallery2() {
  return (
    <section id="about" className="bg-light py-5">
        <div className="container">
            <div className="row">
            <div className ="heading">
              <h2 className='head-title'>Portfolio</h2>
              <p className='head-parr'>React/Components</p>
            </div>
            </div>
            <div className="row g-4" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <GiSailboat size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                           <a href='/' className='enl'>Navbars</a>
                        </h5>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <FaHome size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                           <Link className="nav-item" to='/homecomp3' style={{textDecoration: 'none'}}>
                              <a href='/homecomp3' className='enl'>Homes</a>
                           </Link>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <FaSlidersH size='70px' color='#010483'/>
                        </div>
                        <h5 className='mt-4'>
                        <a href='/' className='enl'>Sliders</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <TfiGallery size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>Galleries</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <CiFaceSmile size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>Services</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <FaShoppingCart size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>Ecommerce</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <RiTeamFill size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>Teams</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <FaQuestion size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>FAQ's</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <SlSpeech size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                        <a href='/' className='enl'>Testimonials</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <GiPriceTag size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                           <a href='/' className='enl'>Pricing</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                   <div className="feature-box text-center">
                        <div className="icon-box">
                           <FaHandshake size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                           <a href='/' className='enl'>Contact</a>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="feature-box text-center">
                        <div className="icon-box">
                           <GiFootTrip size='80px' color='#010483'/>
                        </div>
                        <h5 className='mt-3'>
                            <a href='/' className='enl'>Footers</a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
}

export default StartGallery2;
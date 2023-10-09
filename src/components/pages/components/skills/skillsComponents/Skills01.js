import React from 'react'
import { BiLogoTwitter, BiLogoGithub } from 'react-icons/bi';
import { BsGlobe2, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components'
import user1 from '../skillsImages/user1.png'


const Bod = styled.body`
    background-color: #e2e8f0;
    padding: 20px;
    @media (max-width: 1024px) {
       padding-top: 120px;
       padding-bottom: 80px;
    }
    @media (max-width: 992px) {
       padding-top:60px;
       padding-bottom: 60px;
    }
    @media (max-width: 576px) {
       padding-top: 200px;
       padding-bottom: 140px;
    }
`;
const Sec = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center !important;
   align-items: center !important;
   width: 100% !important;
   height: 80vh;
   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
   }
`;
const Cont = styled.div`
    max-width: 1000px;
    padding: 0;
`;
const Par = styled.p`
    margin: 0;
`;
const A = styled.a`
    text-decoration: none;
    color: #686868;
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;
const Pb = styled.div`
    height: 5px;
`;
const Ic = styled.i`
    margin-right: 5px;
`;
const Btn = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff !important;
  background: 	#0000FF;
  cursor: pointer;
  &:hover {
    background: 	#0000FF;
    font-weight: bold;
    color: #fff;
  }
`;


export const Skills01 = () => {
  return (
    <Bod>
    <Sec id = 'skills1'>
       <Cont className="container py-5">
        <div className="row">
           
            <div className="col-md-5">
                <div className="row">

                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                        <div className="d-flex flex-column align-items-center">
                            <Img className="photo"
                                src={user1}
                                alt="" />

                            <Par className="fw-bold h4 mt-3">Samantha Tratore</Par>
                            <Par className="text-muted">Front End Developer</Par>
                            <Par className="text-muted mb-3">Roma, Italia It</Par>
                            <div className="d-flex ">
                                <Btn className="btn follow me-2">Follow</Btn>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 bg-white p-0 px-1 pb-3 mb-3">
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <Par><Ic><BsGlobe2 color='#42f560'/></Ic>Website</Par>
                            <A href="#/">https://myWebSite.com</A>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <Par><Ic><BiLogoGithub color='#010101'/></Ic>Github</Par>
                            <A href="#/">myWebSite</A>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <Par><Ic><BiLogoTwitter color='#8ab7f1'/></Ic>Twitter</Par>
                            <A href="#/">@myWebSite</A>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <Par><Ic><BsInstagram color='#E1306C'/></Ic>Instagram</Par>
                            <A href="#/">myWebSite</A>
                        </div>
                        <div className="d-flex justify-content-between py-2 px-3">
                            <Par><Ic><FaFacebookF color='#5999ec'/></Ic>facebook</Par>
                            <A href="#/">myWebSite</A>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-7 ps-md-4">
                <div className="row">
                    <div className="col-12 bg-white px-1 mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <Par className="py-2">Full Name</Par>
                            <Par className="py-2 text-muted">Samantha Tratore</Par>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <Par className="py-2">Email</Par>
                            <Par className="py-2 text-muted">samy_tratore001@recom.it</Par>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <Par className="py-2">Phone</Par>
                            <Par className="py-2 text-muted">(123) 456-7890</Par>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <Par className="py-2">Mobile</Par>
                            <Par className="py-2 text-muted">(098) 765-4321</Par>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Par className="py-2">Address</Par>
                            <Par className="py-2 text-muted"> Roma, Italia It</Par>
                        </div>
                    </div>
                    <div className="col-12 bg-white px-3 pb-2">
                        <h6 className="d-flex align-items-center mb-3 fw-bold py-3">
                            <span className="me-2">Stack: </span>Front End</h6>
                               <small>Html</small>
                               <Pb className = "progress mb-1">
                                  <div className = "progress-bar" style={{width: '90%', background: '#E65100'}}>
                                     <div className = "progress-value"></div>
                                  </div>
                               </Pb>
                                <small>Bootstrap</small>
                                <Pb className = "progress mb-1">
                                  <div className = "progress-bar" style={{width: '80%', background: '#563d7c'}}>
                                     <div className = "progress-value"></div>
                                  </div>
                               </Pb>
                               <small>Css</small>
                               <Pb className = "progress mb-1">
                                  <div className = "progress-bar" style={{width: '75%', background: '#0277BD'}}>
                                     <div className = "progress-value"></div>
                                  </div>
                               </Pb>
                               <small>JavaScript</small>
                                <Pb className = "progress mb-1">
                                  <div className = "progress-bar" style={{width: '60%', background: '#FFD600'}}>
                                     <div className = "progress-value"></div>
                                  </div>
                               </Pb>
                               <small>React Js</small>
                               <Pb className = "progress mb-4">
                                  <div className = "progress-bar" style={{width: '45%', background: '#61DBFB'}}>
                                     <div className = "progress-value"></div>
                                  </div>
                               </Pb>
                    </div>
                </div>
            </div>
        </div>
    </Cont>
    </Sec>
    </Bod>
  )
}

import React from 'react'
import { FaMagic, FaCode, FaPencilAlt, FaBullhorn, FaEye, FaUmbrella } from 'react-icons/fa';
import styled from 'styled-components';


const ServT = styled.div`
   padding: 70px 0 50px;
   margin-top: 60px;
`;
const Head = styled.h2`
   font-size: 60px;
   line-height: 60px;
   margin-bottom: 20px;
   font-weight: 900;
`;
const ServL = styled.div`
   padding-top: 50px;
`;
const ServB = styled.div`
   margin-bottom: 25px;
   visibility: visible;
   position: relative;
`;
const Icon = styled.div`
    margin: -15px auto;
    font-size: 38px;
    float: left;
    color: #2ac5ed;
    font-weight:bold;
`;
const TextB = styled.div`
    margin-left: 58px;
`;
const Name = styled.div`
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const Info = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
`;
const Text = styled.div`
    font-size: 12px;
    line-height: normal;
    font-weight: 300;
`;

function Services03() {
  return (
    
       <div id='servicecomp3' className="container">
        <section id="services" className="current">
            <ServT className="services-top">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-12 col-md-12">
                            <h2>What We Offer</h2>
                            <Head >Our Services</Head>
                            <p>Our <span className="highlight">experienced</span> and <span className="highlight">dedicated</span> staff provide these services with a smile.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                            <ServL className="services-list">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block">
                                            <Icon>
                                               <FaMagic />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">Web Design</Name>
                                                <Info className="info">Beauty and function</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block">
                                            <Icon>
                                               <FaCode />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">Development/Coding</Name>
                                                <Info className="info">Quality code that lasts</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block">
                                            <Icon>
                                                <FaPencilAlt />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">Copy Writing</Name>
                                                <Info className="info">Words that tell your story</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block">
                                            <Icon>
                                              <FaBullhorn />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">SEO/PPCM</Name>
                                                <Info className="info">Converting users to customers</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block">
                                            <Icon>
                                              <FaEye />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">Branding/Identity</Name>
                                                <Info className="info">Leave a lasting impression</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                    <div className="ccol-sm-12 col-md-6 col-lg-4">
                                        <ServB className="service-block" >
                                            <Icon>
                                               <FaUmbrella />
                                            </Icon>
                                            <TextB className="text-block">
                                                <Name className="name">Strategy/Planning</Name>
                                                <Info className="info">Thinking beyond tomorrow</Info>
                                                <Text className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </Text>
                                            </TextB>
                                        </ServB>
                                    </div>
                                  </div>
                                </ServL>
                            </div>
                        </div>
                    </div>
                </ServT>
        </section>
    </div>
  )
}

export default Services03;
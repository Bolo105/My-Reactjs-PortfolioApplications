import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import styled from "styled-components";

const Sec = styled.section`
  padding: 60px 0;
  overflow: hidden;
  margin-top: 50px;
`;
const SecT = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
const Head1 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #3fbbc0;
    bottom: 0;
    left: calc(50% - 25px);
  }
`;
const Par1 = styled.p`
  margin-bottom: 0;
`;

const InfoB = styled.div`
  color: #444444;
  text-align: center;
  box-shadow: 0 0 20px rgba(214, 215, 220, 1.5);
  padding: 20px 0 30px 0;
`;
const Head = styled.h3`
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 10px 0;
`;
const Par = styled.p`
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
`;
const EmailF = styled.div`
  box-shadow: 0 0 20px rgba(214, 215, 220, 1.5);
  padding: 30px;
`;
const Em = styled.div`
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
`;
const Sm = styled.div`
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
`;
const Load = styled.div`
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  &:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
`;
const But = styled.button`
  background: #3fbbc0;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
  &:hover {
    background: #65c9cd;
  }
`;

function Contact02() {
  return (
    <Sec id="contactcomp2" className="contact">
      <div className="container">
        <SecT className="section-title">
          <Head1>Contact</Head1>
          <Par1>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. 
          </Par1>
        </SecT>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 my-4">
            <div className="row">
              <div className="col-md-12">
                <InfoB className="info-box">
                  <BsGeoAlt size="32px" color="#3fbbc0" />
                  <Head>Our Address</Head>
                  <Par>A108 Adam Street, New York, NY 535022</Par>
                </InfoB>
              </div>
              <div className="col-md-6">
                <InfoB className="info-box mt-4">
                  <BsEnvelope size="32px" color="#3fbbc0" />
                  <Head>Email Us</Head>
                  <Par>
                    info@example.com
                    <br />
                    contact@example.com
                  </Par>
                </InfoB>
              </div>
              <div className="col-md-6">
                <InfoB className="info-box mt-4">
                  <BsTelephone size="32px" color="#3fbbc0" />
                  <Head>Call Us</Head>
                  <Par>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </Par>
                </InfoB>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <EmailF
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  cols="40"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="my-3">
                <Load className="loading">Loading</Load>
                <Em className="error-message"></Em>
                <Sm className="sent-message">
                  Your message has been sent. Thank you!
                </Sm>
              </div>
              <div className="text-center">
                <But type="submit">Send Message</But>
              </div>
            </EmailF>
          </div>
        </div>
      </div>
    </Sec>
  );
}

export default Contact02;

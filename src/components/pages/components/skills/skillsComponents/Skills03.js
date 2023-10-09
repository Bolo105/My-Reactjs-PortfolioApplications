import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import styled from 'styled-components'
import fed from '../skillsImages/fed.jpeg'

const Wr = styled.div`
    color: #888888;
    margin-top:20px;
    padding-top: 100px;
    padding-bottom: 50px;
`;
const Icon = styled.i`
    width: 30px;
    height: 30px;
    padding: 8px 10px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 14px;
    color: #fff;
`;

export const Skills03 = () => {
  return (
<Wr id = 'skills3'> 
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12">
        <div className="mb-2">
          <img className="w-100" src={fed} alt="" />
        </div>
        <div className="mb-2 d-flex">
          <h4 className="font-weight-normal">Roger Federer.</h4>
        </div>
        <div className="mb-2">
          <ul className="list-unstyled">
            <li className="media">
              <span className="w-25 text-black font-weight-normal">Profession: </span>
              <label className="media-body"> Web Developer</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-normal">Experience: </span>
              <label className="media-body"> 6 Years</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-normal">Phone: </span>
              <label className="media-body"> +1 123 456 7890</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-normal">Email: </span>
              <label className="media-body"> roger_champion@gmail.com</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-normal">Location: </span>
              <label className="media-body"> 3478 Smith Road, Fort Worth, Texas, 35 723 USA</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 pl-xl-3">
        <h5 className="font-weight-normal"><GiCheckMark />  Biography.</h5>
        <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim.</p>
        
        <h5 className="font-weight-normal"><GiCheckMark />  Personal Experience.</h5>
        <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim.</p>
        
        <h5 className="font-weight-normal"><GiCheckMark />  Contact Roger.</h5>
        <section className="text-left py-4">
        <a href="/" className="text-white me-3">
          <Icon style={{backgroundColor: '#3b5998'}}><FaFacebookF /></Icon>
        </a>
        <a href="/" className="text-white me-3">
          <Icon style={{backgroundColor: '#55acee'}}><FaTwitter /></Icon>
        </a>
        <a href="/" className="text-white me-3">
          <Icon style={{backgroundColor: '#ac2bac'}}><FaInstagram /></Icon>
        </a>
        <a href="/" className="text-white me-3">
          <Icon style={{backgroundColor: '#0082ca'}}><FaLinkedinIn /></Icon>
        </a>
        
      </section>
        
        <div className="mb-2 mt-2 pt-1">
          <h5 className="font-weight-normal"><GiCheckMark />  Skills</h5>
        </div>
        <div className="py-1">
           <div className = "progress-title">
                <h6>HTML</h6>
                <div className = "progress">
                    <div className = "progress-bar"   style={{width: '90%', backgroundColor: '#E65100'}}>
                        <div className = "progress-value">90%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-1">
            <div className = "progress-title">
                <h6>BOOTSTRAP</h6>
                <div className = "progress">
                    <div className = "progress-bar"   style={{width: '80%', backgroundColor: '#563d7c'}}>
                        <div className = "progress-value">80%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-1">
           <div className = "progress-title">
                <h6>CSS</h6>
                <div className = "progress">
                    <div className = "progress-bar"   style={{width: '70%', backgroundColor: '#0277BD'}}>
                        <div className = "progress-value">70%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-1">
           <div className = "progress-title">
                <h6>JAVASCRIPT</h6>
                <div className = "progress">
                    <div className = "progress-bar"   style={{width: '60%', backgroundColor: '#FFD600'}}>
                        <div className = "progress-value">60%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-1">
           <div className = "progress-title">
                <h6>REACT JS</h6>
                <div className = "progress">
                    <div className = "progress-bar"   style={{width: '50%', backgroundColor: '#61DBFB'}}>
                        <div className = "progress-value">50%</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</Wr> 
  )
}

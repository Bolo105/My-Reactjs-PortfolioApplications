import React from 'react'
import styled from 'styled-components'
import dev from '../skillsImages/dev.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Head2 = styled.h2`
    font: 400 46px/1.2 'Montserrat', serif, sans-serif;
	margin: 5px 0 5px;
	color: #222;
    font-size: 40px;
	font-weight: 700;
`;
const Head3 = styled.h3`
    font: 400 46px/1.2 'Montserrat', serif, sans-serif;
	margin: 5px 0 5px;
	color: #222;
    font-size: 22px;
	text-transform: uppercase;
	margin: 5px 0 15px;
`;
const Head5 = styled.h5`
    font: 400 46px/1.2 'Montserrat', serif, sans-serif;
	margin: 5px 0 5px;
	color: #222;
    font-size: 14px;
`;
const Img = styled.img`
    max-width: 100%;
	height: auto;
`;
const Pw = styled.div`
   margin-bottom: 40px;
`;
const Ws = styled.ul`
    padding: 0;
	margin: 0;
`;
const Li = styled.li`
    display: inline-block;
	margin-right: 5px;
    @media (max-width: 992px) {
        display: inline-block;
	    margin-right: 1px;
}
`;
const A = styled.a`
    background: #2e2e2e;
	text-align: center;
	display: block;
	width: 35px;
	height: 35px;
	line-height: 40px;
	font-size: 1.25em;
	color: #FFF;
    &:hover {
        background: #EF4836;
    }
    @media (max-width: 992px) {
        font-size: 70%; 
        margin-right: 2px;
    }
`;
const Sb = styled.div`
    background: #C4C4C4;
	display: table;
	height: 4px;
	width: 100%;
	margin: 10px -2px 20px -2px;
`;
const Sbon = styled.div`
    background: #353535;
    display: table-cell;
	border-left: 2px solid #FFF;
	border-right: 2px solid #FFF;
`;
const Sbof = styled.div`
    display: table-cell;
	border-left: 2px solid #FFF;
	border-right: 2px solid #FFF;
`;

export const Skills02 = () => {
  return (
    <section id="skills2" className="section py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 headline wow bounceInDown pt-5">
                    <Head2>Jhon Travolta</Head2>
                    <p>Visual Designer. Front-end Developer.</p>
                </div>
                <div className="col-md-3 col-sm-6 hidden-xs wow bounceInLeft">
                    <Img className="avatar" src={dev} alt="" />
                </div>
                <div className="col-md-3 col-sm-6 wow bounceInUp">
                    <Pw className="profile-widget">
                        <Head3>Skillset</Head3>
                        <Head5>Html</Head5>
                        <Sb className="skill-bar">
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                        </Sb>
                        <Head5>Bootstrap</Head5>
                        <Sb className="skill-bar">
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                        </Sb>
                        <Head5>Css</Head5>
                        <Sb className="skill-bar">
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbof className="skill-rate-off"></Sbof>
                        </Sb>
                        <Head5>JavaScript</Head5>
                        <Sb className="skill-bar">
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbof className="skill-rate-off"></Sbof>
                            <Sbof className="skill-rate-off"></Sbof>
                        </Sb>
                        <Head5>React</Head5>
                        <Sb className="skill-bar">
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbon className="skill-rate-on"></Sbon>
                            <Sbof className="skill-rate-off"></Sbof>
                            <Sbof className="skill-rate-off"></Sbof>
                        </Sb>
                    </Pw>
                    <Pw className="profile-widget">
                        <Head3>Social Profiles</Head3>
                        <Ws className="widget-social">
                            <Li><A href="#/"><i><FaFacebookF /></i></A></Li>
                            <Li><A href="#/"><i><FaTwitter /></i></A></Li>
                            <Li><A href="#/"><i><FaInstagram /></i></A></Li>
                            <Li><A href="#/"><i><FaLinkedinIn /></i></A></Li>
                        </Ws>
                    </Pw>
                </div>
                <div className="col-md-6 col-sm-12 wow bounceInRight">
                    <Head3>Profesional Profile</Head3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem incidunt excepturi rem cumque voluptatem et sequi iusto suscipit placeat tempora quia quas, nemo doloremque voluptate, sunt atque porro quo?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem incidunt excepturi rem cumque voluptatem et sequi iusto suscipit placeat tempora quia quas, nemo doloremque voluptate, sunt atque porro quo?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem incidunt excepturi rem cumque voluptatem et sequi iusto suscipit placeat tempora quia quas, nemo doloremque voluptate, sunt atque porro quo?</p>
                </div>
            </div>
        </div>
    </section>
  )
}


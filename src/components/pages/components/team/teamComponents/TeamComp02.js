import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import styled from 'styled-components';

const Headh5 = styled.h5`
line-height: 22px;
font-size: 18px;
font-weight: bold;
padding-top: 15px;
color: #000;
`;
const Ul =styled.ul`
  margin-top: 30px;
`;
const Headh6 = styled.h6`
  color: #8d97ad;
  line-height: 24px;
  font-size: 15px;
  margin: 0 0 20px 0;
  font-weight: bold;
`;
const A = styled.a`
  color: #000;
  padding-right: 15px;
  -webkit-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  transition: 0.1s ease-in;
  &:hover {
    -webkit-transform: translate3d(0px, -5px, 0px);
    transform: translate3d(0px, -5px, 0px);
	  color: #316ce8;
  }
`;

function TeamComp02({imagen, name, job, text}) {
  return (
    <div>
      <div class="row">
        <div class="col-md-12 pro-pic">
          <img
            src={require(`../teamImages/${imagen}.jpg`)}
            alt="wrapkit"
            class="img-fluid"
          />
        </div>
        <div class="col-md-12">
          <div class="pt-2 text-center">
            <Headh5 class="mt-4 font-weight-medium mb-0">{name}</Headh5>
            <Headh6 class="subtitle">{job}</Headh6>
            <p>{text}</p>
            <Ul class="list-inline">
              <li class="list-inline-item">
                <A href="/" class="text-decoration-none d-block px-1">
                  <FaFacebookF />
                </A>
              </li>
              <li class="list-inline-item">
                <A href="/" class="text-decoration-none d-block px-1">
                  <FaTwitter />
                </A>
              </li>
              <li class="list-inline-item">
                <A href="/" class="text-decoration-none d-block px-1">
                  <FaInstagramSquare />
                </A>
              </li>
              <li class="list-inline-item">
                <A href="/" class="text-decoration-none d-block px-1">
                  <FaLinkedin />
                </A>
              </li>
            </Ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamComp02;

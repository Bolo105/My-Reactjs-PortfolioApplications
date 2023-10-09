import React from 'react'
import TeamComp03 from './TeamComp03';
import styled from 'styled-components';

const Team = styled.section`
  background: #fff;
  padding: 60px 0;
  margin-top: 70px;
`;
const SecT = styled.div`
  padding-bottom: 40px;
`;
const Head = styled.h2`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
  &:after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #0531b3;
    margin: 4px 10px;
  }
`;
const Par = styled.p`
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #151515;
`;

function TeamBase03() {
  return (
    <Team id="teamcomp3" className="team">
      <div className="container" data-aos="fade-up">
        <SecT className="section-title">
          <Head>Team</Head>
          <Par>Check our Team</Par>
        </SecT>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <TeamComp03 
            imagen='team9' name='Susan Sarandon' job='Director'
            />
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <TeamComp03 
            imagen='team10' name='Linda Hamilton' job='Secretary'
            />
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <TeamComp03 
            imagen='team11' name='Al Pacino' job='CEO Marketing'
            />
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <TeamComp03 
            imagen='team12' name='Marlon Brandon' job='Human Resources'
            />
          </div>
        </div>
      </div>
    </Team>
  );
}

export default TeamBase03;
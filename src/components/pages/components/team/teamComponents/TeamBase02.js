import React from 'react'
import TeamComp02 from './TeamComp02';
import styled from 'styled-components';

const Team3 = styled.div`
  padding: 50px 0;
  font-family: "Montserrat", sans-serif;
  color: #8d97ad;
  font-weight: 300;
  background-color: #f4f8fa !important;
  margin-top: 70px;
`;
const Head = styled.h3`
  color: #000;
  font-weight: bold;
`;
const Headh6 = styled.h6`
  color: #8d97ad;
  line-height: 24px;
  font-size: 13px;
`;

function TeamBase02() {
  return (
<Team3 id='teamcomp2' class="team3 bg-light">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <Head class="mb-3">Experienced & Professional Team</Head>
        <Headh6 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</Headh6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <TeamComp02 
        imagen='team5' name='Emilio Estevez' job='Web Developer' text='You can relay on our amazing features list and also our customer services will be great experience.'
        />
      </div>
      <div class="col-lg-4 mb-4">
        <TeamComp02 
        imagen='team8' name='Rosa Park' job='Web Design' text='You can relay on our amazing features list and also our customer services will be great experience.'
        />
      </div>
      <div class="col-lg-4 mb-4">
        <TeamComp02 
        imagen='team7' name='Jhon Mcenroe' job='CEO Marketing' text='You can relay on our amazing features list and also our customer services will be great experience.'
        />
      </div>
    </div>
  </div>
</Team3>
    
  );
}

export default TeamBase02;


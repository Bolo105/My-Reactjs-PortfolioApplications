import React from "react";
import TeamComp01 from "./TeamComp01";
import styled from "styled-components";

const Sect = styled.section`
  padding: 60px 0;
  overflow: hidden;
  background-color: #f5f7ff;
  margin-top: 70px;
`;
const SectT = styled.div`
    text-align: center;
    padding-bottom: 30px;
`;
const Head = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #37517e;   
    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 40px;
      height: 3px;
      background: #47b2e4;
      bottom: 0;
      left: calc(50% - 20px);
    }
`;
const Par = styled.p`
    margin-bottom: 0;
`;

function TeamBase01() {
  return (
    <Sect id="teamcomp1" className="team section-bg">
            <div className="container" data-aos="fade-up">
               <SectT className="section-title">
                  <Head>Team</Head>
                  <Par>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</Par>
               </SectT>
               <div className="row">
                  <div class="col-lg-6">
                     <TeamComp01 
                     name='Jhon Smith'
                     profesion='SEO'
                     imagen='team1'
                     text='Explicabo voluptatem mollitia et repellat qui dolorum quas' 
                     />
                  </div>
                  <div class="col-lg-6 mt-4 mt-lg-0">
                     <TeamComp01 
                     name='Linda Hamilton'
                     profesion='Human Resources'
                     imagen='team2'
                     text='Explicabo voluptatem mollitia et repellat qui dolorum quas' 
                     />
                  </div>
                  <div class="col-lg-6 mt-4">
                     <TeamComp01 
                     name='Alec Garcia'
                     profesion='Marketing Analist'
                     imagen='team3'
                     text='Explicabo voluptatem mollitia et repellat qui dolorum quas' 
                     />
                  </div>
                  <div class="col-lg-6 mt-4">
                     <TeamComp01 
                     name='Julia Doe'
                     profesion='Executive Producer'
                     imagen='team4'
                     text='Explicabo voluptatem mollitia et repellat qui dolorum quas' 
                     />
                  </div>
               </div>
            </div>
        </Sect>
  );
}

export default TeamBase01;

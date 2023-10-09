import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding:30px;
  background-color:#fff;
  position:relative;
  &:after {
    content:'';
    position:absolute;
    left:30px;
    bottom:-24px;
    width:0;
    height:0;
    border:15px solid transparent;
    border-width:12px 15px;
    border-top-color:#fff;
  }
`; 
const Aut = styled.div`
  margin-top:28px;
  padding-left:25px;
`; 
const Name = styled.h5`
  font-weight:bold;
  margin-bottom:2px;
  color:inherit;
`; 
const Tit = styled.p`
  font-size:13px;
  color:#9da9ae;
`; 
const Desc = styled.p`
  font-size:15px;
  margin-bottom:0;
`; 
const Imag = styled.img`
  max-width:40px;
  float:left;
  margin-right:12px;
  margin-top:-5px;
`; 

function TestiComp02({ desc, imagen, name, job}) {
  return (
    <>
      <Box className="box">
        <Desc className="description">
          {desc}
        </Desc>
      </Box>
      <Aut className="author">
        <Imag className="rounded-circle" src={require(`../testiImages/${imagen}.jpg`)} alt="" />
        <Name className="name">{name}</Name>
        <Tit className="title">{job}</Tit>
      </Aut>
    </>
  );
}

export default TestiComp02;

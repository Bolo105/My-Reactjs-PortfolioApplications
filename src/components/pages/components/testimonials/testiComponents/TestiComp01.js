import React from "react";
import styled from "styled-components";

 const TourD = styled.div`
  border-radius: 5px;
	padding: 40px
`;
const Grey = styled.div`
  font-family: "Montserrat", Sans-serif;
	font-size: 14px;
	color: #6c83a2;
`;
const Imag = styled.img`
  width: 60px;
	height: 60px;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	object-fit: cover;
	max-width: none;
`;
const LinkN = styled.div`
    font-family: "Montserrat", Sans-serif;
	font-size: 14px;
	color: #6c83a2;
`;
const LinkP = styled.div`
    font-family: "Montserrat", Sans-serif;
    font-size: 12px;
    color: #6c83a2;
`; 


function TestiComp01({text, imagen, name, job}) {
  return (
    <div>
      <div className="tour-item ">
        <TourD className="tour-desc bg-white">
          <Grey className="tour-text color-grey-3 text-center">
            &ldquo;{text}&rdquo;
          </Grey>
          <div className="d-flex justify-content-center pt-2 pb-2">
            <Imag
              className="tm-people"
              src={require(`../testiImages/${imagen}.png`)}
              alt=""
            />
          </div>
          <LinkN className="link-name d-flex justify-content-center">
            {name}
          </LinkN>
          <LinkP className="link-position d-flex justify-content-center">
            {job}
          </LinkP>
        </TourD>
      </div>
    </div>
  );
}

export default TestiComp01;

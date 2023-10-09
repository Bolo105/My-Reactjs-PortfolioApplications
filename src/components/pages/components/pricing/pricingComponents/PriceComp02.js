import React from "react";
import styled from 'styled-components';

const SingP = styled.div`
    background: #fcfcfc;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	transition: all .5s ease;
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 992px) {
            margin-bottom: 30px;
    }
`;
const DealT = styled.div`
    background: linear-gradient(to bottom, #b7f7f3, #28f7e9);
	padding: 15px 0;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 2px;
	color: #192d75;
`;
const DealA = styled.div`
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 51% 100%, 0 60%);
	background: linear-gradient(to right, #b7f7f3, #28f7e9);
	padding: 25px 0;
	color: #192d75;
`;
const Mon = styled.span`
   font-size: 60px;
   font-weight: 900;
`;
const Sup = styled.sup`
   font-size: 40px;
   font-weight: 500;
`;
const DealS = styled.ul`
   padding: 15px 0;
   list-style: none;
`;
const Li = styled.li`
   font-size: 18px;
   font-weight: bold;
   font-family: montserrat;
   padding: 10px 0;
`;
const Btn = styled.a`
    background: linear-gradient(to right, #b7f7f3, #28f7e9);
	border: none;
	font-weight: 500;
	text-transform: uppercase;
	margin-bottom: 30px;
	padding: 10px 50px;
	color: #192d75;
    &:hover{
        font-weight: bold;
        border: 1px solid #000;
    }
`;

function PriceComp02({type, price, space, email, band, domains}) {
  return (
    <SingP className="single-pricing">
      <DealT className="deal-type">{type}</DealT>
      <DealA className="deal-amount">
        <div className="price">
          <Mon className="money">
            <Sup>$</Sup>{price}
          </Mon>
        </div>
        <h4>/year</h4>
      </DealA>
      <DealS className="single-deal">
        <Li>{space}</Li>
        <Li>{email}</Li>
        <Li>{band}</Li>
        <Li>{domains}</Li>
        <Li>Unlimited Subdomains</Li>
      </DealS>
      <Btn href="/" className="btn">
        sign up
      </Btn>
    </SingP>
  );
}

export default PriceComp02;

import React from "react";
import styled from 'styled-components';

const Car = styled.div`
    background-color: rgb(12, 15, 31);
    color: #fff;
    &:before {
      position: absolute;
      content: "";
      height: 40px;
      width: 100%;
      background-color: rgb(12, 15, 31);
      -webkit-transform: skew(1deg, 7deg);
      transform: skew(1deg, 7deg);
      border-radius: 0.375rem;
      top: 0;
      z-index: 0;
    }
`;
const Btn = styled.button`
    background: #cabe0c;
    transition: all 0.25s ease-out;
    font-family: 'Noto Sans', sans-serif;
    cursor: pointer;
    box-shadow: -1px 3px 3px 0 rgba(80, 80, 80, .2);
    width: 205px;
    height: 50px;
    padding: 17px;
    border: none;
    border-radius: 30px;
    margin: 0 10px 40px;
    color: #fff;
    font-weight: bold;
    flex: 0 0 auto;
    &:hover {
      position: relative;
      transform: translateY(-5px);
      box-shadow: -6px 20px 20px 20px rgba(230, 209, 209, 0.12);
    }
`;

function PriceComp03({type, price, elementor, customize, figma, widget, responsive}) {
  return (
    <Car className="card border-0">
      <div className="card-body my-4 mx-5">
        <div className="text-center">
          <h2 className="mb-5">{type}</h2>
          <h3 className="mb-5">${price}</h3>
          <hr />
        </div>
        <div>
          <ul className="list-inline">
            <li className="text-capitalize  mt-2">
              {elementor}
            </li>
            <hr />
            <li className="text-capitalize  mt-2">
              {customize}
            </li>
            <hr />
            <li className="text-capitalize  mt-2">
              {figma}
            </li>
            <hr />
            <li className="text-capitalize  mt-2">
              {widget}
            </li>
            <hr />
            <li className="text-capitalize mt-2">
              {responsive}
            </li>
          </ul>
        </div>
        <div className="text-center mt-5">
          <Btn type="btn" className="btn btn-warning text-capitalize py-2 px-5">
            start now
          </Btn>
        </div>
      </div>
    </Car>
  );
}

export default PriceComp03;

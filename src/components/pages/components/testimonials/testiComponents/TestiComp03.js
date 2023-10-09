import React from "react";
import styled from "styled-components";

const Par = styled.p`
    font-size: 20px;
    line-height: 33px !important;
    color: #fff;
    font-weight: 500;
    @media (max-width: 479px) {
          padding: 0 !important;
  }
`;
const Small = styled.small`
    letter-spacing: 0.5px !important;
`;
const Card = styled.div`
  box-shadow: 0px 5px 16px rgba(223, 241, 223, 0.5);
  transition: 0.8s;
  background: #333;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 7px !important;
  &:after {
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    z-index: 9999;
    height: 100%;
    pointer-events: none;
  }
  &:hover {
    box-shadow: -5px 50px 100px rgba(223, 241, 223, 0.5);
  }
  &:hover hr {
    background-color: #fff !important;
   }
   &:hover h4 {
    font-weight: 600;
   }
   &:hover small {
    font-weight: 600;
   }
   &:hover .layer {
    top: 0;
   }
`;
const CarH = styled.div`
    border-radius: 7px !important;
`;
const Layer = styled.div`
  position: absolute;
  top: calc(100% - 5px);
  width: 100%;
  height: 100%;
  background: linear-gradient(#03a9f4, #e91ee3);
  left: 0;
  z-index: 1;
  transition: 0.5s;
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
`;
const Imag0 = styled.img`
  opacity: 0.1;
  filter: alpha(opacity=40);
`;
const Imag1 = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white !important;
  @media (max-width: 479px) {
        margin-right: 0 !important;
}
`;
const Head = styled.h4`
  color: #fff;
  font-weight: 500;
`;
const Hr = styled.hr`
  background-color: rgb(117, 117, 117);
  width: center !important;
  transition: 1s;
`;

function TestiComp03({ ima1, ima2, text, name, job}) {
  return (
    <Card className="card mt-3 ">
      <Layer className="layer"></Layer>
      <Content className="content">
        <CarH className="card-header text-center border-0">
          <div className="row justify-content-center my-4">
            <div className="col">
              <div className="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                <div className="col-3  text-right">
                  <Imag0
                    className="img-fluid"
                    id="quotes"
                    src={require(`../testiImages/${ima1}.png`)}
                    width="110"
                    height="110"
                    alt=""
                  />
                </div>
                <div className="col pr-lg-5">
                  <Imag1
                    className=" img-1 mr-lg-5 "
                    src={require(`../testiImages/${ima2}.jpg`)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </CarH>
        <div className="card-body text-center pb-3 ">
          <div className="row  justify-content-center">
            <div className="col text-center justify-content-center ">
              <Par className="bold text-center px-md-3">
                {text}
              </Par>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Hr className="mt-auto mb-4" />
        </div>
        <CarH className="card-footer text-center border-0 mt-0 pt-0 mb-3">
          <div className="row text-center name mt-auto ">
            <div className="col">
              <Head className="mb-0 Elizabeth">{name}</Head>
              <Small className="mt-0 text-white">{job}</Small>
            </div>
          </div>
        </CarH>
      </Content>
    </Card>
  );
}

export default TestiComp03;

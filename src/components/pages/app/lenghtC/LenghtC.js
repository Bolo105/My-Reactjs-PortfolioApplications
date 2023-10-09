import React, { useState } from 'react';
import styled from 'styled-components';

const Wr = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const Ap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
const Cont = styled.div`
    box-shadow: 0 0 12px #ccc;
    border-radius: 5px;
    padding: 1rem;
    width: 30%;
`;
const Head2 = styled.h2`
    text-align: center;
    padding-bottom: 20px;
`;
const Inp = styled.input`
    width: 100%;
    font-size: 1.2rem;
    padding: 8px 4px;
    margin: 10px 0;
`;
const Btn = styled.button`
    display: block;
    width: 100%;
    font-size: 1.2rem;
    margin: 8px 0;
    padding: 10px 0;
    background-color: #333;
    color: #fff;
    border: 2px solid blue;
    border-radius: 5px;
    cursor: pointer;
`;
const BtnO = styled.button`
    display: block;
    width: 100%;
    font-size: 1.2rem;
    margin: 8px 0;
    padding: 10px 0;
    background-color: #fff;
    color:  #333;
    border: 2px solid blue;
    border-radius: 5px;
    cursor: pointer;
`;


export const LenghtC = () => {
  const [km, setKm] = useState(0);
  const [miles, setMiles] = useState(0);
  const [cm, setCm] = useState(0);
  const [inches, setInches] = useState(0);
  const [feet, setFeet] = useState(0);
  const [meters, setMeters] = useState(0);

  let calLength = (event) => {
    event.preventDefault();
    if (km === 0) {
      alert('You have to add a valid value');
    } else {
      let miles = km * 0.62137;
      setMiles(miles);

      let cmValue = km * 100000;
      setCm(cmValue);

      let inchesValue = km * 39370.1;
      setInches(inchesValue);

      let feetValue = km * 3280.84;
      setFeet(feetValue);

      let metersValue = km * 1000;
      setMeters(metersValue);
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <Wr>
    <Ap id='lenghtconverter' className="App">
      <Cont className="container">
        <Head2 className="center">Length Converter</Head2>
        <form onSubmit={calLength}>
          <div>
            <label>Kilometers</label>
            <Inp value={km} onChange={(e) => setKm(e.target.value)} />
          </div>
          <div className="">
            <label>Miles</label>
            <Inp value={miles} />
          </div>
          <div className="">
            <label>Centimeters</label>
            <Inp value={cm} />
          </div>
          <div className="">
            <label>Inches</label>
            <Inp value={inches} />
          </div>
          <div className="">
            <label>Feet</label>
            <Inp value={feet} />
          </div>
          <div className="">
            <label>Meters</label>
            <Inp value={meters} />
          </div>
          <Btn className="btn" type="submit">
            Submit
          </Btn>
          <BtnO className="btn btn-outline" type="button" onClick={reload}>
            Reload
          </BtnO>
        </form>
      </Cont>
    </Ap>
    </Wr>
  );
}


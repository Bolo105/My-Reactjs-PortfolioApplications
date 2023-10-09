import React, { useState } from 'react';
import styled from 'styled-components'

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

export const WeightC = () => {
    const [kilogramos, setKilogramos] = useState('');
    const [pounds, setPounds] = useState('');
    const [ounces, setOunces] = useState('');
    const [grams, setGrams] = useState('');
    const [stones, setStones] = useState('');
  
    const kiloWeightConvert = (value) => {
      const kilogramValue = parseFloat(value);
  
      if (!isNaN(kilogramValue)) {
        setPounds(kilogramValue * 2.2046);
        setOunces(kilogramValue * 35.274);
        setGrams(kilogramValue * 1000);
        setStones(kilogramValue * 0.1574);
      } else {
       // If the value is not a valid number, set all output fields to empty.
        setPounds('');
        setOunces('');
        setGrams('');
        setStones('');
      }
    };
   
  return (
    <Wr className='wrapp'>
      <Ap id='weightc' className='app'>
          <Cont className='container'>
              <Head2 className='title'>Weight converter</Head2>
              <p>Enter a value in the kilograms field to convert :</p>
              <p>
                  <label style={{marginRight: '10px'}} for="">Kilograms: </label>
                  <input id="kilogramos" type="number" placeholder="kilograms" value={kilogramos} onChange={(e) => {setKilogramos(e.target.value); kiloWeightConvert(e.target.value);}} />
              </p>
              <div>
                <label>Pounds</label>
                <Inp value={pounds} />
              </div>
              <div>
                <label>Ounces</label>
                <Inp value={ounces}/>
              </div>
              <div>
                <label>Grams</label>
                <Inp value={grams}/>
              </div>
              <div>
                <label>Stones</label>
                <Inp value={stones}/>
              </div>
          </Cont>
      </Ap>
    </Wr>
  )

}

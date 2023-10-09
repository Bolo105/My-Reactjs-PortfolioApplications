import React, { useState } from 'react'

import styled from 'styled-components'

const Wr = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const IMC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: 80vh;
`;
const Cont = styled.div`
  box-shadow: 0px 0px 12px #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 30%;
  align-items: center;
`;
const Inp = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 8px 4px;
  margin: 8px 0;
  border-radius: 8px;
`;
const Btn = styled.button`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 10px 0;
  background-color: #333;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  cursor: pointer;
`;
const BtnO = styled.button`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 10px 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  border-radius: 8px;
  cursor: pointer;
`;
const Head = styled.h2`
  text-align: center;
  margin: 24px 0;
`;
const Par = styled.p`
  margin: 10px 0;
`;
const ImgC = styled.div`
  text-align: center;
`;
const Img = styled.img`
  height: 200px;
`;

export const BMI = () => {
   // state
   const [weight, setWeight] = useState(0)
   const [height, setHeight] = useState(0)
   const [bmi, setBmi] = useState('')
   const [message, setMessage] = useState('')
 
 
   let calculateBmi = (event) => {
     //prevent submitting
     event.preventDefault()
 
     if (weight === 0 || height === 0) {
       alert('Please enter a valid weight and height')
     } else {
      let bmi = (weight /  (height / 100) ** 2);
      setBmi(bmi.toFixed(2));
 
       // Logic for message
 
       if (bmi < 18.5) {
         setMessage('You are underweight')
       } else if (bmi >= 18.5 && bmi < 24.9) {
         setMessage('You are a healthy weight')
       } else if (bmi >= 24.9 && bmi < 29.9){
         setMessage('You are overweight')
       }else {
        setMessage('You are obese')
       }
     }
   }
 
   //  show image based on bmi calculation
   let imgSrc;
 
   if (bmi < 1) {
     imgSrc = null
   } else {
     if(bmi < 18.5) {
       imgSrc = require('./images/underweight.jpeg');
     } else if (bmi >= 18.5 && bmi < 24.9) {
       imgSrc = require('./images/healthy.png');
     } else if(bmi >= 24.9 && bmi < 29.9){
       imgSrc = require('./images/overweight.png');
     }else {
       imgSrc = require('./images/obese.jpeg');
     }
   }
 
 
   let reload = () => {
     window.location.reload()
   }
 
   return (
    <Wr id='bmi' className='wrappe' >
     <IMC  className="bmi">
       <Cont className='container'>
         <Head className='head'>BMI Calculator</Head>
         <form onSubmit={calculateBmi}>
           <div>
             <label>Weight (Kgs)</label>
             <Inp value={weight} onChange={(e) => setWeight(e.target.value)} />
           </div>
           <div>
             <label>Height (Cms)</label>
             <Inp value={height} onChange={(event) => setHeight(event.target.value)} />
           </div>
           <div>
             <Btn className='btn' type='submit'>Submit</Btn>
             <BtnO className='btn btn-outline' onClick={reload} type='submit'>Reload</BtnO>
           </div>
         </form>
 
         <div className='center'>
           <h3>Your BMI is: {bmi}</h3>
           <Par>{message}</Par>
         </div>
 
         <ImgC className='img-container'>
           <Img src={imgSrc} alt='' />
         </ImgC>
       </Cont>
     </IMC>
     </Wr>
   );
 }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mot from '../images/mot.jpg'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mot});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 20px;
  overflow: hidden; /* Para evitar que el contenido desborde en pantallas pequeñas */
`;
const Cont = styled.div`
   margin-top: 300px;
`;
const Title = styled.h1`
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #3498db;
  padding: 350px;
  margin-top: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const QuoteWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Par = styled.p`
  color: #fe9418;
  font-size: 30px;
`;
const QuoteIconLeft = styled(BiSolidQuoteLeft)`
  font-size: 1.5em;
  margin-right: 5px;
  margin-top: -40px; /* Ajusta la posición vertical hacia arriba */
  color: #cc6f04;
`;

const QuoteIconRight = styled(BiSolidQuoteRight)`
  font-size: 1.5em;
  margin-left: 5px;
  margin-bottom: -10px; /* Ajusta la posición vertical hacia abajo */
  color: #cc6f04;
`;

const MotivationalQuoteApp = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    obtenerNuevaFrase();
  }, []);

  const obtenerNuevaFrase = async () => {
    try {
      const apiUrl = 'https://type.fit/api/quotes';
      const response = await axios.get(apiUrl);
      const quotes = response.data;

      // Seleccionar una frase aleatoria de la lista
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex].text;

      setQuote(randomQuote);
    } catch (error) {
      console.error('Error al obtener la frase', error);
    }
  };

  return (
    <AppWrapper id='motivationalquote'>
     <Cont>
      <Title>Motivational Phrase Generator</Title>
      <Button onClick={obtenerNuevaFrase}>Get Phrase</Button>
      <QuoteWrapper>
        {quote && 
            <><QuoteIconLeft /><Par>{quote}</Par><QuoteIconRight /></>}
      </QuoteWrapper>
      </Cont>
    </AppWrapper>
  );
};

export default MotivationalQuoteApp;
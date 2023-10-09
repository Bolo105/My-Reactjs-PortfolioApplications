import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
   width: 25rem;
   &:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
   }
`;
const CardB = styled.div`
   padding: 3rem !important;
`;
const CardT = styled.p`
    font-size: 0.9rem;
    padding: 0.4rem 1.5rem;
`;
const Imag = styled.img`
    height: 40vh;
    transition: all 1.5s ease;
    transform: scale(1);
    &:hover {
      transform: scale(1.2);
    }
`;
const OverF = styled.div`
    overflow: hidden;
`;

function ServicesComp02({ imgsrc, title, text}) {
  return (
        <Card className='card text-center'>
          <OverF className='overflow'>
              <Imag src={imgsrc} alt='Programador' className='card-img-top '/>
          </OverF>
          <CardB className='card-body text-dark'>
             <h4 className='card-title'>{title}</h4>
             <CardT className='card-text text-secondary'>
                {text}  
             </CardT>
             <a href='#home' className='btn btn-outline-primary'>Read More</a>
          </CardB>
        </Card>
  );
}

export default ServicesComp02;
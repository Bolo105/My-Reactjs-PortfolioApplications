import React from 'react';
import styled from 'styled-components';

const CityImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 3px solid #010101;
`;
const CityTitle = styled.h3`
  margin-top: 20px;
`;

export const City = ({ city }) => {
  return (
    <div className='py-5'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-4">
            <CityImg src={city.urls.regular} alt={city.alt_description} />
          </div>
          <div className="col-lg-8">
            <CityTitle>Photo by {city.user.name}</CityTitle>
            <p>{city.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
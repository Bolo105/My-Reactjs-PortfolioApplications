import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const CityG = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;
const CityL = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const CityC = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;
const CityImg = styled.img`
  max-width: 100%;
  height: 400px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 3px solid #010101;
`;
const CityName = styled.h5`
  margin: 10px 0;
`;

export const CityGallery = () => {
  const [cities, setCities] = useState([]);
  
  const fetchCities = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/?client_id=8SxRv_yqnxGOaoVMS4FokDkmlF4luDxHE7gRc9kbT8k&per_page=12');
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <CityG id='citygallery' className="">
      <div className='container'>
        <h1>City Gallery</h1>
        <h4 className='mb-5'>Explore beautiful cities around the world...</h4>
        <CityL className="city-list">
          {cities.map((city) => (
            <Link key={city.id} to={`/city/${city.id}`}>
              <CityC className="city-card">
                <CityImg src={city.urls.regular} alt={city.alt_description} />
                <CityName>{city.user.username}</CityName>
              </CityC>
            </Link>
          ))}
        </CityL>
      </div>
    </CityG>
  );
};

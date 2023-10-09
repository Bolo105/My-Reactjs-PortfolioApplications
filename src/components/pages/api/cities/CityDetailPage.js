import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { City } from './City';
import styled from 'styled-components';

const CityD = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const CityDetailPage = () => {
  const { id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=8SxRv_yqnxGOaoVMS4FokDkmlF4luDxHE7gRc9kbT8k`);
        setCity(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching city details', error);
      }
    };

    fetchCity();
  }, [id]);

  return (
    <CityD id='citydetail' className="text-center">
      <div className='container'>
        {city && <City city={city} />}
        <Link to="/citygallery" className="btn btn-primary">Back to Gallery</Link>
      </div>
    </CityD>
  );
};
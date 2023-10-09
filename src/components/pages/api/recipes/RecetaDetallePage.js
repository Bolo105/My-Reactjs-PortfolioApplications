import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Receta } from './Receta';
import styled from 'styled-components';

const RecD = styled.div`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;


 const RecetaDetallePage = () => {
  const { idMeal } = useParams(); // Obtiene el ID de la receta desde los parámetros de la URL
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        setReceta(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details', error);
      }
    };

    fetchReceta();
  }, [idMeal]);

  return (
    <RecD id='recetadetalle' className="text-center">
      <div className='container'>
        {receta && <Receta receta={receta} />}
        <Link to="/recipegallery" className="btn btn-primary">Come Back</Link>
      </div>
    </RecD>
  );
};
export default RecetaDetallePage;
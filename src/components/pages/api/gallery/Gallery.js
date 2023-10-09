import React, { useState, useEffect } from 'react';
import 'baguettebox.js/dist/baguetteBox.min.css';
import baguetteBox from 'baguettebox.js';
import axios from 'axios';
import styled from 'styled-components';

const Wrp = styled.div`
    background: #ebfff4;
    min-height: 100vh;
    font: normal 16px sans-serif;
    padding: 100px 0;
`;
const Tz = styled.div`
    padding: 30px;
`;
const Imag = styled.img`
    width: 100%;
    height: 500px;
    margin-bottom: 20px;
    transition: 0.2s ease-in-out;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    border-radius: 8px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    }
`;
export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData();
    baguetteBox.run('.tz-gallery');
  }, []);

  async function getData() {
    const apiKey = '8SxRv_yqnxGOaoVMS4FokDkmlF4luDxHE7gRc9kbT8k';
    const apiUrl = `https://api.unsplash.com/photos/random?count=12&client_id=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setImages(response.data);
    } catch (error) {
      console.error('Error al obtener las imágenes', error);
    }
  }

  return (
        <Wrp id='galleryunplash' className='wrapp'>
         <div className="container gallery-container">
            <div className="row d-flex justify-content-center pb-3">
               <div className="col-lg-6 text-center">
                  <h2>This is a Gallery...</h2>
                  <p>Using an External API, Axios and asynchronous programming.</p>
              </div>
            </div>
           <Tz className="tz-gallery">
              <div className="row">
              {images.map((image) => (
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <a className='lightbox' href={image.urls.small}>
                   <Imag key={image.id} src={image.urls.small} alt={image.alt_description} />
                   </a>
                </div>
              ))}
              </div>
           </Tz>
         </div>
        </Wrp>   
    )
};



import React from 'react'
import styled from 'styled-components';

const Imag = styled.img`
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
    transition: 0.2s ease-in-out;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    border-radius: 8px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    }
`;


function GalleryComp02({ imagen, imagen1 }) {
  return (
    <div>
      <a className="lightbox" href={require(`../galleriesImages/${imagen1}.jpg`)}>
        <Imag src={require(`../galleriesImages/${imagen}.jpg`)} alt="imagen" />
      </a>
    </div>
  )
}

export default GalleryComp02;

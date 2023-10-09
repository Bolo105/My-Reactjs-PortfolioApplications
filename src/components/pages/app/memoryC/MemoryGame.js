import React, { useState, useEffect} from 'react';
import jsbadge from './images/jsbadge.svg'
import angular from './images/angular.svg'
import aurelia from './images/aurelia.svg'
import vue from './images/vue.svg'
import ember from './images/ember.svg'
import backbone from './images/backbone.svg'
import react from './images/react.svg'
import styled from 'styled-components';

const GlobalStyles = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Body = styled.body`
  height: 100vh;
  display: flex;
  background: #060AB2;
`;

const MemoryGameWrapper = styled.section`
  width: 640px;
  height: 640px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
`;

const MemoryCard = styled.div`
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  margin: 5px;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s;
  }

  &.flip {
    transform: rotateY(180deg);
  }
`;

const FrontFace = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: #1C7CCC;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const BackFace = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: #1C7CCC;
  backface-visibility: hidden;
`;


export const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [hasFlippedCard, setHasFlippedCard] = useState(false);
    const [lockBoard, setLockBoard] = useState(false);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
  
    useEffect(() => {
      const allCards = document.querySelectorAll('.memory-card');
      setCards(allCards);
    }, []);
  
    useEffect(() => {
      if (cards.length === 0) return;
  
      const shuffle = () => {
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
      };
  
      shuffle();
    }, [cards]);
  
    const flipCard = function () {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add('flip');
  
      if (!hasFlippedCard) {
        setHasFlippedCard(true);
        setFirstCard(this);
      } else {
        setSecondCard(this);
        checkForMatch();
      }
    };
  
    const checkForMatch = function () {
      let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
      isMatch ? disableCards() : unflipCards();
    };
  
    const disableCards = function () {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    };
  
    const unflipCards = function () {
      setLockBoard(true);
  
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
      }, 1500);
    };
  
    const resetBoard = function () {
      setHasFlippedCard(false);
      setLockBoard(false);
      setFirstCard(null);
      setSecondCard(null);
    };
  return (
    <GlobalStyles>
    <Body>
    <MemoryGameWrapper className="memory-game">
      <MemoryCard className="memory-card" data-framework="aurelia" onClick={flipCard}>
        <FrontFace className="front-face" src={aurelia} alt="Aurelia" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="aurelia" onClick={flipCard}>
        <FrontFace className="front-face" src={aurelia} alt="Aurelia" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>

      <MemoryCard className="memory-card" data-framework="vue" onClick={flipCard}>
        <FrontFace className="front-face" src={vue} alt="Vue" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="vue" onClick={flipCard}>
        <FrontFace className="front-face" src={vue} alt="Vue" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>

      <MemoryCard className="memory-card" data-framework="angular" onClick={flipCard}>
        <FrontFace className="front-face" src={angular} alt="Angular" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="angular" onClick={flipCard}>
        <FrontFace className="front-face" src={angular} alt="Angular" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>

      <MemoryCard className="memory-card" data-framework="ember" onClick={flipCard}>
        <FrontFace className="front-face" src={ember} alt="Ember" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="ember" onClick={flipCard}>
        <FrontFace className="front-face" src={ember} alt="Ember" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>

      <MemoryCard className="memory-card" data-framework="backbone" onClick={flipCard}>
        <FrontFace className="front-face" src={backbone} alt="Backbone" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="backbone" onClick={flipCard}>
        <FrontFace className="front-face" src={backbone} alt="Backbone" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>

      <MemoryCard className="memory-card" data-framework="react" onClick={flipCard}>
        <FrontFace className="front-face" src={react} alt="React" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
      <MemoryCard className="memory-card" data-framework="react" onClick={flipCard}>
        <FrontFace className="front-face" src={react} alt="React" />
        <BackFace className="back-face" src={jsbadge} alt="JS Badge" />
      </MemoryCard>
    </MemoryGameWrapper>
    </Body>
    </GlobalStyles>
  );
};


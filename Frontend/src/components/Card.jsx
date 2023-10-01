import React from 'react';
import img1 from '../images/img/plc.jpg'
// Step 1: Create a single card component
import { NavLink } from "react-router-dom";
//import { Routes, Route, useLocation, Navigate } from "react-router-dom";
//import { useState } from "react";


//const [isMenuOpen, setIsMenuOpen] = useState(false);

const styles22={
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '20%',
        textAlign: 'center',
        backgroundColor: '#48a3c6',
        margin: '30px',
        paddingTop: '10px',
        position: 'relative'
      },
      container: {
        padding: '2px 16px'
      },
      inc: {
        textAlign: 'center'
      },
      flx: {
        display: 'flex',
        justifyContent: 'center',
      },
      bt: {
        position: 'absolute',
        bottom: 0,
        
      }
      
}

function Card({ imageSrc, title, description,link }) {
  return (
    <div style={styles22.card}>
      <img src={imageSrc} alt={title} />
      <div style={styles22.container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <NavLink to={link} onClick={() => true}>
            tap for more
        </NavLink>
      </div> <br />
    </div>
  );
}

// Step 2: Create a page component that renders multiple cards
function CardPage({ cardData }) {
  return (
    <div className="card-page"  style={styles22.flx}>
      {cardData.map((card, index) => (
        <Card
          key={index} // Use a unique key for each card
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

// Example data array of objects
const cards = [
  {
    imageSrc: img1,
    title: 'Children',
    description: 'This is the first card description.',
    link: '/Children'
  },
  {
    imageSrc: img1,
    title: 'Psychodiagnostic Disorder',
    description: 'This is the second card description.',
    link: '/Disorder'
  },
  {
    imageSrc: img1,
    title: 'Others',
    description: 'This is the third card description.',
    link: '/Others'
  }
  // Add more card objects as needed
];

function CardY() {
  return (
    <div>
      <CardPage cardData={cards}/>
    </div>
  );
}

export default CardY;

import React from 'react';
import img1 from '../images/img/plc.jpg'
//import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from './Button';
// Step 1: Create a single card component
//import { NavLink } from "react-router-dom";
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

function Card({ imageSrc, title, description }) {
  return (
    <div style={styles22.card}>
      <img src={imageSrc} alt={title} />
      <div style={styles22.container}>
        <h2>{title}</h2>
        <p>{description}</p>
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
        />
      ))}
    </div>
  );
}

// Example data array of objects
const cards = [
  {
    imageSrc: img1,
    title: 'Image 1',
    description: 'This is the first card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 2',
    description: 'This is the second card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 3',
    description: 'This is the third card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 1',
    description: 'This is the first card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 2',
    description: 'This is the second card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 3',
    description: 'This is the third card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 1',
    description: 'This is the first card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 2',
    description: 'This is the second card description.',
  },
  {
    imageSrc: img1,
    title: 'Image 3',
    description: 'This is the third card description.',
  }
  // Add more card objects as needed
];

function Disorder() {
  return (
    <div>
      <CardPage cardData={cards}/>
        <NavLink to='/Therapy' onClick={() => true}>
            <Button name='Go Back'/>
        </NavLink>
    </div>
  );
}

export default Disorder;

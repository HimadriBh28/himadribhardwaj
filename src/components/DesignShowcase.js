import React from 'react';
import './DesignShowcase.css';

const DesignShowcase = () => {
  // Using your actual design images from the designs folder
  const designs = [
    {
      id: 1,
      title: "Interview Session",
      category: "Event Poster",
      image: "/designs/interview-poster.jpeg",
      club: "JYC"
    },
    {
      id: 2,
      title: "Hackwarts",
      category: "Event Poster",
      image: "/designs/hackwarts.jpeg",
      club: "Technical Club"
    },
    {
      id: 3,
      title: "The Wolf of Ideathon",
      category: "Event Poster",
      image: "/designs/wolf-of-ideathon.jpeg",
      club: "ACM"
    },
    {
      id: 4,
      title: "Video Editing Session",
      category: "Workshop",
      image: "/designs/video-editing.jpeg",
      club: "ACM"
    },
    {
      id: 5,
      title: "Le Fiestus",
      category: "Music Festival",
      image: "/designs/music-festival.jpeg",
      club: "Events"
    },
    {
      id: 6,
      title: "Annual Fest",
      category: "Festival",
      image: "/designs/annual-fest.jpeg",
      club: "Cultural"
    }
  ];

  // Triple the designs for seamless infinite scroll
  const infiniteDesigns = [...designs, ...designs, ...designs];

  return (
    <div className="design-showcase">
      <div className="design-showcase-header">
        <h2>�� My Creative Designs</h2>
        <p>Posters and designs created for college events</p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          {infiniteDesigns.map((design, index) => (
            <div key={`${design.id}-${index}`} className="marquee-card">
              <div className="marquee-image">
                <img src={design.image} alt={design.title} />
                <div className="marquee-overlay">
                  <h4>{design.title}</h4>
                  <span className="marquee-category">{design.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="design-showcase-footer">
        <p>✨ Designs scrolling across the screen ✨</p>
      </div>
    </div>
  );
};

export default DesignShowcase;

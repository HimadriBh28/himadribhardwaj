import React, { useEffect, useRef } from 'react';
import './DesignShowcase.css';

const DesignShowcase = () => {
  const designs = [
    {
      id: 1,
      title: "ACM Event Poster",
      category: "Poster Design",
      image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=400&auto=format",
      description: "Event poster for ACM technical workshop",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Social Media Banner",
      category: "Social Media Design",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format",
      description: "Banner design for club promotion",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Workshop Flyer",
      category: "Flyer Design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&auto=format",
      description: "Flyer for design workshop",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Club Logo",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format",
      description: "Logo design for JYC club",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Photography Poster",
      category: "Poster Design",
      image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&auto=format",
      description: "Poster for photography exhibition",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Tech Event Banner",
      category: "Event Design",
      image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=400&auto=format",
      description: "Banner for tech symposium",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    }
  ];

  // Duplicate designs for seamless infinite scroll
  const infiniteDesigns = [...designs, ...designs, ...designs];

  return (
    <div className="design-showcase">
      <div className="design-showcase-header">
        <h2>🎨 My Design Portfolio</h2>
        <p>Creative designs created for various events and clubs</p>
      </div>
      
      <div className="design-carousel-container">
        <div className="design-carousel">
          <div className="design-track">
            {infiniteDesigns.map((design, index) => (
              <div key={`${design.id}-${index}`} className="design-card">
                <div className="design-image" style={{ backgroundImage: `url(${design.image})` }}>
                  <div className="design-overlay" style={{ background: design.gradient }}>
                    <div className="design-info">
                      <h3>{design.title}</h3>
                      <p className="design-category">{design.category}</p>
                      <p className="design-description">{design.description}</p>
                      <div className="design-badge">🎨 Design</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="design-showcase-footer">
        <p>✨ Hover over designs to see details ✨</p>
      </div>
    </div>
  );
};

export default DesignShowcase;

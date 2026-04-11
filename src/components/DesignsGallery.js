import React, { useState } from 'react';
import './DesignsGallery.css';

const DesignsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const designs = [
    {
      id: 1,
      title: "Interview Session Poster",
      category: "Event Poster",
      date: "August 26, 2025",
      venue: "LT-2, 5:30 PM",
      description: "Interview session poster for Technical Sciences Movies and Photography Club",
      image: "/designs/interview-poster.jpeg",
      club: "JYC"
    },
    {
      id: 2,
      title: "Hackwarts - Harry Potter Theme",
      category: "Event Poster",
      date: "16th November 2025",
      venue: "Lecture Theatre 3, 10:00 AM - 1:00 PM",
      description: "Harry Potter themed hacking event poster",
      image: "/designs/hackwarts.jpeg",
      club: "Technical Club"
    },
    {
      id: 3,
      title: "The Wolf of Ideathon",
      category: "Event Poster",
      date: "14-15th November '25",
      venue: "7:30 PM - 9:00 AM",
      description: "24-hour ideathon event with prize pool of ₹10,000",
      image: "/designs/wolf-of-ideathon.jpeg",
      club: "ACM"
    },
    {
      id: 4,
      title: "Video Editing Session",
      category: "Workshop Poster",
      date: "18-19th April 2026",
      venue: "CR-8, 6:00 PM",
      description: "Video editing workshop - Edit, enhance, and express",
      image: "/designs/video-editing.jpeg",
      club: "ACM"
    },
    {
      id: 5,
      title: "Le Fiestus - Campus Music Festival",
      category: "Festival Poster",
      date: "27th April 2025",
      venue: "Sunday",
      description: "Campus music festival featuring DJ Young & Broke",
      image: "/designs/music-festival.jpeg",
      club: "Events"
    },
    {
      id: 6,
      title: "Annual Fest - 25th, 26th, 27th April 2025",
      category: "Festival Poster",
      date: "25th-27th April 2025",
      venue: "Campus",
      description: "Three-day annual fest celebration",
      image: "/designs/annual-fest.jpeg",
      club: "Cultural"
    }
  ];

  const filteredDesigns = filter === 'all' 
    ? designs 
    : designs.filter(d => d.category === filter);

  const categories = ['all', 'Event Poster', 'Workshop Poster', 'Festival Poster'];

  return (
    <div className="designs-gallery">
      <div className="designs-gallery-header">
        <h2>🎨 My Creative Designs</h2>
        <p>Posters and designs created for various college events and clubs</p>
      </div>

      <div className="designs-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'All Designs' : cat}
          </button>
        ))}
      </div>

      <div className="designs-floating-grid">
        {filteredDesigns.map((design, index) => (
          <div 
            key={design.id} 
            className={`design-floating-card ${index % 2 === 0 ? 'float-left' : 'float-right'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => setSelectedImage(design)}
          >
            <div className="design-floating-image">
              <div className="design-placeholder">
                <div className="design-preview">
                  <div className="design-preview-content">
                    <h3>{design.title}</h3>
                    <p className="design-preview-date">{design.date}</p>
                    <div className="design-preview-badge">{design.category}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="design-floating-info">
              <h3>{design.title}</h3>
              <p className="design-date">{design.date}</p>
              <p className="design-venue">{design.venue}</p>
              <span className="design-club">{design.club}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="designs-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-image">
              <div className="lightbox-placeholder">
                <div className="lightbox-preview">
                  <h2>{selectedImage.title}</h2>
                  <p className="lightbox-date">{selectedImage.date}</p>
                  <p className="lightbox-venue">{selectedImage.venue}</p>
                  <p className="lightbox-description">{selectedImage.description}</p>
                  <div className="lightbox-details">
                    <span className="lightbox-category">{selectedImage.category}</span>
                    <span className="lightbox-club">{selectedImage.club}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="designs-gallery-footer">
        <p>✨ Click on any design to view details ✨</p>
        <p className="designs-note">🎨 Each design represents my creative journey in college</p>
      </div>
    </div>
  );
};

export default DesignsGallery;

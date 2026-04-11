import React from 'react';
import Hero from '../components/Hero';
import ProjectRow from '../components/ProjectRow';
import SkillsSection from '../components/SkillsSection';
import GitHubStats from '../components/GitHubStats';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import { projectsData, techStack } from '../data/projectsData';
import './Pages.css';

const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured);
  
  return (
    <div className="page home-page">
      <Hero />
      <ProjectRow 
        title="Featured Projects" 
        projects={featuredProjects} 
        viewAllLink="/projects"
      />
      <SkillsSection skills={techStack} />
      <GitHubStats username="HimadriBh28" />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Home;
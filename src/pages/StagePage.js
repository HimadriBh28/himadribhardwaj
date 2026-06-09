import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PixelAvatar from "../components/PixelAvatar";
import { facts, stages } from "../data";

function StagePage() {
  const { stageId } = useParams();
  const stage = stages[stageId] || stages.about;
  const [bubble, setBubble] = useState(`Welcome to ${stage.title}. This stage is all about ${stage.label.toLowerCase()}.`);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setBubble(""), 5200);
    return () => clearTimeout(timer);
  }, [stageId]);

  const talk = () => {
    setBubble(facts[factIndex % facts.length]);
    setFactIndex((i) => i + 1);
    setTimeout(() => setBubble(""), 5200);
  };

  return (
    <main className={`stage-page ${stage.bgClass}`}>
      <div className="scanlines" />
      <div className="stage-transition" />

      <nav className="stage-nav">
        <Link to="/">← Back to World</Link>
        <Link to="/stage/about">About</Link>
        <Link to="/stage/projects">Projects</Link>
        <Link to="/stage/skills">Skills</Link>
        <Link to="/stage/experience">Internship</Link>
        <Link to="/stage/achievements">Trophies</Link>
        <Link to="/stage/contact">Contact</Link>
      </nav>

      <section className="stage-hero">
        <div className="stage-copy">
          <p className="eyebrow">{stage.label}</p>
          <h1>{stage.title}</h1>
          <p className="stage-intro">{stage.intro}</p>
        </div>

        <div className="stage-avatar-wrap">
          {bubble && <div className="speech-bubble stage-bubble">{bubble}</div>}
          <PixelAvatar onClick={talk} />
        </div>
      </section>

      <section className="stage-content">
        <div className="stage-text">
          {stage.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <div className="stage-cards">
          {stage.cards.map((card) => (
            <span key={card}>{card}</span>
          ))}
        </div>

        {stageId === "contact" && (
          <div className="contact-links">
            <a href="https://github.com/HimadriBh28" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:himadribhardwaj56@gmail.com">Email</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        )}
      </section>
    </main>
  );
}

export default StagePage;

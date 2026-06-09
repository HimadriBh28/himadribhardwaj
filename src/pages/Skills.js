function Skills() {
  const skills = ["Python", "PyTorch", "OpenCV", "React", "JavaScript", "C++", "Unity", "GitHub", "HTML", "CSS", "AI/ML", "Computer Vision"];
  return (
    <>
      <p className="label">SKILL FOREST</p>
      <h1>Skills</h1>
      <div className="skill-list">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </>
  );
}

export default Skills;

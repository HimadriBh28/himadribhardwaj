import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeDownload = () => {
  const downloadResume = () => {
    // Create a direct link to the resume file
    const resumeUrl = '/resume/Himadri_Bhardwaj_Resume.pdf';
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Himadri_Bhardwaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Resume download started');
  };

  return (
    <button onClick={downloadResume} className="resume-btn">
      <FaDownload /> Resume
    </button>
  );
};

export default ResumeDownload;

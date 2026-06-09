export const doors = [
  { id: "about", label: "About", x: 110, y: 180 },
  { id: "projects", label: "Projects", x: 365, y: 122 },
  { id: "skills", label: "Skills", x: 630, y: 210 },
  { id: "experience", label: "Internship", x: 875, y: 135 },
  { id: "achievements", label: "Trophies", x: 1125, y: 235 },
  { id: "contact", label: "Portal", x: 1390, y: 160 },
];

export const facts = [
  
  "Did you know? I love movies and my Letterboxd ID is @himadriB28 ",
  "I am a big Formula 1 fan — Carlos Sainz is one of my favourites ",
  "In my free time, I love sketching and making creative designs ",
  "I enjoy building projects that mix AI, design, and storytelling.",
  "My current AI/ML interest is computer vision and satellite image analysis.",
  "I like portfolios that feel like experiences, not just boring resumes.",
  "Fun fact: Octopuses have three hearts.",
  "Fun fact: Bananas are berries, but strawberries are not.",
  "Fun fact: The Eiffel Tower can grow taller in summer because metal expands.",
  "Fun fact: A day on Venus is longer than a year on Venus.",
  "Fun fact: Formula 1 cars can lose several kilograms of weight during a race due to fuel burn and tyre wear."
];

export const stages = {
  about: {
    label: "Character Profile",
    title: "About Himadri",
    bgClass: "stage-about",
    intro: "This stage introduces the main character of the portfolio world.",
    paragraphs: [
      "Hi, I am Himadri Bhardwaj — an AI/ML intern, app developer, designer, and B.Tech CSE student at JUIT Solan.",
      "I enjoy making projects that are not only useful but also visually fun. My interests sit between AI, computer vision, app development, web design, and creative interfaces.",
      "This portfolio is designed like a game because I want visitors to explore who I am, not just scroll through a plain page."
    ],
    cards: ["AI/ML", "App Dev", "Design", "Creative Coding"]
  },
  projects: {
    label: "Project Village",
    title: "Projects",
    bgClass: "stage-projects",
    intro: "Every project is a quest with a problem, tools, and a result.",
    paragraphs: [
      "Rooftop Detection is my satellite image segmentation project where I work with PyTorch, OpenCV, Kaggle, and DeepLabV3+ ideas to identify rooftops from aerial imagery.",
      "Duplicate Cleaner is a UNIX shell project that finds duplicate files by hash and supports safe, delete, and archive modes.",
      "I have also worked on app and web ideas like a Movie Review App, Secure Login System, CampusQuest AI, and Unity game experiments."
    ],
    cards: ["Rooftop Detection", "Duplicate Cleaner", "CampusQuest AI", "Movie App", "Secure Login", "Unity Rocket"]
  },
  skills: {
    label: "Skill Forest",
    title: "Skills Inventory",
    bgClass: "stage-skills",
    intro: "These are the power-ups collected across my coding journey.",
    paragraphs: [
      "My core technical skills include Python, PyTorch, OpenCV, React, JavaScript, C++, HTML, CSS, GitHub, and Unity.",
      "I am especially interested in AI/ML, computer vision, creative interfaces, and building apps that feel polished and useful.",
      "I also like design work, so I care about how a project looks and feels, not only whether the code runs."
    ],
    cards: ["Python", "PyTorch", "OpenCV", "React", "JavaScript", "C++", "Unity", "GitHub", "HTML/CSS"]
  },
  experience: {
    label: "Internship HQ",
    title: "BISAG-N Experience",
    bgClass: "stage-experience",
    intro: "This stage covers my AI/ML internship chapter.",
    paragraphs: [
      "I am an AI/ML intern at BISAG-N, connected with MeitY ecosystem work and technical learning.",
      "My current project focus is rooftop detection from satellite imagery, using computer vision and segmentation ideas.",
      "This experience is helping me understand how AI can be used for geospatial and real-world public-impact applications."
    ],
    cards: ["AI/ML Intern", "BISAG-N", "Satellite Imagery", "Segmentation", "Geospatial AI"]
  },
  achievements: {
    label: "Trophy Arena",
    title: "Achievements",
    bgClass: "stage-achievements",
    intro: "Unlocked trophies and creative wins.",
    paragraphs: [
      "I placed 2nd in Adventum Pixel War and 2nd in ACE JUIT Graphic Design, which reflects my interest in creative and visual work.",
      "I have participated in SIH and enjoy contributing ideas that combine technology, product thinking, and design.",
      "I am also interested in ACM-JUIT app development and design contributions."
    ],
    cards: ["Pixel War 2nd", "Graphic Design 2nd", "SIH", "ACM-JUIT"]
  },
  contact: {
    label: "Contact Portal",
    title: "Connect With Me",
    bgClass: "stage-contact",
    intro: "Final stage: open a portal to connect.",
    paragraphs: [
      "You can reach me through GitHub or email. I am open to project collaborations, internships, creative tech ideas, and AI/ML learning opportunities.",
      "Thanks for playing through my portfolio world."
    ],
    cards: ["GitHub", "Email", "Resume"]
  }
};

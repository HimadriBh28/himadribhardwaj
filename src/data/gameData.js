export const PLAYER_START = { x: 50, y: 70 };

export const zones = [
  {
    id: 'about',
    title: 'Spawn Point: About Me',
    type: 'npc',
    emoji: '🧙‍♀️',
    x: 14,
    y: 18,
    w: 17,
    h: 16,
    prompt: 'Talk',
    lines: [
      'Hi, I am Himadri Bhardwaj.',
      'B.Tech CSE student, AI/ML intern, app developer, and designer.',
      'I like building apps, AI projects, games, and creative web experiences.'
    ]
  },
  {
    id: 'projects',
    title: 'Project Village',
    type: 'building',
    emoji: '🏘️',
    x: 67,
    y: 16,
    w: 18,
    h: 17,
    prompt: 'Enter',
    lines: [
      'Project Village unlocked.',
      'Each project is a quest I completed while learning development, AI, and design.'
    ]
  },
  {
    id: 'skills',
    title: 'Skill Forest',
    type: 'forest',
    emoji: '🌲',
    x: 12,
    y: 62,
    w: 22,
    h: 18,
    prompt: 'Collect',
    lines: [
      'Skill Forest unlocked.',
      'Collect skill coins: Python, PyTorch, OpenCV, React, Next.js, Tailwind, Unity, C++, Git, MongoDB.'
    ]
  },
  {
    id: 'experience',
    title: 'Internship HQ',
    type: 'hq',
    emoji: '🛰️',
    x: 70,
    y: 60,
    w: 18,
    h: 18,
    prompt: 'Visit',
    lines: [
      'AI/ML Intern — BISAG-N.',
      'Current quest: rooftop detection from satellite images using computer vision and deep learning.',
      'Focus: segmentation, masks, bounding boxes, centroid detection, and geospatial AI use cases.'
    ]
  },
  {
    id: 'achievements',
    title: 'Achievement Arena',
    type: 'arena',
    emoji: '🏆',
    x: 44,
    y: 43,
    w: 16,
    h: 14,
    prompt: 'Inspect',
    lines: [
      'Trophies discovered.',
      'Adventum Pixel War — 2nd Place.',
      'ACE JUIT Graphic Design — 2nd Place.',
      'SIH Participant and active club/event contributor.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact Portal',
    type: 'portal',
    emoji: '🌀',
    x: 45,
    y: 78,
    w: 16,
    h: 14,
    prompt: 'Open',
    lines: [
      'Final portal reached.',
      'Email: himadribhardwaj56@gmail.com',
      'GitHub: github.com/HimadriBh28',
      'LinkedIn: linkedin.com/in/himadri-bhardwaj-947518289'
    ]
  }
];

export const projects = [
  {
    name: 'Rooftop Detection Lab',
    role: 'AI/ML + Computer Vision',
    description: 'Satellite rooftop detection project using segmentation masks to identify rooftops and support population estimation use cases.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'DeepLabV3+', 'Kaggle'],
    github: 'https://github.com/HimadriBh28'
  },
  {
    name: 'Duplicate Cleaner',
    role: 'UNIX Shell Tool',
    description: 'Hash-based duplicate file scanner with safe, delete, and archive modes plus logs.',
    tech: ['Shell', 'Bash', 'UNIX', 'shasum'],
    github: 'https://github.com/HimadriBh28/DuplicateCleanerProject'
  },
  {
    name: 'Movie Review App',
    role: 'Mobile App',
    description: 'React Native movie app with search, reviews, movie details, and mobile-first UI.',
    tech: ['React Native', 'TypeScript', 'Expo'],
    github: 'https://github.com/HimadriBh28/movie_review_app'
  },
  {
    name: 'MusicBoard',
    role: 'Flutter App',
    description: 'Flutter music review app for albums, ratings, and Firebase-backed user features.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/HimadriBh28/MusicBoard'
  },
  {
    name: 'Secure Login System',
    role: 'Web Security',
    description: 'Authentication system with registration, login, validation, and clean modal-style UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/HimadriBh28/Team-8-Secure-Login-System'
  },
  {
    name: 'DodgeIt!',
    role: 'Unity Game',
    description: 'First Unity obstacle game focused on movement, collisions, and game mechanics.',
    tech: ['Unity', 'C#'],
    github: 'https://github.com/HimadriBh28/DodgeIt-'
  }
];

export const skills = [
  'Python', 'PyTorch', 'OpenCV', 'React', 'React Native', 'Next.js', 'Tailwind CSS',
  'JavaScript', 'TypeScript', 'C++', 'Unity', 'C#', 'MongoDB', 'Node.js', 'Git', 'Bash'
];

export const achievements = [
  'Adventum Pixel War — 2nd Place',
  'ACE JUIT Graphic Design — 2nd Place',
  'SIH Participant',
  'ACM-JUIT design and app-dev contributor',
  'BISAG-N AI/ML Internship'
];

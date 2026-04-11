import React from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = () => {
  // Your actual LeetCode stats from the image
  const stats = {
    totalSolved: 87,
    totalProblems: 3897,
    easySolved: 64,
    easyTotal: 936,
    mediumSolved: 21,
    mediumTotal: 2039,
    hardSolved: 2,
    hardTotal: 922,
    acceptance: 87.07,
    contestRating: 1413,
    globalRanking: 693576,
    totalRanking: 865650,
    attendedContests: 7,
    topPercentage: 80.39,
    activeDays: 39,
    maxStreak: 16,
    submissionsLastYear: 116,
    attempting: 3,
    languages: [
      { name: "C++", solved: 85, percentage: 98 },
      { name: "MySQL", solved: 2, percentage: 2 }
    ]
  };

  // Calculate percentages
  const easyPercent = (stats.easySolved / stats.easyTotal) * 100;
  const mediumPercent = (stats.mediumSolved / stats.mediumTotal) * 100;
  const hardPercent = (stats.hardSolved / stats.hardTotal) * 100;
  const overallPercent = (stats.totalSolved / stats.totalProblems) * 100;

  return (
    <div className="leetcode-section">
      <div className="leetcode-header">
        <h2>💻 LeetCode Stats</h2>
        <a href="https://leetcode.com/u/himadrib28/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
          View Profile →
        </a>
      </div>

      {/* Main Stats Grid */}
      <div className="leetcode-stats-grid">
        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.contestRating}</div>
          <div className="stat-label">Contest Rating</div>
          <div className="stat-small">Global Rank: {stats.globalRanking.toLocaleString()}/{stats.totalRanking.toLocaleString()}</div>
          <div className="stat-small">Attended: {stats.attendedContests} contests</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.topPercentage}%</div>
          <div className="stat-label">Top Percentage</div>
          <div className="stat-small">Better than {stats.topPercentage}% of users</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.totalSolved}</div>
          <div className="stat-label">Problems Solved</div>
          <div className="stat-small">+{stats.attempting} attempting</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.acceptance}%</div>
          <div className="stat-label">Acceptance Rate</div>
        </div>
      </div>

      {/* Problem Distribution */}
      <div className="leetcode-progress">
        <h3>Problem Distribution</h3>
        <div className="progress-bars">
          <div className="progress-item">
            <span className="progress-label easy">Easy</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill easy-fill" style={{ width: `${easyPercent}%` }} />
            </div>
            <span className="progress-count">{stats.easySolved}/{stats.easyTotal}</span>
            <span className="progress-percent">{easyPercent.toFixed(1)}%</span>
          </div>
          <div className="progress-item">
            <span className="progress-label medium">Medium</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill medium-fill" style={{ width: `${mediumPercent}%` }} />
            </div>
            <span className="progress-count">{stats.mediumSolved}/{stats.mediumTotal}</span>
            <span className="progress-percent">{mediumPercent.toFixed(1)}%</span>
          </div>
          <div className="progress-item">
            <span className="progress-label hard">Hard</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill hard-fill" style={{ width: `${hardPercent}%` }} />
            </div>
            <span className="progress-count">{stats.hardSolved}/{stats.hardTotal}</span>
            <span className="progress-percent">{hardPercent.toFixed(1)}%</span>
          </div>
        </div>
      </div>

      {/* Overall Progress Ring */}
      <div className="leetcode-overall">
        <h3>Overall Progress</h3>
        <div className="progress-ring-container">
          <div className="progress-ring">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#2c2c2c" strokeWidth="8"/>
              <circle 
                cx="60" cy="60" r="54" fill="none" 
                stroke="#e50914" strokeWidth="8" 
                strokeDasharray={`${overallPercent * 3.39} 339`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="ring-center">
              <span className="ring-percent">{overallPercent.toFixed(1)}%</span>
              <span className="ring-label">Solved</span>
            </div>
          </div>
          <div className="stats-summary">
            <div className="summary-item">
              <span className="summary-value">{stats.submissionsLastYear}</span>
              <span className="summary-label">Submissions (Last Year)</span>
            </div>
            <div className="summary-item">
              <span className="summary-value">{stats.activeDays}</span>
              <span className="summary-label">Active Days</span>
            </div>
            <div className="summary-item">
              <span className="summary-value">{stats.maxStreak}</span>
              <span className="summary-label">Max Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="leetcode-badges">
        <h3>Badges & Achievements</h3>
        <div className="badges-grid">
          <div className="badge-card locked">
            <div className="badge-icon">🔒</div>
            <div className="badge-name">Apr LeetCoding Challenge</div>
            <div className="badge-status">Locked</div>
          </div>
          <div className="badge-card">
            <div className="badge-icon">📅</div>
            <div className="badge-name">116 Submissions</div>
            <div className="badge-status">Past Year</div>
          </div>
          <div className="badge-card">
            <div className="badge-icon">⚡</div>
            <div className="badge-name">16 Day Streak</div>
            <div className="badge-status">Active</div>
          </div>
        </div>
      </div>

      {/* Languages Used */}
      <div className="leetcode-languages">
        <h3>Languages Used</h3>
        <div className="language-stats">
          {stats.languages.map(lang => (
            <div key={lang.name} className="language-stat">
              <div className="language-header">
                <span className="language-name">{lang.name}</span>
                <span className="language-solved">{lang.solved} problems</span>
              </div>
              <div className="language-bar-bg">
                <div className="language-bar-fill" style={{ width: `${lang.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;

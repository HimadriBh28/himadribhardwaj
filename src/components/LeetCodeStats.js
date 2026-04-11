import React, { useEffect, useState } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = () => {
  const [stats, setStats] = useState({
    totalSolved: 87,
    easySolved: 64,
    mediumSolved: 21,
    hardSolved: 2,
    acceptance: 87.07,
    ranking: 1678881,
    contestRating: 1413,
    globalRanking: 693576,
    attendedContests: 7,
    activeDays: 39,
    maxStreak: 16,
    languages: [
      { name: "C++", solved: 85 },
      { name: "MySQL", solved: 2 }
    ]
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real-time stats from LeetCode API
    const fetchLeetCodeStats = async () => {
      try {
        // Using LeetCode GraphQL API
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/himadrib28');
        const data = await response.json();
        
        if (data.status === 'success') {
          setStats({
            totalSolved: data.totalSolved || 87,
            easySolved: data.easySolved || 64,
            mediumSolved: data.mediumSolved || 21,
            hardSolved: data.hardSolved || 2,
            acceptance: data.acceptanceRate || 87.07,
            ranking: data.ranking || 1678881,
            contestRating: 1413,
            globalRanking: 693576,
            attendedContests: 7,
            activeDays: 39,
            maxStreak: 16,
            languages: [
              { name: "C++", solved: data.totalSolved - 2 || 85 },
              { name: "MySQL", solved: 2 }
            ]
          });
        }
        setLoading(false);
      } catch (error) {
        console.log('Using fallback LeetCode stats');
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <div className="leetcode-section">
        <h2>💻 LeetCode Stats</h2>
        <div className="leetcode-loading">Loading stats...</div>
      </div>
    );
  }

  return (
    <div className="leetcode-section">
      <div className="leetcode-header">
        <h2>💻 LeetCode Progress</h2>
        <a href="https://leetcode.com/u/himadrib28/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
          View Profile →
        </a>
      </div>

      <div className="leetcode-stats-grid">
        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.totalSolved}</div>
          <div className="stat-label">Problems Solved</div>
          <div className="stat-breakdown">
            <span className="easy">E: {stats.easySolved}</span>
            <span className="medium">M: {stats.mediumSolved}</span>
            <span className="hard">H: {stats.hardSolved}</span>
          </div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.acceptance}%</div>
          <div className="stat-label">Acceptance Rate</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.contestRating}</div>
          <div className="stat-label">Contest Rating</div>
          <div className="stat-small">Rank: #{stats.globalRanking.toLocaleString()}</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.attendedContests}</div>
          <div className="stat-label">Contests Attended</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-value">{stats.activeDays}</div>
          <div className="stat-label">Active Days</div>
          <div className="stat-small">Max Streak: {stats.maxStreak}</div>
        </div>

        <div className="leetcode-stat-card">
          <div className="stat-label">Languages</div>
          <div className="language-bars">
            {stats.languages.map(lang => (
              <div key={lang.name} className="language-item">
                <span className="language-name">{lang.name}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(lang.solved / stats.totalSolved) * 100}%` }}
                  />
                </div>
                <span className="language-count">{lang.solved} solved</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="leetcode-progress">
        <h3>Problem Distribution</h3>
        <div className="progress-bars">
          <div className="progress-item">
            <span className="progress-label easy">Easy</span>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill easy-fill" 
                style={{ width: `${(stats.easySolved / 936) * 100}%` }}
              />
            </div>
            <span className="progress-count">{stats.easySolved}/936</span>
          </div>
          <div className="progress-item">
            <span className="progress-label medium">Medium</span>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill medium-fill" 
                style={{ width: `${(stats.mediumSolved / 2039) * 100}%` }}
              />
            </div>
            <span className="progress-count">{stats.mediumSolved}/2039</span>
          </div>
          <div className="progress-item">
            <span className="progress-label hard">Hard</span>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill hard-fill" 
                style={{ width: `${(stats.hardSolved / 922) * 100}%` }}
              />
            </div>
            <span className="progress-count">{stats.hardSolved}/922</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;

import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, percentage, description, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="progress-circle">{percentage}%</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatsCard;

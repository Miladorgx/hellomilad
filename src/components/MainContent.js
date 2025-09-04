import React from 'react';
import './MainContent.css';
import Header from './Header';
import StatsCard from './StatsCard';
import ChartSection from './ChartSection';
import TaskList from './TaskList';

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <div className="stats-cards-container">
        <StatsCard 
          title="میزان پیشرفت امروز"
          percentage={80}
          description="امروز ترکوندی!"
          color="cyan"
        />
        <StatsCard 
          title="کارهای درحال انجام"
          percentage={40}
          description="هنوز ۶ تا کار مونده!"
          color="yellow"
        />
        <StatsCard 
          title="کارهای ناتمام"
          percentage={65}
          description="تراز کارت عقب نیوفتن :("
          color="red"
        />
      </div>
      <div className="bottom-section">
        <ChartSection />
        <TaskList />
      </div>
    </div>
  );
};

export default MainContent;

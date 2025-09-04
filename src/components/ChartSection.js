import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ChartSection.css';

const data = [
  { name: 'فروردین', پیشرفت: 30 },
  { name: 'اردیبهشت', پیشرفت: 75 },
  { name: 'خرداد', پیشرفت: 50 },
  { name: 'تیر', پیشرفت: 90 },
  { name: 'مرداد', پیشرفت: 85 },
  { name: 'شهریور', پیشرفت: 25 },
  { name: 'مهر', پیشرفت: 35 },
  { name: 'آبان', پیشرفت: 65 },
  { name: 'آذر', پیشرفت: 55 },
  { name: 'دی', پیشرفت: 80 },
  { name: 'بهمن', پیشرفت: 95 },
  { name: 'اسفند', پیشرفت: 60 },
];

const ChartSection = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>نمودار پیشرفت سال ۱۴۰۴</h3>
        <select className="year-select">
          <option>انتخاب سال</option>
          <option>۱۴۰۴</option>
          <option>۱۴۰۳</option>
        </select>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: 'var(--light-text)' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(tick) => `${tick}%`} tick={{ fill: 'var(--light-text)' }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="پیشرفت" stroke="var(--chart-stroke)" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;

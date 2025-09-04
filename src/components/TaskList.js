import React from 'react';
import './TaskList.css';
import { FaPlus } from 'react-icons/fa';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'طراحی صفحه اصلی', tag: 'UI/UX', done: false },
    { id: 2, title: 'پیاده‌سازی API کاربران', tag: 'Backend', done: true },
    { id: 3, title: 'جلسه با تیم فروش', tag: 'Meeting', done: false },
  ];

  return (
    <div className="task-list-container">
      <h3 className="task-list-title">مهم ترین کارهای امروز</h3>
      <div className="tasks">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <input type="checkbox" defaultChecked={task.done} />
            <div className="task-details">
              <span className={`task-title ${task.done ? 'done' : ''}`}>{task.title}</span>
              <span className="task-tag">{task.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="add-task-footer-btn">
        <FaPlus /> افزودن کار جدید
      </button>
    </div>
  );
};

export default TaskList;

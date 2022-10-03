import React from "react";
import './style.scss'

export default function List() {
  const task = [{
    task: 'React',
    time: '02:00:00'
  }, {
    task: 'Javascript',
    time: '01:00:00'
  }]
  return (
    <aside className="listTask">
      <h2>Estudo do dia</h2>
      <ul>
        {task.map((task, index) => (
          <li key={index} className="item">
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import ITask from '../types/ITask';
import style from './app.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectedTask = (taskSelected: ITask) => {
    setSelected(taskSelected);
    setTasks((oldTasks) => oldTasks.map((task) => ({
      ...task,
      selected: taskSelected.id === task.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectedTask={selectedTask}
      />
      <Timer />
    </div>
  );
}

export default App;

import Button from "../Button";
import style from "./form.module.scss";
import { useState } from "react";
import ITask from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

export default function Form({ setTasks }: IFormProps) {
  const taskBlank: ITask = {task: '', time: '00:00:00', completed: false, selected: false, id: ''}
  const [task, setTask] = useState<ITask>(taskBlank);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...task,
        id: uuidv4()
      }
    ]);
    setTask(taskBlank);
  };

  return (
    <form className={style.newTask} onSubmit={(event) => addTask(event)}>
      <h1>Adicionar Estudo</h1>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Tarefa
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task.task}
          onChange={(event) => setTask({...task, task: event.target.value})}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          value={task.time}
          onChange={(event) => setTask({...task, time: event.target.value})}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

interface IFormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

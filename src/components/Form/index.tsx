import Button from "../Button";
import style from "./form.module.scss";
import { useState } from "react";

export default function Form() {
  const [task, setTask] = useState<ITask>({task: '', time: '00:00:00'});
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit', task);
  };
  return (
    <form className={style.newTask} onSubmit={(event) => addTask(event)}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task.task}
          onChange={(event) => setTask({...task, task: event.target.value})}
          placeholder="O que você quer estudar"
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

interface ITask {
  task: string,
  time: string
}
